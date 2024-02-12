# ded-test-james

## Task

-   Create basic end-to-end test suites for the Demilitarise Education (dED) website using several different Javascript testing frameworks, so that we can evaluate their suitability. Examples of features to test are given below.
-   It must be possible to configure the frameworks to run the same test on different base URLs:
    -   [The dED staging site](https://staging.ded1.co/)
    -   [The dED production site](https://ded1.co/)
    -   A local instance, eg. http://localhost:8000 (Not relevant for your tasks, but necessary later)
-   Add simple notes to this README, to show how to run each test suite:
    -   In a GUI
    -   from the command line
    -   for different root URLs (eg. staging or production site)
-   Optionally add any notes of your own about the pros and cons of each suite in terms of suitability for use with the dED website.


## Frameworks

The frameworks we would like to evaluate are below, in order of priority. It is not necessary to complete all of them before our next meeting. It is more valuable to us to complete the list of tests fully for each one before moving on to the next. 

-   [Jest](https://jestjs.io/)
-   [Playwright](https://playwright.dev/)
-   [Cypress](https://www.cypress.io/)


## Tests

-   Test the home page
    -   Visit the site root (`<BASE_URL>/`)
    -   Ensure there are no Javascript errors in the console
    -   Ensure the element `p.ded-total-investment` is present
    -   Ensure it contains an value, higher than 1bn, beginning with a pound sign (`£`)
-   Test basic navigation
    -   Visit the site root (`<BASE_URL>/`)
    -   Find a link `<a>` with href `/how-we-do-it`, and click it
    -   Find a heading `<h2>` with text “treaty”, and click it
    -   Ensure there is a heading with the text “The Demilitarise Education Treaty”
    -   Ensure the URL is `<BASE_URL>/how-we-do-it/treaty`
-   Test university search
    -   Visit the site root (`<BASE_URL>/`)
    -   Find the element `input.ded-input-search-university`, and enter the string `bri`
    -   Ensure an element appears with text “University of the West of England, Bristol”, and click it
    -   Ensure the page contains a heading with text “University of the West of England, Bristol”
    -   Ensure the breadcrumbs contain “University of the West of England, Bristol”
    -   Ensure there are links containing text:
        -   “policies”
        -   “financial partnerships”
        -   “research partnerships”
        -   “academic partnerships”
        -   “FOI requests”
        -   “actions”



