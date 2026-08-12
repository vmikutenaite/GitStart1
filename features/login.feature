# Feature: User Login

# Scenario: Successful login with valid credentials
#     Given I am on the login page
#     When I enter username "standard_user" and password "secret_sauce!"
#     Then I click the submit button


Feature: Data Entry Form

Scenario: Data Entry Form
    Given I am on the data form page
    When I enter all my data
    Then I click the submit button with data picker