# daily

Product Hunt daily ranking generator and VuePress site.

## Local setup

- Node.js 20 or newer
- pnpm 9 or newer
- Python 3.10 or newer

```bash
pnpm install
pip install -r requirements.txt
```

## Common commands

```bash
pnpm run docs:dev
pnpm run docs:build
pnpm run lint
pnpm run lint:fix
```

## Generate a Product Hunt daily post

By default the generator uses yesterday's UTC date.

```bash
python scripts/product_hunt_list_to_md.py
```

To regenerate a specific date:

```bash
python scripts/product_hunt_list_to_md.py 2026-06-02
```

Required environment variables:

- `PRODUCTHUNT_DEVELOPER_TOKEN`
- `TENCENT_SECRET_ID`
- `TENCENT_SECRET_KEY`
