Feature: Cart

    Feature Scenarios for cart page
    Background:
        Given User is logged in and inventory page is opened

    Scenario: Cart content is saved after logout
        When User adds any product to cart
        And Goes to cart
        And Checks that item added before is there
        And Opens sidebar menu
        And Clicks on logout button
        And Enters valid credentials
        And Goes to cart
        Then Checks that item added before is there

    Scenario: Successful checkout
        When User adds any product to cart
        And Goes to cart
        And Checks that item added before is there 
        And Clicks on 'Checkout' button
        And Enters all needed info 
        And Clicks on 'Finish' button
        And Confirms that checkout is complete 
        Then Goes back to inventory page

    Scenario: Removing added product from cart
        When User adds any product to cart
        And Goes to cart
        And Checks that item added before is there
        And Removes newly added product
        Then Confirms that cart is empty

    Scenario: Checkout with empty cart
        When Goes to cart
        And Confirms that cart is empty
        And Clicks on 'Checkout' button
        Then Error 'Cart is empty' appears