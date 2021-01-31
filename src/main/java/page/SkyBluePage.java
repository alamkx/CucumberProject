package page;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class SkyBluePage {
	
	WebDriver driver;
	
	public SkyBluePage (WebDriver driver) {
		this.driver = driver;
		
	}
	
	 public void clickButton() {
		 
		 driver.findElement(By.xpath("//button[@type='button' and @ onclick='myFunctionSky()']")).click();;
		
		 }
	 
	 public String getPageTitle() {
		 
			return driver.getTitle();	 

				 			 }
	 
 public void WhiteButtonClick() {
		 
		 driver.findElement(By.xpath("//button[@type='button' and @onclick='myFunctionWhite()']")).click();
		 		  
	 }

}
