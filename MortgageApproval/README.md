# Steps for Mortgage Approval sample with External Workflow System

Synopsis
___
Cindy is a business developer in the mortgage department of a bank.  She wants to create an app for branch associates to use for opening mortgage accounts.  The app needs to gather customer information and mortgage details.  If the mortgage is automatically approved (low risk), it can be opened right away, otherwise the associate needs to leverage some charts to do an analysis and decide whether the account should be opened or not. 

Setup
___
To run this sample, you must have a Business Automation Workflow Center or Business Automation Workflow Server running.  It may be a container deployment or traditional.  

Prerequisite step: To run any of the scenarios, start by importing "MortgagePA - v12.twx" to the Workflow Center or deploying it to a Workflow Server. This twx file contains a workflow process that will be leveraged by the Mortgage Approval app.

This sample has four main phases.
1. Create an External Automation Service as the provider.  The provider uses Business Automation Studio capabilities to bring in a Process App as an automation service to use by all pillars of ICP4A.  [See the Create Automation Service folder.](./Create%20Automation%20Service)
2. Author the template artifacts as the provider.  These artifacts can be consumed by the app assembler and are private to the Automation Application pillar. [See the Create Template folder.](./Create%20Template)
3. Author the Mortgage Approval app as an assembler.
   [See the "Create the Mortgage Approval App" folder.](./Create%20the%20Mortgage%20Approval%20App)
4. Publish the app and run it in Automation Navigator.
   [See the "Publish and Run" folder.](./Publish%20and%20Run)
  
Video references
___
You can also watch each of the three main phases below:
1. [Import artifacts and author template.](http://ibm.biz/Bdz7zi1)
2. [Author the Mortgage Approval app. ](http://ibm.biz/Bdz7zj)
3. [Publish the app.](http://ibm.biz/Bdz75P)
