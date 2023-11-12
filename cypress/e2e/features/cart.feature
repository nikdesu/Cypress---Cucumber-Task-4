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
        Then Goes to cart again and checks if item is still there

    Scenario: Successful checkout 
        When User adds any product to cart
        And Goes to cart 
        And Checks that item added before is there and clicks on 'Checkout' button
        And Enters all needed info and clicks on 'Finish' button
        Then Confirms that checkout is complete and goes back to inventory page


        