$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src\\com\\cucumber\\features\\Kart.feature");
formatter.feature({
  "line": 1,
  "name": "Add Kart",
  "description": "",
  "id": "add-kart",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 13,
  "name": "Add Item to kart",
  "description": "",
  "id": "add-kart;add-item-to-kart;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Tag1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I go to \"Env\" on \"firefox\"",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on ruby image",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click on Add to bakset button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on view basket button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "The \"Selenium Ruby\" should display in kart table",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Env",
      "offset": 9
    },
    {
      "val": "firefox",
      "offset": 18
    }
  ],
  "location": "Kart.I_go_to_on(String,String)"
});
formatter.result({
  "duration": 47528779430,
  "status": "passed"
});
formatter.match({
  "location": "Kart.I_click_on_ruby_image()"
});
formatter.result({
  "duration": 709771150,
  "status": "passed"
});
formatter.match({
  "location": "Kart.I_click_on_Add_to_bakset_button()"
});
formatter.result({
  "duration": 3153882195,
  "status": "passed"
});
formatter.match({
  "location": "Kart.I_click_on_view_basket_button()"
});
formatter.result({
  "duration": 3194126184,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Selenium Ruby",
      "offset": 5
    }
  ],
  "location": "Kart.The_should_display_in_kart_table(String)"
});
formatter.result({
  "duration": 3158736928,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Add Item to kart",
  "description": "",
  "id": "add-kart;add-item-to-kart;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Tag1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I go to \"Env\" on \"chrome\"",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on ruby image",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click on Add to bakset button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on view basket button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "The \"Selenium Ruby\" should display in kart table",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Env",
      "offset": 9
    },
    {
      "val": "chrome",
      "offset": 18
    }
  ],
  "location": "Kart.I_go_to_on(String,String)"
});
formatter.result({
  "duration": 45067393542,
  "status": "passed"
});
formatter.match({
  "location": "Kart.I_click_on_ruby_image()"
});
formatter.result({
  "duration": 6068389122,
  "status": "passed"
});
formatter.match({
  "location": "Kart.I_click_on_Add_to_bakset_button()"
});
formatter.result({
  "duration": 4499255881,
  "status": "passed"
});
formatter.match({
  "location": "Kart.I_click_on_view_basket_button()"
});
formatter.result({
  "duration": 34812327634,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Selenium Ruby",
      "offset": 5
    }
  ],
  "location": "Kart.The_should_display_in_kart_table(String)"
});
formatter.result({
  "duration": 95339046,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Remove item from kart",
  "description": "",
  "id": "add-kart;remove-item-from-kart;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "I go to \"Env\" on \"firefox\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I click on ruby image",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on Add to bakset button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on view basket button",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click on remove button",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Item should be removed from kart",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Env",
      "offset": 9
    },
    {
      "val": "firefox",
      "offset": 18
    }
  ],
  "location": "Kart.I_go_to_on(String,String)"
});
formatter.result({
  "duration": 22589188008,
  "status": "passed"
});
formatter.match({
  "location": "Kart.I_click_on_ruby_image()"
});
formatter.result({
  "duration": 1873476738,
  "status": "passed"
});
formatter.match({
  "location": "Kart.I_click_on_Add_to_bakset_button()"
});
formatter.result({
  "duration": 3941082739,
  "status": "passed"
});
formatter.match({
  "location": "Kart.I_click_on_view_basket_button()"
});
formatter.result({
  "duration": 3253242561,
  "status": "passed"
});
formatter.match({
  "location": "Kart.I_click_on_remove_button()"
});
formatter.result({
  "duration": 7118779297,
  "status": "passed"
});
formatter.match({
  "location": "Kart.Item_should_be_removed_from_kart()"
});
formatter.result({
  "duration": 29765,
  "status": "passed"
});
});