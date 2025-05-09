// @ts-check
import { test, expect } from '@playwright/test';

const TEST_TEXT_EN = 'Jesus is Lord';
// const TEST_TEXT_UA = 'Ісус Господь'; // WIP

test.beforeEach(async ({ page }) => {
  await page.goto('https://translate.google.com/?sl=auto&tl=uk&op=translate');
});

// test('has title', async ({ page }) => {
//   await expect(page).toHaveTitle(/Google Translate/);
// });

test('textarea should be present', async ({ page }) => {
  const textarea = page.locator('textarea[aria-label="Source text"]');

  await textarea.fill(TEST_TEXT_EN);
  await textarea.press('Enter');

  // Expects page to have a heading with the name of Installation.
  await expect(textarea).toBeVisible();
});
