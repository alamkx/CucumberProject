package util;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class OpenBrowser {
	
	static WebDriver driver;
	
	
	
	public static WebDriver init() {
		
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Sunzida\\eclipse-workspace\\BDD\\Cucumber_Project\\drivernew\\chromedriver.exe");
		driver = new ChromeDriver();
		//driver.get("https://techfios.com/test/101/");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
		driver.manage().deleteAllCookies();
		return driver;
		

}

}
