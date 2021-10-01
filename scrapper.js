const fs = require('fs')
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  //await page.goto('./example_data/LiveData.html');
  var contentHtml = fs.readFileSync('E:\\test\\node\\iboi\\example_data\\LiveData.html', 'utf8');
  await page.setContent(contentHtml);
  await page.screenshot({ path: 'example.png' });

  await browser.close();
})();