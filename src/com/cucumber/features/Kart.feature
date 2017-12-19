Feature: Add Kart

  @Tag1
  Scenario Outline: Add Item to kart
    Given I go to "<Environment>" on "<Browser>"
    And I click on ruby image
    And I click on Add to bakset button
    When I click on view basket button
    Then The "<Expected>" should display in kart table

    Examples: 
      | Browser | Expected      | Environment |
      | firefox | Selenium Ruby | Env         |
      | chrome  | Selenium Ruby | Env         |

  Scenario Outline: Remove item from kart
    Given I go to "<Environment>" on "<Browser>"
    And I click on ruby image
    And I click on Add to bakset button
    When I click on view basket button
    Then I click on remove button
    Then Item should be removed from kart

    Examples: 
      | Browser | Environment |
      | firefox | Env         |
