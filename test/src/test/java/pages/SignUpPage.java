package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class SignUpPage {

  public SignUpPage() {

    PageFactory.initElements(Driver.getDriver(), this);

  }

  @FindBy(xpath = "//h3[@class='mb-4']")
  public WebElement kayitFormuText;

  @FindBy(xpath = "//input[@name='company']")
  public WebElement firmaAdiForm;

  @FindBy(xpath = "//input[@name='name']")
  public WebElement adSoyadForm;

  @FindBy(xpath = "//input[@name='address']")
  public WebElement addressForm;

  @FindBy(xpath = "//input[@name='email']")
  public WebElement emailForm;

  @FindBy(xpath = "//input[@name='phone']")
  public WebElement phoneForm;

  @FindBy(xpath = "//input[@name='password']")
  public WebElement sifreForm;

  @FindBy(xpath = "//input[@name='passwordConfirm']")
  public WebElement sifreTekrarForm;

  @FindBy(xpath = "//input[@id='personCheckbox']")
  public WebElement hizmetKosullariCheckBox;

  @FindBy(xpath = "//button[@type='submit']")
  public WebElement kayitOlButton;



















}
