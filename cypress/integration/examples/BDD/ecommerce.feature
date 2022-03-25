Feature: End to End Test for ecommerce website

    application Regression

    Scenario: Ecommerce Product Delivery
    Given I open Ecommerce page
    When I add items to cart
    And Validate the total prices 
    Then select the country submit and verify thankyou