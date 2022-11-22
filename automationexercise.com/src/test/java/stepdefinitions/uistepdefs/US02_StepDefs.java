package stepdefinitions.uistepdefs;

import io.cucumber.java.en.*;
import org.junit.Assert;
import org.openqa.selenium.Keys;
import pages.*;
import utilities.ConfigurationReader;
import utilities.Driver;
import utilities.JsUtils;

public class US02_StepDefs {

  HomePage homePage = new HomePage();
  LoginPage loginPage = new LoginPage();
  AccountDeletedPage accountDeletedPage = new AccountDeletedPage();

  @Given("user navigates to the url")
  public void user_navigates_to_the_url() {
    Driver.getDriver().get(ConfigurationReader.getProperty("app_url"));
  }
  @When("user verifies = home page is visible successfully")
  public void user_verifies_home_page_is_visible_successfully() {
    Assert.assertTrue(homePage.automationExerciseImage.isDisplayed());
  }
  @Then("user clicks  signup login button")
  public void user_clicks_signup_login_button() {
    homePage.signupLoginButton.click();
  }
  @When("user verifies that login to you account is visible successfully")
  public void user_verifies_that_login_to_you_account_is_visible_successfully() {
    Assert.assertTrue(loginPage.loginToYourAccountText.isDisplayed());

  }
  @Then("user enters email as {string}")
  public void user_enters_email_as(String email) {
    loginPage.loginEmail.sendKeys(email);
  }

  @Then("user enters password as {string}")
  public void user_enters_password_as(String password) {
    loginPage.loginPassword.sendKeys(password);
  }

  @Then("user clicks login button")
  public void user_clicks_login_button() {
   loginPage.loginButton.click();
  }
  @Then("user verifies logged in as username is visible")
  public void user_verifies_logged_in_as_username_is_visible() {
    Assert.assertTrue(homePage.logout.isDisplayed());
  }
  @Then("user clicks on delete account button")
  public void user_clicks_on_delete_account_button() {
    homePage.deleteAccount.click();
  }
  @Then("user verifies account deleted is visible")
  public void user_verifies_account_deleted_is_visible() {
    Assert.assertTrue(accountDeletedPage.accountDeleted.isDisplayed());
  }
  @When("user verifies your email or password is incorrect message")
  public void user_verifies_your_email_or_password_is_incorrect_message() {
    Assert.assertTrue(loginPage.incorrectEmailOrPassword.isDisplayed());
  }


}
