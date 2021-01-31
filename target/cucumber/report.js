$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/SkyBlue.feature");
formatter.feature({
  "line": 2,
  "name": "Validate SkyPage Functionality",
  "description": "",
  "id": "validate-skypage-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@End2End"
    }
  ]
});
formatter.before({
  "duration": 4245210600,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Set SkyBlue Background button exists",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.set_SkyBlue_Background_button_exists()"
});
formatter.result({
  "duration": 1253924600,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Sky Blue Background",
  "description": "",
  "id": "validate-skypage-functionality;sky-blue-background",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I click on the button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "The background color will change to sky blue in test/101",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.i_click_on_the_button()"
});
formatter.result({
  "duration": 2188686100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101",
      "offset": 53
    }
  ],
  "location": "StepDef.the_background_color_will_change_to_sky_blue_in_test(int)"
});
formatter.result({
  "duration": 135832800,
  "status": "passed"
});
formatter.before({
  "duration": 1733306100,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Set SkyBlue Background button exists",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.set_SkyBlue_Background_button_exists()"
});
formatter.result({
  "duration": 1418510400,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "White Background Change",
  "description": "",
  "id": "validate-skypage-functionality;white-background-change",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@Scenario2"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "Set SkyWhite Background button exists",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I click on the Button",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "The background color will change to white",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.set_SkyWhite_Background_button_exists()"
});
formatter.result({
  "duration": 382469500,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_click_on_the_Button()"
});
formatter.result({
  "duration": 2094829900,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.the_background_color_will_change_to_white()"
});
formatter.result({
  "duration": 114424500,
  "status": "passed"
});
});