package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class AccountDeletedPage {

  public AccountDeletedPage() {

    PageFactory.initElements(Driver.getDriver(), this);

  }

  @FindBy(xpath = "(//*[.='Account Deleted!'])[1]")
  public WebElement accountDeleted;

  @FindBy(xpath = "//a[@data-qa='continue-button']")
  public WebElement continueButton;





}

