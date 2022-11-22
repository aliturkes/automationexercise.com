package stepdefinitions.uistepdefs;

import io.cucumber.java.en.*;
import org.junit.Assert;
import org.openqa.selenium.Keys;
import pages.HomePage;
import pages.SignUpPage;
import utilities.ConfigurationReader;
import utilities.Driver;
import utilities.ReusableMethods;

public class SignUpStepDefs {

  HomePage homePage = new HomePage();
  SignUpPage signUpPage = new SignUpPage();

  @Given("user launches the browser and navigates to the URL")
  public void user_launches_the_browser_and_navigates_to_the_url() {
    Driver.getDriver().get(ConfigurationReader.getProperty("app_url"));
  }


  @When("user clicks on hesabiniz yok mu")
  public void user_clicks_on_hesabiniz_yok_mu() {
    ReusableMethods.waitFor(3);
    homePage.hesabinizYokMuButton.click();

  }

  @Then("user verifies kayit formu is displayed")
  public void user_verifies_kayit_formu_is_displayed() {
    ReusableMethods.waitForVisibility(signUpPage.kayitFormuText,1);
    Assert.assertTrue(signUpPage.kayitFormuText.isDisplayed());
  }

  @Then("user types the credentials for {string}, {string}, {string}, {string}, {string} {string}, {string}")
  public void user_types_the_credentials_for(String firmaAdi, String adSoyad, String adres, String email, String telefon, String sifre, String sifreTekrar){

    signUpPage.firmaAdiForm.sendKeys(firmaAdi + Keys.ENTER);
    signUpPage.adSoyadForm.sendKeys(adSoyad + Keys.ENTER);
    signUpPage.addressForm.sendKeys(adres + Keys.ENTER);
    signUpPage.emailForm.sendKeys(email + Keys.ENTER);
    signUpPage.phoneForm.sendKeys(telefon + Keys.ENTER);
    signUpPage.sifreForm.sendKeys(sifre + Keys.ENTER);
    signUpPage.sifreTekrarForm.sendKeys(sifreTekrar + Keys.ENTER);

  }

  @Then("user enters invalid credentials for {string}, {string}, {string}, {string}, <{string}> {string}, {string}")
  public void user_enters_invalid_credentials_for(String firmaAdi, String adSoyad, String adres, String email, String telefon, String sifre, String sifreTekrar) {

    signUpPage.firmaAdiForm.sendKeys(firmaAdi + Keys.ENTER);
    signUpPage.adSoyadForm.sendKeys(adSoyad + Keys.ENTER);
    signUpPage.addressForm.sendKeys(adres + Keys.ENTER);
    signUpPage.emailForm.sendKeys(email + Keys.ENTER);
    signUpPage.phoneForm.sendKeys(telefon + Keys.ENTER);
    signUpPage.sifreForm.sendKeys(sifre + Keys.ENTER);
    signUpPage.sifreTekrarForm.sendKeys(sifreTekrar + Keys.ENTER);
  }


  @Then("user clicks hizmet kosullarını kabul ediyorum checkbox")
  public void user_clicks_hizmet_kosullarını_kabul_ediyorum_checkbox() {

    signUpPage.hizmetKosullariCheckBox.click();

  }


  @Then("user clicks on kayit ol button")
  public void user_clicks_on_kayit_ol_button() {

    signUpPage.kayitOlButton.click();

  }

}
