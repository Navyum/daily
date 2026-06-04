import os
import sys
import argparse
import requests
from datetime import datetime, timedelta, timezone
from urllib.parse import urljoin, urlparse
from bs4 import BeautifulSoup
import pytz
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry
from tencentcloud.common import credential
from tencentcloud.tmt.v20180321 import tmt_client as tencent_tmt_client, models
import jieba
import jieba.analyse
from urllib.parse import urlencode, urlunparse, urlparse, parse_qs

class Product:
    def __init__(self, id: str, name: str, tagline: str, description: str, votesCount: int, createdAt: str, featuredAt: str, website: str, url: str, translator=None, **kwargs):
        self.name = name
        self.tagline = tagline
        self.description = description
        self.votes_count = votesCount
        self.created_at = self.convert_to_beijing_time(createdAt)
        self.featured = "是" if featuredAt else "否"
        self.website = stripe_url_params(website)
        self.url = stripe_url_params(url)
        self.og_image_url = ""
        self.keyword = "无关键词"
        self.translator = translator
        self.translated_tagline = self.translate_text(self.tagline)
        self.translated_description = self.translate_text(self.description)

        media = kwargs.get("media", False)
        if media:
            raw_url = media[0]["url"]
            add_params = {
                "fit": "crop",
                "frame": 1,
                "h": 512,
                "w":1024
            }
            
            self.og_image_url = self.update_url_params(raw_url, add_params )

        
        
    # 因为ph上线了cloudflare 人机验证，所以无法通过标签方式获取图片
    def fetch_og_image_url(self) -> str:
        """获取产品的Open Graph图片URL"""
        # 添加更多请求头信息
        headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
            "Accept-Language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7",
            "Connection": "keep-alive"
        }

        response = requests.get(self.url, headers=headers)
        print(response.status_code)
        print(self.url)
        if response.status_code == 200:
            print(response.text)
            soup = BeautifulSoup(response.text, 'html.parser')
            og_image = soup.find("meta", property="og:image")
            if og_image:
                return og_image["content"]
            # 备用:查找twitter:image meta标签
            twitter_image = soup.find("meta", name="twitter:image") 
            if twitter_image:
                return twitter_image["content"]
        return ""


    def update_url_params(self, url, params):
        """
        给 URL 追加/覆盖参数（保留原有参数）
        :param url: 原始 URL（可带查询参数）
        :param params: 要追加/覆盖的参数（字典）
        :return: 更新后的 URL
        """
        # 解析 URL
        parsed_url = urlparse(url)
        # 解析原有查询参数（parse_qs 会将参数转为字典，列表值保留多个）
        original_params = parse_qs(parsed_url.query)
        
        # 合并参数：新参数覆盖原有重复键，新增键追加
        # 注意：parse_qs 解析后的值是列表（如 {"page": ["1"]}），需处理为单个值
        merged_params = {}
        # 先添加原有参数（去列表化，保留第一个值）
        for key, value in original_params.items():
            merged_params[key] = value[0] if len(value) == 1 else value
        # 再添加新参数（覆盖重复键）
        merged_params.update(params)
        
        # 编码合并后的参数
        new_query = urlencode(merged_params, doseq=True)  # doseq=True 支持列表值
        # 重新构建 URL
        new_parsed_url = parsed_url._replace(query=new_query)
        return urlunparse(new_parsed_url)

    def translate_text(self, text: str) -> str:
        """【使用tencent翻译文本内容】"""
        if self.translator is None:
            return text

        try:
            return self.translator(text)
        except Exception as e:
            print(f"Error occurred during translation: {e}")
            return text

    def convert_to_beijing_time(self, utc_time_str: str) -> str:
        """将UTC时间转换为北京时间"""
        utc_time = datetime.strptime(utc_time_str, '%Y-%m-%dT%H:%M:%SZ')
        beijing_tz = pytz.timezone('Asia/Shanghai')
        beijing_time = utc_time.replace(tzinfo=pytz.utc).astimezone(beijing_tz)
        return beijing_time.strftime('%Y年%m月%d日 %p%I:%M (北京时间)')

    def to_markdown(self, rank: int) -> str:
        """返回产品数据的Markdown格式"""
        """【使用jieba提取关键词】"""
        keywords=generate_keywords(self.translated_tagline + self.translated_description)
        
        return (
            f"## [TOP{rank}    {self.name}]({self.url})\n"
            f"![{self.name}]({self.og_image_url})<br /><br />\n"
            f"**【标语】**：{self.translated_tagline}<br />\n"
            f"**【介绍】**：{self.translated_description}<br />\n"
            f"**【官网】**：[立即访问]({self.website})<br />\n"
            f"**【Product Hunt】**：[View on Product Hunt]({self.url})<br /><br />\n\n"
            f"**关键词**：{keywords}<br />\n"
            f"**票数**： 🔺{self.votes_count}<br />\n"
            f"**是否精选**：{self.featured}<br />\n"
            f"**发布时间**：{self.created_at}<br /><br />\n\n"
            f"---\n\n"
        )

def get_producthunt_token():
    """    通过 client_id 和 client_secret 获取 Product Hunt 的 access_token
    url = "https://api.producthunt.com/v2/oauth/token"
    payload = {
        "client_id": producthunt_client_id,
        "client_secret": producthunt_client_secret,
        "grant_type": "client_credentials",
    }

    headers = {
        "Content-Type": "application/json",
    }

    response = requests.post(url, json=payload, headers=headers)

    if response.status_code != 200:
        raise Exception(f"Failed to obtain access token: {response.status_code}, {response.text}")

    token = response.json().get("access_token")
    """

    """使用 developer token 进行认证"""
    token = os.getenv('PRODUCTHUNT_DEVELOPER_TOKEN')
    if not token:
        raise Exception("Product Hunt developer token not found in environment variables")
    return token

def create_tencent_translator():
    tencent_secret_id = os.getenv('TENCENT_SECRET_ID')
    tencent_secret_key = os.getenv('TENCENT_SECRET_KEY')
    if not tencent_secret_id or not tencent_secret_key:
        raise RuntimeError("Tencent translation credentials are missing")

    cred = credential.Credential(tencent_secret_id, tencent_secret_key)
    client = tencent_tmt_client.TmtClient(cred, "ap-chengdu")

    def translate(text: str) -> str:
        request = models.TextTranslateRequest()
        request.Source = "auto"
        request.Target = "zh"
        request.SourceText = text
        request.ProjectId = 0

        response = client.TextTranslate(request)
        return response.TargetText

    return translate

def fetch_product_hunt_data(date_str, translator=None):
    """从Product Hunt获取前一天的Top 30数据"""
    token = get_producthunt_token()
    url = "https://api.producthunt.com/v2/api/graphql"
    
    # 添加更多请求头信息
    headers = {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": f"Bearer {token}",
        "User-Agent": "DecohackBot/1.0 (https://decohack.com)",
        "Origin": "https://decohack.com",
        "Accept-Language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7",
        "Connection": "keep-alive"
    }

    # 设置重试策略
    retry_strategy = Retry(
        total=3,  # 最多重试3次
        backoff_factor=1,  # 重试间隔时间
        status_forcelist=[429, 500, 502, 503, 504]  # 需要重试的HTTP状态码
    )
    adapter = HTTPAdapter(max_retries=retry_strategy)
    session = requests.Session()
    session.mount("https://", adapter)
    
    # GraphQL
    base_query = """
    {
      posts(order: VOTES, postedAfter: "%sT00:00:00Z", postedBefore: "%sT23:59:59Z", after: "%s") {
        nodes {
          id
          name
          tagline
          description
          votesCount
          createdAt
          featuredAt
          website
          url
          media {
            type
            url
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
    """

    all_posts = []
    has_next_page = True
    cursor = ""

    while has_next_page and len(all_posts) < 30:
        query = base_query % (date_str, date_str, cursor)
        try:
            response = session.post(url, headers=headers, json={"query": query})
            response.raise_for_status()  # 抛出非200状态码的异常
        except requests.exceptions.RequestException as e:
            status_code = getattr(e.response, "status_code", "no response")
            response_text = getattr(e.response, "text", str(e))
            raise Exception(f"Failed to fetch data from Product Hunt: {status_code}, {response_text}") from e

        data = response.json()['data']['posts']
        posts = data['nodes']
        all_posts.extend(posts)

        has_next_page = data['pageInfo']['hasNextPage']
        cursor = data['pageInfo']['endCursor']

    # 只保留前30个产品
    return [Product(**post, translator=translator) for post in sorted(all_posts, key=lambda x: x['votesCount'], reverse=True)[:30]]

def generate_markdown(products, date_str):
    """生成Markdown内容并保存到docs目录"""
    #markdown_content = f"# PH今日热榜 | {date_str}\n\n"
    markdown_content = (
        f"---\n"
        f"title: PH今日热榜 | {date_str}\n"
        f"date: {date_str}\n"
        f"category:\n"
        f" - PH\n"
        f"order: -1\n"
        f"---\n\n"
    )
    for rank, product in enumerate(products, 1):
        markdown_content += product.to_markdown(rank)

    # 确保 docs 目录存在
    os.makedirs('docs/_posts', exist_ok=True)

    # 修改文件保存路径到 docs 目录
    file_name = f"docs/_posts/PH-daily-{date_str}.md"
    
    # 如果文件存在，直接覆盖
    with open(file_name, 'w', encoding='utf-8') as file:
        file.write(markdown_content)
    print(f"文件 {file_name} 生成成功并已覆盖。")

def update_latest_nav_link(date_str):
    navbar_path = 'docs/.vuepress/navbar.ts'
    latest_link = f'link: "/_posts/PH-daily-{date_str}"'

    with open(navbar_path, 'r', encoding='utf-8') as file:
        content = file.read()

    marker = 'text: "最新榜单"'
    marker_index = content.find(marker)
    if marker_index == -1:
        raise RuntimeError("Latest ranking navbar item not found")

    link_index = content.find('link: "/_posts/PH-daily-', marker_index)
    if link_index == -1:
        raise RuntimeError("Latest ranking navbar link not found")

    line_end = content.find('\n', link_index)
    if line_end == -1:
        line_end = len(content)

    updated_content = content[:link_index] + latest_link + content[line_end:]
    with open(navbar_path, 'w', encoding='utf-8') as file:
        file.write(updated_content)

    print(f"已更新最新榜单导航链接：{latest_link}")

def stripe_url_params(url):
    stripe_url = urljoin(url, urlparse(url).path)
    return stripe_url

def generate_keywords(content):
    tags = jieba.analyse.extract_tags(content, topK=6)
    return(",".join(tags))

def parse_args(argv):
    parser = argparse.ArgumentParser(description="Generate a Product Hunt daily markdown post.")
    parser.add_argument(
        "date",
        nargs="?",
        help="Product Hunt post date to generate, formatted as YYYY-MM-DD. Defaults to yesterday in UTC.",
    )
    return parser.parse_args(argv)

def validate_date(date_str):
    if date_str is None:
        return None

    try:
        datetime.strptime(date_str, "%Y-%m-%d")
    except ValueError as e:
        raise ValueError("date must be formatted as YYYY-MM-DD") from e
    return date_str

def main(date_str):
    date_str = validate_date(date_str)
    if date_str :
        print(f"date: {date_str} 脚本参数传递")
    else :
        # 获取昨天的日期并格式化
        yesterday = datetime.now(timezone.utc) - timedelta(days=1)
        date_str = yesterday.strftime('%Y-%m-%d')
        print(f"date: {date_str} 自动获取昨天的日期")

    translator = create_tencent_translator()

    # 获取Product Hunt数据
    products = fetch_product_hunt_data(date_str, translator=translator)

    # 生成Markdown文件
    generate_markdown(products, date_str)
    update_latest_nav_link(date_str)
 
if __name__ == "__main__":
    args = parse_args(sys.argv[1:])
    main(args.date)
