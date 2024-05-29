import { expect, test } from "@playwright/test"

test.describe("treaty", () => {
  test(`Can navigate to treaty page.`, async ({ page }) => {
    await page.setViewportSize({ width: 1600, height: 1200 })
    await page.goto("/")

    await page
      .locator("a[href='/how-we-do-it']", { hasText: "how we do it" })
      .click()

    await expect(page).toHaveURL("/how-we-do-it")

    await page.locator("a", { hasText: "treaty" }).click()

    await expect(page).toHaveURL("/how-we-do-it/treaty")

    await expect(page.locator("h2").first()).toHaveText(
      "The Demilitarise Education Treaty"
    )
  })
})
