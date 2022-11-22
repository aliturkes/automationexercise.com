@US02
Feature: US01 Register User

  @US02_TC01
  Scenario Outline: US02_TC01_Login_With_Correct_Credentials
    Given user navigates to the url
    When  user verifies = home page is visible successfully
    Then  user clicks  signup login button
    When  user verifies that login to you account is visible successfully
    Then  user enters email as "<email>"
    And   user enters password as "<password>"
    And   user clicks login button
    Then  user verifies logged in as username is visible
    Then  user clicks on delete account button
    Then  user verifies account deleted is visible

    Examples:
      | email             | password |
      | johnd123@mail.com | test123  |


  @US02_TC02
  Scenario Outline: US02_TC02_Login_With_Incorrect_Credentials
    Given user navigates to the url
    When  user verifies = home page is visible successfully
    Then  user clicks  signup login button
    When  user verifies that login to you account is visible successfully
    Then  user enters email as "<email>"
    And   user enters password as "<password>"
    And   user clicks login button
    When user verifies your email or password is incorrect message

    Examples:
      | email               | password         |
      | wrongmaild@mail.com | wrongpassword123 |
