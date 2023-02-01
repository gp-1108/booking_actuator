module.exports = async function(page, time) {
  const slots = (await page.$x("//div[@class='row align-items-center']/div[@class='col-6']/div[@class='h3 mb-1']/parent::div/parent::div"));
  let i = 0;
  // searching for correct div slot
  for (; i < slots.length; i++) {
    const slotText = await (await slots[i].getProperty('textContent')).jsonValue();
    if (slotText.includes(time) && !slotText.includes("Esaurito")) {
      break;
    }

  }

  if(i == slots.length) {
    throw new Error("Slot not found");
  }
  const btn = (await slots[i].$x(".//button"))[0];
  await btn.click();
  await new Promise(resolve => setTimeout(resolve, 2000));
  const firstCheckbox = (await page.$x("//div[@class='custom-control custom-checkbox']"))[0];
  const proceedBtn = (await page.$x("//button[text()='Continua']"))[0];
  await firstCheckbox.click();
  await proceedBtn.click();
  const confirmBtn = (await page.$x("//button[contains(text(),'Prenota')]"))[0];
  // await confirmBtn.click();
  console.log(confirmBtn);
  await new Promise(resolve => setTimeout(resolve, 5000));
}