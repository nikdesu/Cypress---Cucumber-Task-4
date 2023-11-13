Feature: Inventory page

    Feature Scenarios for inventory page
    Background:
        Given User is logged in and inventory page is opened

    Scenario: 'All items' button functionality
        When Goes to cart
        And Opens sidebar menu
        And Clicks on 'All items' button and gets redirected to the inventory page
        Then Confirm that user was redirected to inventory page

    Scenario: Testing sorting feature
        When User clicks on the dropdown sorting menu and picks any of the sorting "<methods>"
        Then Items should be sorted due to picked "<methods>"

        Examples:
            | methods  |
            | Low-High |
            | High-Low |
            | A-Z      |
            | Z-A      |

    Scenario: Footer links
        When User clicks on "<socials>" button
        Then Gets redirected to "<socials>" page and confirms that user was redirected to correspondent page

        Examples:
            | socials  |
            | Twitter  |
            | Facebook |
            | LinkedIn |
