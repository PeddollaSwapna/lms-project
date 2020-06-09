Feature: User Registration

Scenario Outline:  User Registration with given details

Given User is on registration page
When User enters <firstName>,<lastName>,<email>,<password>,<mobile>,<role>
Then User should be register

Examples:
|firstName|lastName|email|password|mobile|role|
|"suman"|"reddy"|"suman@gmail.com"|"Suman@123"|9870987099|"admin"|
