import asyncio
import io
import time
from log import log
import logging
import requests
import os

from playwright.async_api import async_playwright

# 要加载的 html 文件所在的文件夹
dir_path = "C:/Users/35093/Desktop/graduation_project/test/templates/inclusionmethods"

# logging is a bit of magic
logger = logging.getLogger()
logger.setLevel(logging.INFO)
log_stream = io.StringIO()
logger.addHandler(logging.StreamHandler(log_stream))

async def makeGraph(url, browser_string, logger, verbose=True, headless=True, comment=None):
    async with async_playwright() as playwright:

        logger.info(f"[+] Starting Browser: {browser_string}")
        start = time.time()
        # 浏览器判断
        if browser_string == 'chrome' or browser_string == 'chromium':
            browser = await playwright.chromium.launch(headless=headless,args=["--max-old-space-size=10240000"])
        elif browser_string == 'firefox':
            browser = await playwright.firefox.launch(headless=headless)
        elif browser_string == 'webkit':
            browser = await playwright.webkit.launch(headless=headless)
        elif browser_string == 'brave':
            browser = await playwright.chromium.launch(headless=headless, executable_path='/usr/bin/brave-browser')
        else:
            raise Exception('Browser not supported')
        # 打开一个页面
        page = await browser.new_page(ignore_https_errors=True)
        # 详细输出
        if verbose:
            page.on("console", lambda msg: logger.info(f"[$] {msg.text}"))
        # 打开链接
        # open the url
        logger.info(f"[+] Creating graph for {url}")
        await page.goto(url, wait_until='load')

        # dont trust this lets be save
        await asyncio.sleep(1)

        # 运行事件监听js
        # run the EventListener_module
        await page.evaluate(open('./crawler/EventListener_module.js', 'r').read())

        # 调用包含方法
        # call inclusion method
        try:
            await page.evaluate('''() => {
                window.XSL_runInclusionMethod()
            }''')
        except Exception as e:
            logger.error(f"[-] Error: {e}")
            # still try to make graph
            # raise e
        # 等待包含方法加载
        # wait for the inclusion method to be loaded
        await asyncio.sleep(3)

        # 准备性能API？？？
        # prepare performance API
        try:
            await page.evaluate(open('./crawler/Performance_module.js', 'r').read())
        except Exception as e:
            logger.error(f"[-] Error: {e}")
            # still try to make graph
            # raise e

        # 启动爬虫
        # start the crawler
        G = await page.evaluate(open('./crawler/crawler.js', 'r').read())


        logger.info(f"[+] Graph: Done, Closing Browser")
        logger.info(f"[+] Time: {time.time() - start}")
        await page.close()
        return G
# 保存结果的文件名
output_file = "output.txt"

# 打开输出文件
async def main():
    # with open(output_file, "w") as f:
    # 遍历文件夹中的所有文件
    #     for filename in os.listdir(dir_path):
    #         # 拼接文件路径
    #         url="http://127.0.0.1:8001/"+filename
    #         G=await makeGraph(url,"chrome",logger,verbose=True,headless=False,)
    #         print(G)
    url="http://baidu.com"
    G = await makeGraph(url, "chrome", logger, verbose=True, headless=False, )
    print(G)



asyncio.run(main())