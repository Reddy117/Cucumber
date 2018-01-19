package com.cucumber.runner;

import org.junit.runner.RunWith;

import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
//@ExtendedCucumberOptions(jsonReport = "target/cucumber.json",
//overviewReport = true,
//outputFolder = "target")
@Cucumber.Options(features="src\\com\\cucumber\\features\\Kart.feature",
glue="com.cucumber.stepdefination",format = { "html:target/cucumber-html-report"}
//,tags="~@Tag1"

)
public class KartRunner {

}
