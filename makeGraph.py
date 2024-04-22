import asyncio
from playwright.async_api import async_playwright
import time
import click
import logging
import sys



async def makeGraph(url, browser_string, logger, verbose=True, headless=True, comment=None):
    async with async_playwright() as playwright:
        
        logger.info(f"[+] Starting Browser: {browser_string}")
        start = time.time()
        #浏览器判断
        if browser_string == 'chrome' or browser_string == 'chromium':
            browser = await playwright.chromium.launch(headless=headless)
        elif browser_string == 'firefox':
            browser = await playwright.firefox.launch(headless=headless)
        elif browser_string == 'webkit':
            browser = await playwright.webkit.launch(headless=headless)
        elif browser_string == 'brave':
            browser = await playwright.chromium.launch(headless=headless, executable_path='/usr/bin/brave-browser')
        else:
            raise Exception('Browser not supported')
        #打开一个页面
        page = await browser.new_page(ignore_https_errors=True)
        #详细输出
        if verbose:
            page.on("console", lambda msg: logger.info(f"[$] {msg.text}"))
        #打开链接
        # open the url
        logger.info(f"[+] Creating graph for {url}")
        await page.goto(url, wait_until='load')

        # dont trust this lets be save
        await asyncio.sleep(1)

        #运行事件监听js
        # run the EventListener_module
        await page.evaluate(open('./crawler/EventListener_module.js', 'r').read())
        
        #调用包含方法
        # call inclusion method
        try:
            await page.evaluate('''() => {
                window.XSL_runInclusionMethod()
            }''')
        except Exception as e:
            logger.error(f"[-] Error: {e}")
            # still try to make graph
            # raise e
        #等待包含方法加载
        # wait for the inclusion method to be loaded
        await asyncio.sleep(3)

        #准备性能API？？？
        # prepare performance API 
        try:
            await page.evaluate(open('./crawler/Performance_module.js', 'r').read())
        except Exception as e:
            logger.error(f"[-] Error: {e}")
            # still try to make graph
            # raise e

        #启动爬虫
        # start the crawler
        G = await page.evaluate(open('./crawler/crawler.js', 'r').read())
        with open('results.txt', 'w') as f:
            f.write(G)
        print(G)
        logger.info(f"[+] Graph: Done, Closing Browser")
        logger.info(f"[+] Time: {time.time() - start}")
        await page.close()
        return G



@click.command()
@click.option('--url', '-u', help='URL to crawl', required=True)
@click.option('--browser', '-b', help='Browser to use', default='chrome')
@click.option('--verbose', '-v', help='Verbose output', is_flag=True, default=False)
@click.option('--headfull', '-hf', help='Disable Headless mode', is_flag=True, default=True)
def commandLine(url, browser, verbose, headfull):
    # setup logging
    logger = logging.getLogger()
    streamHandler = logging.StreamHandler(sys.stdout)
    formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
    streamHandler.setFormatter(formatter)
    logger.addHandler(streamHandler)
    logger.setLevel(logging.INFO)

    print(asyncio.run(makeGraph(url, browser, logger,verbose=verbose, headless=headfull)))


if __name__ == '__main__':
    commandLine()



