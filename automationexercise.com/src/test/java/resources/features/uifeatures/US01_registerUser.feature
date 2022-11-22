@US01
Feature: US01 Register User

  @US0_TC01
  Scenario Outline: US01_TC01_Register_User
    Given user navigates to url
    When  user verifies that home page is visible successfully
    Then  user clicks on signup login button
    When user verifies that new user sign up is visible successfully
    Then  user enters name as "<name>"
    And   email address as "<email>"
    And   user clicks signup button
    When  user verifies that enter account information is visible
    Then  user clicks on mr title
    And   user fills password as "<password>"
    And   user fills the birthday
    Then  user selects checkbox sign up for our newsletter
    Then  user selects checkbox receive special offers from our partners
    And   user fills first name as "<firstName>"
    And   user fills last name as "<lastName>"
    And   user fills company name as "<company>"
    And   user fills address as "<address>"
    And   user fills address2 as "<address2>"
    And   user fills country as "<country>"
    And   user fills state as "<state>"
    And   user fills city as "<city>"
    And   user fills zipcode as "<zipcode>"
    And   user fills mobile as "<mobileNumber>"
    Then  user clicks on create account button
    Then  user verifies that account created is visible
    Then  user clicks continue button
    Then  user verifies that logged in as username is visible
    Then  user clicks delete account button
    Then  user verifies deleted is visible
    And   click continue button

    Examples:
      | name     | firstName | lastName | email             | password  | company       | address        | address2       | country       | state         | city      | zipcode | mobileNumber |
      | John Doe | John      | Doe      | joeydoe1@mail.com | pwd_173.! | West Join LLC | Peters line 21 | Peters line 21 | United States | South Holland | Amsterdam | 3257 NL | +31689403491 |


