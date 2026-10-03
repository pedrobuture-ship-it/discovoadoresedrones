const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720 });
  
  console.log('Navigating...');
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0', timeout: 60000 });
  
  console.log('Taking drones screenshot...');
  await page.screenshot({ path: '/home/pedrobuture/.gemini/antigravity/brain/1020c76a-2d0f-4554-8407-8d25383053c8/hero-drones.png' });
  
  console.log('Clicking controles tab...');
  await page.evaluate(() => {
    const tabs = document.querySelectorAll('[role="tab"]');
    if (tabs.length > 1) {
      tabs[1].click();
    }
  });
  
  await new Promise(r => setTimeout(r, 600));
  
  console.log('Taking controles screenshot...');
  await page.screenshot({ path: '/home/pedrobuture/.gemini/antigravity/brain/1020c76a-2d0f-4554-8407-8d25383053c8/hero-controles.png' });
  
  await browser.close();
  console.log('Done.');
})();
