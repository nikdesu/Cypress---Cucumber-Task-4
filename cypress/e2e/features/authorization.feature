Feature: Authorization

    Feature Scenarios for login page
    Background: 
        Given Login page is opened

    Scenario: Success log in 
        When User logs in
        Then Confirm that user is logged in
    
    Scenario: Log in with an invalid password
        When User types in an invalid password
        Then Confirm that error appeared

    Scenario: Log in with an invalid username
        When User types in an invalid username
        Then Confirm that error appeared

    Scenario: Logout
        When User logs in
        And User opens sidebar menu 
        And User clicks on logout button
        Then Confirm that user has logged out