package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class LoginPage {

  public LoginPage() {

    PageFactory.initElements(Driver.getDriver(), this);

  }

  @FindBy(xpath = "//*[.='New User Signup!']")
  public WebElement newUserSignupText;

  @FindBy(xpath = "//*[.='Login to your account']")
  public WebElement loginToYourAccountText;

  @FindBy(xpath = "//input[@name='name']")
  public WebElement nameBox;

  @FindBy(xpath = "//input[@data-qa='signup-email']")
  public WebElement signupEmail;

  @FindBy(xpath = "//input[@data-qa='login-email']")
  public WebElement loginEmail;

  @FindBy(xpath = " //input[@type='password']")
  public WebElement loginPassword;

  @FindBy(xpath = "//button[@data-qa='signup-button']")
  public WebElement signupButton;

  @FindBy(xpath = "//button[@data-qa='login-button']")
  public WebElement loginButton;

  @FindBy(xpath = "//*[.='Your email or password is incorrect!']")
  public WebElement incorrectEmailOrPassword;




}
