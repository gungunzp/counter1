// @ts-check
import { test, expect } from '@playwright/test';

const INITIAL_COUNTER_VALUE = '0';
const ONE_STEP_GREATER_COUNTER_VALUE = '1';
const ONE_STEP_GREATER_TWO_CATEGORIES_COUNTER_TEXT = '2';

const getIncreaseButton = element => element.getByRole('button', { name: '+' });
const getDecreaseButton = element => element.getByRole('button', { name: '-' });
const getCounterValueElement = element => element.locator('span.category__value');

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('has title', async ({ page }) => {
  await expect(page).toHaveTitle('Outreach Counter');
});

test('has Declined heading', async ({ page }) => {
  const declinedHeading = page.getByRole('heading').nth(0);

  await expect(declinedHeading).toBeVisible();
  await expect(declinedHeading).toHaveText(/Відмовились/);
});

test('is increasing and decreasing counter', async ({ page }) => {
  const declinedCounter = page.locator('#declined');
  const declinedCounterValue = getCounterValueElement(declinedCounter);
  const declinedIncreaseButton = getIncreaseButton(declinedCounter);
  const declinedDecreaseButton = getDecreaseButton(declinedCounter);

  // check the initial counter value
  await expect(declinedCounterValue).toHaveText(INITIAL_COUNTER_VALUE);

  // increase counter
  declinedIncreaseButton.click();

  // check the increased counter value
  await expect(declinedCounterValue).toHaveText(ONE_STEP_GREATER_COUNTER_VALUE);

  // decrease counter
  declinedDecreaseButton.click();

  // check the decreased counter value
  await expect(declinedCounterValue).toHaveText(INITIAL_COUNTER_VALUE);
});

test('is counting total value correct', async ({ page }) => {
  const declinedCounter = page.locator('#declined');
  const declinedIncreaseButton = getIncreaseButton(declinedCounter);
  const declinedDecreaseButton = getDecreaseButton(declinedCounter);

  const answeredCounter = page.locator('#answered');
  const answeredIncreaseButton = getIncreaseButton(answeredCounter);
  const answeredDecreaseButton = getDecreaseButton(answeredCounter);

  const totalValue = getCounterValueElement(page.locator('#total'));

  // check the initial value of the total counter
  await expect(totalValue).toHaveText(INITIAL_COUNTER_VALUE);

  // increase declined counter
  declinedIncreaseButton.click();

  // check the total value after increasing the first category once
  await expect(totalValue).toHaveText(ONE_STEP_GREATER_COUNTER_VALUE);

  // increase answered counter
  answeredIncreaseButton.click();

  // check the total value after increasing the second category once
  await expect(totalValue).toHaveText(ONE_STEP_GREATER_TWO_CATEGORIES_COUNTER_TEXT);

  // decrease declined counter
  declinedDecreaseButton.click();

  // check the total value after decreasing first category once
  await expect(totalValue).toHaveText(ONE_STEP_GREATER_COUNTER_VALUE);

  // decrease answered counter
  answeredDecreaseButton.click();

  // check the total value after decreasing second category once
  await expect(totalValue).toHaveText(INITIAL_COUNTER_VALUE);
});
