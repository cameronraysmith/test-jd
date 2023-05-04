import { test } from "vitest";
import { chromium } from "playwright";
import { expect } from '@playwright/test'

test("loads the app and checks the title", async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto("http://localhost:3000");

  const title = await page.title();
  expect(title).toBe("Create JD App");

  await browser.close();
});
