package com.capgemini.librarymanagementsystem_cucumber.testrunner;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
	@CucumberOptions(features = "D:\\project\\librarymanagementsystem_cucumber\\src\\main\\java\\com\\capgemini\\librarymanagementsystem_cucumber\\features", 
						glue = {"com/capgemini/librarymanagementsystem_cucumber/stepdefinitions" }, 
						dryRun = false,  
						plugin = { "pretty", "html:target/cucumber" }, 
						monochrome = true)
	public class RegisterTestRunner {

		
		public static WebDriver driver;
		public static WebDriverWait wait;
		public static Actions action;

		static {
			System.setProperty("webdriver.chrome.driver", "./drivers/chromedriver.exe");
		}

}
