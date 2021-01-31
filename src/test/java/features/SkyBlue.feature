 @End2End
Feature: Validate SkyPage Functionality 

Background: 
 Given Set SkyBlue Background button exists 
 
@Scenario1 
Scenario: Sky Blue Background 
 When I click on the button 
 Then The background color will change to sky blue in test/101   
 
  
 @Scenario2 
Scenario: White Background Change 
 Given Set SkyWhite Background button exists      
 When  I click on the Button     
 Then The background color will change to white    