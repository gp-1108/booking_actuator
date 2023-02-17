module.exports = async function selectDate(page, date) {
  const nDate = date.split('-')[2];
  try {
    xpath = `//div/span[text()='${nDate}']`;
    const dateSpans = (await page.$x(`${xpath}`));

    for (const span of dateSpans) {
      const invisible = await page.evaluate(el => el.getAttribute('aria-disabled'), span);
      if(invisible == 'false') {
        page.evaluate(el => el.click(), span);
        break;
      }
    }
  } catch (err) {
    console.log(err.message);
    throw new InvalidDateException("The date is not available.");
  }
  await new Promise(resolve => setTimeout(resolve, 1500));
}