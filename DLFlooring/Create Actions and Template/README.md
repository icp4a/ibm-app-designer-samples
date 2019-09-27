# The Provider: Creating actions and a template for the assembler to use.

In this part of the sample, the provider (a technical user) creates business-level actions for the assembler to use in their app. These actions are authored in a toolkit, allowing them to be reused in the future. The provider also creates a template as a starting point for app authoring.  The template specifies the starting point for the user interface of the app and which toolkits the app should reference.

1. Open BAStudio and ensure the view mode in the user preferences is set to advanced.

![alt text](./images/PrefMenu.png "Preferences Menu")

2. Import "DL_UI_Toolkit - V1.twx".  This twx file has some business objects and corresponding views for building Apps in the DL Flooring company.
3. Create the DL Flooring Actions toolkit.

![alt text](./images/CreateToolkit.png "Create toolkit")

4. Create an action called Get Quote.
5. On the variables tab, create the input variables flooringType (String) and squareFootage (Decimal).  Create an output variable called jobQuote of type Decimal.

![alt text](./images/GetQuoteVars.png "Get Quote Variables")

6. In the diagram, create a script activity and set the script to:
```javascript
if(tw.local.flooringType=="Hardwood"){
	tw.local.jobQuote = tw.local.squareFootage * 6;
} else if(tw.local.flooringType=="Tile"){
	tw.local.jobQuote = tw.local.squareFootage * 4;
} else{//carpet
	tw.local.jobQuote = tw.local.squareFootage * 2;
}
```
7. Wire the start node to the script activity, and the script activity to the End node. Click Finish editing.

![alt text](./images/GetQuoteDiagram.png "Get Quote diagram")

8. Create a snapshot of the toolkit called V1.

![alt text](./images/DLFlooringActionsSnapshot.png "DL Flooring Actions snapshot")

9. Return to Studio and create a template called DL Flooring Template.

![alt text](./images/CreateTemplate.png "Create Template")

10. After the editor is opened, add DL Flooring Actions and DL UI Toolkit as toolkit dependencies.
11. In the App artifact, add DL Flooring Header to the first page. Click Finish editing.

![alt text](./images/Template.png "DL App Template")

12. Create a snapshot of the template called V1.
