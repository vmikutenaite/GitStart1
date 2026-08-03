Feature: Add To Cart

Background:
    Given I am logged in

Scenario: Adding items to cart and reviewing cart
    Given I add backpack item in inventory page
    When I click on Cart icon
    Then I see added items in the cart
