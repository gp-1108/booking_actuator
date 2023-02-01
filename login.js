const { InvalidLoginException } = require('./exceptions.js');

module.exports = async function(page, usn, psw) {
  const loginBtn = (await page.$x("//a[text()='Login']"))[0];
  await loginBtn.click();
  await page.waitForNavigation({ waituntil: 'networkidle0' });
  const emailForm = (await page.$x("//input[@id='username'][1]"))[0];
  const passwordForm = (await page.$x("//input[@id='password'][1]"))[0];
  await emailForm.type(usn);
  await passwordForm.type(psw);
  const submitButton = (await page.$x("//input[@id='kc-login'][1]"))[0];
  submitButton.click();

  // The waitForSelector throws an error if the alert error div is not found, therefore everything is fine if an error is generated
  loggedIn = true;
  try {
    await page.waitForSelector('div.alert-error', { timeout: 1000 });
    loggedIn = false;
  } catch (err) {
    loggedIn = true;
  }
  if (!loggedIn) {
    throw new InvalidLoginException("Something went wrong with the login.");
  }
  await new Promise(resolve => setTimeout(resolve, 5000));
}