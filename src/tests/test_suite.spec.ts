import { test, expect } from "node_modules/@playwright/test/index";

test('test1', async ({ page, browser }) => {
  //const context = await browser.newContext({ viewport: { width: 1280, height: 720 } });
  //const headfulPage = await context.newPage();
  await page.goto('https://www.google.com');
  const title = await page.title();
  console.log(title);
  expect(title).toBe('Google');
});

test('test2', async ({ page, browser }) => {
  //const context = await browser.newContext({ viewport: { width: 1280, height: 720 } });
  //const headfulPage = await context.newPage();
  await page.goto('https://www.apple.com');
  const title = await page.title();
  console.log(title);
  expect(title).toBe(title);
});