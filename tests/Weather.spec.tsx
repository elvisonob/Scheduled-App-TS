import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.route(
    'https://api.weatherapi.com/v1/current.json**',
    async (route) => {
      await route.fulfill({
        status: 200,
        json: {
          current: { feelslike_f: 32.7, humidity: 95, precip_in: 0 },
          location: { name: 'Glasgow' },
        },
      });
    },
  );
});

test('data responses from the API', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page.getByText('City: Glasgow')).toBeVisible();
});
