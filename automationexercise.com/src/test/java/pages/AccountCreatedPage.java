package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class AccountCreatedPage {

  public AccountCreatedPage() {

    PageFactory.initElements(Driver.getDriver(), this);

  }

  @FindBy(xpath = "(//*[.='Account Created!'])[1]")
  public WebElement accountCreated;

  @FindBy(xpath = "//a[@data-qa='continue-button']")
  public WebElement continueButton;





}

