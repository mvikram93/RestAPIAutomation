$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/com/example/project/features/API.feature");
formatter.feature({
  "line": 2,
  "name": "To perfrom API Automation for the provided endpoints",
  "description": "",
  "id": "to-perfrom-api-automation-for-the-provided-endpoints",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@API"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "To validate the user details endpoint",
  "description": "",
  "id": "to-perfrom-api-automation-for-the-provided-endpoints;to-validate-the-user-details-endpoint",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "the urls of the user details service with the \"\u003cTestScenario\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "the url is hit",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "validate the response status code \u003cresponseCode\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "extract support text in the response if \"\u003cTestScenario\u003e\" is positive",
  "keyword": "And "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "to-perfrom-api-automation-for-the-provided-endpoints;to-validate-the-user-details-endpoint;",
  "rows": [
    {
      "cells": [
        "TestScenario",
        "responseCode"
      ],
      "line": 12,
      "id": "to-perfrom-api-automation-for-the-provided-endpoints;to-validate-the-user-details-endpoint;;1"
    },
    {
      "cells": [
        "Positive",
        "200"
      ],
      "line": 13,
      "id": "to-perfrom-api-automation-for-the-provided-endpoints;to-validate-the-user-details-endpoint;;2"
    },
    {
      "cells": [
        "Negative",
        "404"
      ],
      "line": 14,
      "id": "to-perfrom-api-automation-for-the-provided-endpoints;to-validate-the-user-details-endpoint;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "To validate the user details endpoint",
  "description": "",
  "id": "to-perfrom-api-automation-for-the-provided-endpoints;to-validate-the-user-details-endpoint;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@API"
    },
    {
      "line": 4,
      "name": "@TC1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "the urls of the user details service with the \"Positive\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "the url is hit",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "validate the response status code 200",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "extract support text in the response if \"Positive\" is positive",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Positive",
      "offset": 47
    }
  ],
  "location": "ExampleAPISteps.the_urls_of_the_user_details_service(String)"
});
formatter.result({
  "duration": 525914800,
  "status": "passed"
});
formatter.match({
  "location": "ExampleAPISteps.the_url_is_hit()"
});
formatter.result({
  "duration": 12247508400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 34
    }
  ],
  "location": "ExampleAPISteps.validate_the_response_status_code(int)"
});
formatter.result({
  "duration": 12760700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Positive",
      "offset": 41
    }
  ],
  "location": "ExampleAPISteps.extract_support_text_in_the_response_if_is_positive(String)"
});
formatter.result({
  "duration": 974646300,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "To validate the user details endpoint",
  "description": "",
  "id": "to-perfrom-api-automation-for-the-provided-endpoints;to-validate-the-user-details-endpoint;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@API"
    },
    {
      "line": 4,
      "name": "@TC1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "the urls of the user details service with the \"Negative\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "the url is hit",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "validate the response status code 404",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "extract support text in the response if \"Negative\" is positive",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Negative",
      "offset": 47
    }
  ],
  "location": "ExampleAPISteps.the_urls_of_the_user_details_service(String)"
});
formatter.result({
  "duration": 16057000,
  "status": "passed"
});
formatter.match({
  "location": "ExampleAPISteps.the_url_is_hit()"
});
formatter.result({
  "duration": 720874200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 34
    }
  ],
  "location": "ExampleAPISteps.validate_the_response_status_code(int)"
});
formatter.result({
  "duration": 299300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Negative",
      "offset": 41
    }
  ],
  "location": "ExampleAPISteps.extract_support_text_in_the_response_if_is_positive(String)"
});
formatter.result({
  "duration": 180800,
  "status": "passed"
});
});