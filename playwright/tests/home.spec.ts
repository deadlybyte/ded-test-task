import { test, expect } from "@playwright/test"

test.describe("Home", () => {
  test("Home page loads without errors; total investment is greater than 1bn.", async ({
    page,
  }) => {
    await page.goto("/")

    await expect(
      page.locator("h2", { hasText: "The Demilitarise Education Model" })
    ).toBeVisible()

    const totalInvestmentParagraph = page.locator("p.ded-total-investment", {
      hasText: new RegExp("^£.*$")
    })
    await expect(totalInvestmentParagraph).toBeVisible()

    const digits = await totalInvestmentParagraph?.innerText()
    const valueString = digits?.replace(/[^\d.]/g, "")
    const valueFloat = Number.parseFloat(valueString || "0")
    expect(valueFloat).toBeGreaterThan(1000000000) // 1bn
  })
})
