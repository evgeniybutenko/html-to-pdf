const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
	const browser = await puppeteer.launch({
		// Uncomment this lines if you run it on server
		// args: ["--no-sandbox", "--disable-setuid-sandbox"],
		// executablePath: '/usr/bin/chromium-browser'
	})

	const page = await browser.newPage();

	// Also can be URL to remote page
	await page.goto(`file://${__dirname}/template/print.html`)
	await page.pdf({ path: './pdf/print.pdf', format: 'a4', printBackground: true });
	await page.close();

	await browser.close();

	fs.createReadStream('./pdf/print.pdf');
})();