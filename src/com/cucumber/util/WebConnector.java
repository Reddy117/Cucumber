package com.cucumber.util;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;

public class WebConnector {
	
	WebDriver driver;
	
	public void openBrowser(String browser,String url){
		
		if(browser.equals("firefox"))
			driver=new FirefoxDriver();
		else if(browser.equals("chrome")){
			System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+"\\src\\com\\cucumber\\drivers\\chromedriver.exe");
			driver=new ChromeDriver();
		}
		
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.manage().window().maximize();
		driver.get(url);
		
	}
	
	public String readProperty(String property) throws IOException{
		FileInputStream f=new FileInputStream(System.getProperty("user.dir")+"\\src\\com\\cucumber\\OR\\config.properties");
		Properties Config=new Properties();
		Config.load(f);
		
		return Config.getProperty(property);
	}
	
	public void click(String xpath){
		driver.findElement(By.xpath(xpath)).click();
	}
	
	public String getText(String xpath){
		return driver.findElement(By.xpath(xpath)).getText();
	}
	
	public void selectDrop(String xpath,String value){
		new Select(driver.findElement(By.xpath(xpath))).selectByVisibleText(value);
	}
	
	public void assertEqualvalidation(String xpath,String expectedvalue){
		String actual=getText(xpath);
		Assert.assertEquals(actual, expectedvalue);
	}
	
	public void AssertTruevaidation(String xpath,String value){
		String mainString=getText(xpath);
		Assert.assertTrue(mainString.contains(value));
	}
	

}
