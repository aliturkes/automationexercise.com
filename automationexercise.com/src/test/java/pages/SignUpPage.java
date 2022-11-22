package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class SignUpPage {

  public SignUpPage() {

    PageFactory.initElements(Driver.getDriver(), this);

  }

  @FindBy(xpath = "(//*[.='Enter Account Information'])[1]")
  public WebElement enterAccountInformationText;

  @FindBy(xpath = "//input[@id='id_gender1']")
  public WebElement titleMrRadioButton;

  @FindBy(xpath = "//input[@id='password']")
  public WebElement passwordForm ;

  @FindBy(xpath = "//select[@id='days']")
  public WebElement selectDays ;

  @FindBy(xpath = "//select[@id='months']")
  public WebElement selectMonths;

  @FindBy(xpath = "//select[@id='years']")
  public WebElement selectYears;

  @FindBy(xpath = "//input[@id='newsletter']")
  public WebElement newsletterCheckBox;

  @FindBy(xpath = "//input[@id='optin']")
  public WebElement  specialOffersCheckBox;

  @FindBy(xpath = "//input[@id='first_name']")
  public WebElement firstName;

  @FindBy(xpath = "//input[@id='last_name']")
  public WebElement lastName;

  @FindBy(xpath = "//input[@id='company']")
  public WebElement company;

  @FindBy(xpath = "//input[@id='address1']")
  public WebElement address1;

  @FindBy(xpath = "//input[@id='address2']")
  public WebElement address2;

  @FindBy(xpath = "//select[@id='country']")
  public WebElement country;

  @FindBy(xpath = "//input[@id='state']")
  public WebElement state;

  @FindBy(xpath = "//input[@id='city']")
  public WebElement city;

  @FindBy(xpath = "//input[@id='zipcode']")
  public WebElement zipCode ;

  @FindBy(xpath = "//input[@id='mobile_number']")
  public WebElement mobileNumber;

  @FindBy(xpath = "//button[@data-qa='create-account']")
  public WebElement createAccountButton;



















}
