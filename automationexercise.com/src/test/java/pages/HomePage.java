package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class HomePage {

  public HomePage() {

    PageFactory.initElements(Driver.getDriver(), this);

  }

  @FindBy(xpath = "//img[@src='/static/images/home/logo.png']")
  public WebElement automationExerciseImage;

  @FindBy(xpath = "//a[@href='/login']")
  public WebElement signupLoginButton;

  @FindBy(xpath = "//a[@href='/delete_account']")
  public WebElement deleteAccount;

  @FindBy(xpath = "//a[@href='/delete_account']")
  public WebElement logout;

















}

