"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[794],{2789:(i,s)=>{s.A=(i,s)=>{const a=i.__vccOpts||i;for(const[i,n]of s)a[i]=n;return a}},3698:(i,s,a)=>{a.r(s),a.d(s,{comp:()=>h,data:()=>k});var n=a(7829);const t=(0,n.Lk)("p",null,[(0,n.Lk)("a",{href:"https://www.electronjs.org/",target:"_blank",rel:"noopener noreferrer"},"Electron"),(0,n.eW)(" 是使用 JavaScript，HTML 和 CSS 构建跨平台的桌面应用程序框架。Electron 兼容 Mac、Windows 和 Linux，可以构建出三个平台的应用程序。")],-1),l=(0,n.Fv)('<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 部署 electron，electron-builder</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># Electron 不能全局安装，否则 electron-builder 找不到</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> electron@latest</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -D</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> electron-builder</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -D</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">set-ExecutionPolicy</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> RemoteSigned</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> #若 yarn 命令报错，则管理员运行此命令</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 全局安装时，去除^，手动指定 package.json 中的 electron 版本，然后运行下方打包命令</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 将打包命令加入 package.json，直接使用打包命令</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> postinstall</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> dist</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用问题" tabindex="-1"><a class="header-anchor" href="#使用问题"><span>使用问题</span></a></h2><ul><li>electron cdn 需要连接网络，必须用本地环境安装。</li><li>Electron 定位的 location 为 窗口链接，而非网页链接。</li><li><a href="https://imf.ms/web/2022/07/05/my-first-web-hybird-project-experience/#%E8%B7%A8%E5%9F%9F-cors-%E9%85%8D%E7%BD%AE" target="_blank" rel="noopener noreferrer">跨域 CORS 配置</a>：有的应用需要访问的是本地 Web Server，与服务端接口在不同域</li></ul><h3 id="nsis-配置" tabindex="-1"><a class="header-anchor" href="#nsis-配置"><span>nsis 配置</span></a></h3><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;nsis&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: {</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">  &quot;oneClick&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 是否一键安装</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">  &quot;allowElevation&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 允许请求提升。如果为 false，则用户必须使用提升的权限重新启动安装程序。</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">  &quot;allowToChangeInstallationDirectory&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 允许修改安装目录</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">  &quot;installerIcon&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;./build/icons/aaa.ico&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 安装图标</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">  &quot;uninstallerIcon&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;./build/icons/bbb.ico&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">//卸载图标</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">  &quot;installerHeaderIcon&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;./build/icons/aaa.ico&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 安装时头部图标</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">  &quot;createDesktopShortcut&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 创建桌面图标</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">  &quot;createStartMenuShortcut&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 创建开始菜单图标</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">  &quot;shortcutName&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;xxxx&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 图标名称</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">  &quot;include&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;build/script/installer.nsh&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 包含的自定义 nsis 脚本 这个对于构建需求严格得安装过程相当有用。</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">  &quot;script&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> : </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;build/script/installer.nsh&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> // NSIS 脚本的路径，用于自定义安装程序。默认为 build / installer.nsi</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">},</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="打包报错" tabindex="-1"><a class="header-anchor" href="#打包报错"><span>打包报错</span></a></h3><p>执行打包命令后，提示 <code>cannot unpack electron zip file, will be re-downloaded</code>。</p><p>手动下载对应版本 electron，然后将压缩包放置于 <code>C:\\Users\\用户名\\AppData\\Local\\electron\\Cache</code>。</p><h3 id="跨系统打包" tabindex="-1"><a class="header-anchor" href="#跨系统打包"><span>跨系统打包</span></a></h3><p>electron 不允许跨系统打包，所以 Mac 打包需要在 iOS 环境，Linux 打包需在 Linux 环境。</p><p>Win11 可允许内建子系统，管理员身份运行 Powershell，输入 bash 即可进入 Linux 子系统。也可以直接打开在 Microsoft store 中下载的 Ubuntu 进入子系统，初次进入 Linux 子系统需要设置 Linux 的用户名及密码。</p><p>更多命令参考：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">#安排装更新软件源，安装 node 和 npm 环境</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> apt-get</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> update</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> apt-get</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> nodejs</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> apt-get</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> npm</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> npm@latest</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -g</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> #升级 npm</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> n</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> #安装用于安装 nodejs 的模块 n</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> n</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> stable</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> #通过 n 模块安装指定的 nodejs</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',13),e={},h=(0,a(2789).A)(e,[["render",function(i,s){const a=(0,n.g2)("RouteLink");return(0,n.uX)(),(0,n.CE)("div",null,[t,(0,n.Lk)("p",null,[(0,n.eW)("按 "),(0,n.bF)(a,{to:"/deploy/VPS.html#%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2"},{default:(0,n.k6)((()=>[(0,n.eW)("环境部署教程")])),_:1}),(0,n.eW)("，部署 yarn，然后部署 electron 环境。")]),l])}]]),k=JSON.parse('{"path":"/code/Electron.html","title":"Electron","lang":"zh-CN","frontmatter":{"article":false,"title":"Electron","icon":"fa6-solid:atom","order":7,"description":"Electron 是使用 JavaScript，HTML 和 CSS 构建跨平台的桌面应用程序框架。Electron 兼容 Mac、Windows 和 Linux，可以构建出三个平台的应用程序。 按 ，部署 yarn，然后部署 electron 环境。 使用问题 electron cdn 需要连接网络，必须用本地环境安装。 Electron 定位的 l...","head":[["meta",{"property":"og:url","content":"https://newzone.top/code/Electron.html"}],["meta",{"property":"og:site_name","content":"LearnData 开源笔记"}],["meta",{"property":"og:title","content":"Electron"}],["meta",{"property":"og:description","content":"Electron 是使用 JavaScript，HTML 和 CSS 构建跨平台的桌面应用程序框架。Electron 兼容 Mac、Windows 和 Linux，可以构建出三个平台的应用程序。 按 ，部署 yarn，然后部署 electron 环境。 使用问题 electron cdn 需要连接网络，必须用本地环境安装。 Electron 定位的 l..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-19T14:40:36.000Z"}],["meta",{"property":"article:author","content":"LearnData"}],["meta",{"property":"article:modified_time","content":"2024-08-19T14:40:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Electron\\",\\"description\\":\\"Electron 是使用 JavaScript，HTML 和 CSS 构建跨平台的桌面应用程序框架。Electron 兼容 Mac、Windows 和 Linux，可以构建出三个平台的应用程序。 按 ，部署 yarn，然后部署 electron 环境。 使用问题 electron cdn 需要连接网络，必须用本地环境安装。 Electron 定位的 l...\\"}"]]},"headers":[{"level":2,"title":"使用问题","slug":"使用问题","link":"#使用问题","children":[{"level":3,"title":"nsis 配置","slug":"nsis-配置","link":"#nsis-配置","children":[]},{"level":3,"title":"打包报错","slug":"打包报错","link":"#打包报错","children":[]},{"level":3,"title":"跨系统打包","slug":"跨系统打包","link":"#跨系统打包","children":[]}]}],"git":{"createdTime":1724078436000,"updatedTime":1724078436000,"contributors":[{"name":"Navyum","email":"36869790+Navyum@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":2.15,"words":645},"filePathRelative":"code/Electron.md","localizedDate":"2024年8月19日","excerpt":"<p><a href=\\"https://www.electronjs.org/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Electron</a> 是使用 JavaScript，HTML 和 CSS 构建跨平台的桌面应用程序框架。Electron 兼容 Mac、Windows 和 Linux，可以构建出三个平台的应用程序。</p>\\n<p>按 <a href=\\"/deploy/VPS.html#%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2\\" target=\\"_blank\\">环境部署教程</a>，部署 yarn，然后部署 electron 环境。</p>","autoDesc":true}')}}]);