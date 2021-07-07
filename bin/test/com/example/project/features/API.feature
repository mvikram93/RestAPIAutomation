@API
Feature: To perfrom API Automation for the provided endpoints

  @TC1
  Scenario Outline: To validate the user details endpoint
    Given the urls of the user details service with the "<TestScenario>"
    When the url is hit
    Then validate the response status code <responseCode>
    And extract support text in the response if "<TestScenario>" is positive

    Examples: 
      | TestScenario | responseCode |
      | Positive     |          200 |
      | Negative     |          404 | 
