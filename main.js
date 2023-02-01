const puppeteer = require('puppeteer');
const loginFunction = require('./login.js');
const bookFunction = require('./booking.js');
const dotenv = require('dotenv');
dotenv.config();


async function handler(date, time) {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  // load main page
  await page.goto('https://gyms.vertical-life.info/intellighenzia-project-asd/checkins');
  await page.waitForNavigation({ waitUntil: 'networkidle0' })
  
  // login
  await loginFunction(page, process.env.USN, process.env.PSW);

  // go to booking page
  await page.goto(`https://gyms.vertical-life.info/it/intellighenzia-project-asd/checkins#/service/default/74/${date}`);
  await new Promise(resolve => setTimeout(resolve, 2000));

  // book a slot
  await bookFunction(page, time)
  await browser.close();
}



handler("2023-01-25", "17:00");

// TODO
// 1. Add a check to see if the slot is already booked
// 2. Add execptions for date not available and slot not available
// 3. Remove comment from actual booking click