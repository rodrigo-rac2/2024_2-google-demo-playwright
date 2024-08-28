// @ts-check
import { test, expect } from '@playwright/test';
import GooglePage from '../pages/Google.page';
import GoogleResultsPage from '../pages/GoogleResults.page';

test('has title @googlesearch', async ({ page }) => {
  const googlePage = new GooglePage(page);
  await googlePage.open();
  await googlePage.searchInput.click();
  await googlePage.searchInput.fill('UEPB');
  await googlePage.searchButton.click();

  const googleResultsPage = new GoogleResultsPage(page);
  await expect(googleResultsPage.uepbLink).toBeVisible();
});
