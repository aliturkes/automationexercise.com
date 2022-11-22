@US01
Feature: US01_SignIn_Registration
  Background:
    Given user launches the browser and navigates to the URL
    When user clicks on hesabiniz yok mu
    Then user verifies kayit formu is displayed

  @US01_TC01_PS
  Scenario Outline: Valid Credentials Test Case
    Then user types the credentials for "<firmaAdi>", "<adSoyAd>", "<adres>", "<email>", "<telefon>" "<sifre>", "<sifreTekrar>"
    Then user clicks hizmet kosullarını kabul ediyorum checkbox
    And user clicks on kayit ol button
    Examples:
      | firmaAdi | adSoyAd    | adres             | email         | telefon     | sifre      | sifreTekrar |
      | firma1   | ahmet name | demo adres 134 ZX | demo@mail.com | 05550001122 | 1234567abc | 1234567abc  |


  @US01_TC02_NS
  Scenario: Valid Credentials Test Case
    Then user enters invalid credentials for "<invFirmaAdi>", "invAdSoyAd>", "<invAdres>", "<invEmail>", "<invTelefon>" "<invSifre>", "<invSifreTekrar>"
    Then user clicks hizmet kosullarını kabul ediyorum checkbox
    And user clicks on kayit ol button






