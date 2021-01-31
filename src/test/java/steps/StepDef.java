package steps;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import page.SkyBluePage;
import util.OpenBrowser;

public class StepDef {
		
		WebDriver driver;
		SkyBluePage skyblue;
		
		
		
		@Before
		public void Before_run() {
			driver = OpenBrowser.init();
			skyblue = PageFactory.initElements(driver, SkyBluePage.class);
			
			
			
		}
		
		@Given("^Set SkyBlue Background button exists$")
		public void set_SkyBlue_Background_button_exists() throws Throwable {
			driver.get("https://techfios.com/test/101/");
		}

		@When("^I click on the button$")
		public void i_click_on_the_button() throws Throwable {
			
			//driver.findElement(By.xpath("//button[@type='button' and @ onclick='myFunctionSky()']")).click();;
			skyblue.clickButton();
			Thread.sleep(2000);
			
		}

			
			@Then("^The background color will change to sky blue in test/(\\d+)$")
			public void the_background_color_will_change_to_sky_blue_in_test(int arg1) throws Throwable {
			  
		    skyblue.getPageTitle();	
		    
		    driver.close();
				
			}
			
			
			
			@Given("^Set SkyWhite Background button exists$")
			public void set_SkyWhite_Background_button_exists() throws Throwable {
				driver.get("https://techfios.com/test/101/");
			    
			}


			@When("^I click on the Button$")
			public void i_click_on_the_Button() throws Throwable {
				skyblue.WhiteButtonClick();
				Thread.sleep(2000);
			    
			}

			@Then("^The background color will change to white$")
			public void the_background_color_will_change_to_white() throws Throwable {
			    
				skyblue.getPageTitle();
				
				driver.close();
				
			}
		    
		}


