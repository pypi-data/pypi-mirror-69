# tiktok-stats: Scraper and Stats calculator for TikTok

![PyPi](https://img.shields.io/pypi/v/tiktok-stats.svg)

## Installation

```shell
pip install tiktok-stats
```

## How to use it

### Basic usage:

```python
from tiktok_stats.tiktok import TikTokUser


user = TikTokUser(username='username')
stats = user.calculate_engagement()
```