package stepdefinitions.uistepdefs;

import io.cucumber.java.en.*;
import org.junit.Assert;
import org.openqa.selenium.Keys;
import pages.*;
import utilities.ConfigurationReader;
import utilities.Driver;
import utilities.JsUtils;

public class US01_StepDefs {

  HomePage homePage = new HomePage();
  LoginPage loginPage = new LoginPage();
  SignUpPage signUpPage = new SignUpPage();
  AccountCreatedPage accountCreatedPage = new AccountCreatedPage();
  AccountDeletedPage accountDeletedPage = new AccountDeletedPage();

  @Given("user navigates to url")
  public void user_navigates_to_url() {
    Driver.getDriver().get(ConfigurationReader.getProperty("app_url"));
  }

  @When("user verifies that home page is visible successfully")
  public void user_verifies_that_home_page_is_visible_successfully() {
    Assert.assertTrue(homePage.automationExerciseImage.isDisplayed());
  }

  @Then("user clicks on signup login button")
  public void user_clicks_on_signup_login_button() {
    homePage.signupLoginButton.click();
  }

  @When("user verifies that new user sign up is visible successfully")
  public void user_verifies_new_user_signup_is_visible_successfully() {
    Assert.assertTrue(loginPage.newUserSignupText.isDisplayed());
  }

  @Then("user enters name as {string}")
  public void user_enters_name_as(String name) {
    loginPage.nameBox.sendKeys(name + Keys.ENTER);
  }

  @Then("email address as {string}")
  public void email_address_as(String email) {
    Driver.waitForVisibility(loginPage.signupEmail, 5);
    loginPage.signupEmail.sendKeys(email);
  }

  @Then("user clicks signup button")
  public void user_clicks_signup_button() {
    loginPage.signupButton.click();
  }

  @When("user verifies that enter account information is visible")
  public void user_verifies_that_enter_account_information_is_visible() {
    Assert.assertTrue( signUpPage.enterAccountInformationText.isDisplayed());
  }

  @Then("user clicks on mr title")
  public void user_clicks_on_mr_title() {
    signUpPage.titleMrRadioButton.click();
  }

  @Then("user fills password as {string}")
  public void user_fills_password_as(String password) {
    signUpPage.passwordForm.sendKeys(password);
  }

  @Then("user fills the birthday")
  public void user_fills_the_birthday() {
    signUpPage.selectDays.sendKeys("12");
    signUpPage.selectMonths.sendKeys("April");
    signUpPage.selectYears.sendKeys("1990");
  }

  @Then("user selects checkbox sign up for our newsletter")
  public void user_selects_checkbox_sign_up_for_our_newsletter() {
    JsUtils.clickElementByJS(signUpPage.newsletterCheckBox);

  }

  @Then("user selects checkbox receive special offers from our partners")
  public void user_selects_checkbox_receive_special_offers_from_our_partners() {
    JsUtils.clickElementByJS(signUpPage.specialOffersCheckBox);

  }

  @Then("user fills first name as {string}")
  public void user_fills_first_name_as(String firstName) {
    signUpPage.firstName.sendKeys(firstName);
  }

  @Then("user fills last name as {string}")
  public void user_fills_last_name_as(String lastName) {
    signUpPage.lastName.sendKeys(lastName);
  }

  @Then("user fills company name as {string}")
  public void user_fills_company_name_as(String company) {
    signUpPage.company.sendKeys(company);
  }

  @Then("user fills address as {string}")
  public void user_fills_address_as(String address) {
    signUpPage.address1.sendKeys(address);
  }

  @Then("user fills address2 as {string}")
  public void user_fills_address2_as(String address2) {
    signUpPage.address2.sendKeys(address2);
  }

  @Then("user fills country as {string}")
  public void user_fills_country_as(String country) {
    signUpPage.address2.sendKeys(country);
  }

  @Then("user fills state as {string}")
  public void user_fills_state_as(String state) {
    signUpPage.state.sendKeys(state);
  }

  @Then("user fills city as {string}")
  public void user_fills_city_as(String city) {
    signUpPage.city.sendKeys(city);
  }

  @Then("user fills zipcode as {string}")
  public void user_fills_zipcode_as(String zipcode) {
    signUpPage.zipCode.sendKeys(zipcode);
  }

  @Then("user fills mobile as {string}")
  public void user_fills_mobile_as(String mobile) {
    signUpPage.mobileNumber.sendKeys(mobile);
  }

  @Then("user clicks on create account button")
  public void user_clicks_on_create_account_button() {
    JsUtils.clickElementByJS(signUpPage.createAccountButton);
  }

  @Then("user verifies that account created is visible")
  public void user_verifies_that_account_created_is_visible() {
    Assert.assertTrue(accountCreatedPage.accountCreated.isDisplayed());
  }

  @Then("user clicks continue button")
  public void user_clicks_continue_button() {
    accountCreatedPage.continueButton.click();
  }

  @Then("user verifies that logged in as username is visible")
  public void user_verifies_that_logged_in_as_username_is_visible() {
    Assert.assertTrue(homePage.logout.isDisplayed());
  }

  @Then("user clicks delete account button")
  public void user_clicks_delete_account_button() {
    homePage.deleteAccount.click();
  }

  @Then("user verifies deleted is visible")
  public void user_verifies_deleted_is_visible() {
    Assert.assertTrue(accountDeletedPage.accountDeleted.isDisplayed());
  }

  @Then("click continue button")
  public void click_continue_button() {
    accountDeletedPage.continueButton.click();
  }


}
