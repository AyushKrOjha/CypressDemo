Feature: End to End Test for ecommerce website

    application Regression
    @Regression
    Scenario: Ecommerce Product Delivery
    Given I open Ecommerce page
    When I add items to cart
    And Validate the total prices 
    Then select the country submit and verify thankyou

    @Smoke
    Scenario: Filling the form to shop
    Given I open Ecommerce page
    When I fill the form detaails
    |name       |gender        |
    |bobz       |Female        |
    Then validate the form behaviour 
    And select the shop page