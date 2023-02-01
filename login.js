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
  await page.waitForNavigation({ waituntil: 'networkidle0' });
}