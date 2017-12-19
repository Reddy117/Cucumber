package com.cucumber.stepdefination;

import org.openqa.selenium.By;

import com.cucumber.OR.OR;
import com.cucumber.util.WebConnector;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class Kart extends OR{

	WebConnector w=new WebConnector();
	
	@Given("^I go to \"([^\"]*)\" on \"([^\"]*)\"$")
	public void I_go_to_on(String arg1, String browser) throws Throwable {
		/*if(browser.equals("firefox"))
			driver=new FirefoxDriver();
		else if(browser.equals("chrome")){
			System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+"\\src\\com\\cucumber\\drivers\\chromedriver.exe");
			driver=new ChromeDriver();
		}

		driver.get("http://practice.automationtesting.in/");*/
		w.openBrowser(browser, w.readProperty(arg1));
	}

	@Given("^I click on ruby image$")
	public void I_click_on_ruby_image() throws Throwable {
		//driver.findElement(By.xpath("//*[@id='text-22-sub_row_1-0-2-0-0']/div/ul/li/a[1]/img")).click();
		w.click(rubyxpath);
	}

	@Given("^I click on Add to bakset button$")
	public void I_click_on_Add_to_bakset_button() throws Throwable {
		//driver.findElement(By.xpath("//*[@id='product-160']/div[2]/form/button")).click();
		w.click(addtobasket);
	}

	@When("^I click on view basket button$")
	public void I_click_on_view_basket_button() throws Throwable {
		//driver.findElement(By.xpath("//*[@id='content']/div[1]/a")).click();
		w.click(viewbasket);
	}

	/*@Then("^The ruby should display in kart table$")
	public void The_ruby_should_display_in_kart_table() throws Throwable {

	}*/


	@Then("^The \"([^\"]*)\" should display in kart table$")
	public void The_should_display_in_kart_table(String expected) throws Throwable {
		//String actual=driver.findElement(By.xpath("//*[@id='page-34']/div/div[1]/form/table/tbody/tr[1]/td[3]/a")).getText();
		//Assert.assertEquals(expected, actual);
		w.assertEqualvalidation(basketAddeditem, expected);
	}
	
	@Then("^I click on remove button$")
	public void I_click_on_remove_button() throws Throwable {
		//driver.findElement(By.xpath("//*[@id='page-34']/div/div[1]/form/table/tbody/tr[1]/td[1]/a")).click();
		w.click(removebtn);
	}

	@Then("^Item should be removed from kart$")
	public void Item_should_be_removed_from_kart() throws Throwable {

	}
}
