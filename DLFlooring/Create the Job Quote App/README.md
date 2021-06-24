# The Assembler: Creating the Job Quote App

In this part of the sample, the assembler (a business developer) creates an App using a template as a starting point.

1. Open BAStudio and ensure the view mode in the user preferences is set to basic. 

![alt text](./images/PrefMenu.png "Preferences Menu")

![alt text](./images/PrefBasic.png "Basic Mode")

2. If you haven't performed the Create Actions and Template steps, then import the "DL_Flooring_Template - V1.twx" file.
3. Go to the template panel and create an App based on the DL Flooring Template. Name the App Job Quote.

![alt text](./images/CreateApp.png "Create the App")

4. The editor is opened to the first page. Find the Location View in the right-side palette and add the view by dragging and dropping it to the upper "Drop content here" area.

![alt text](./images/LocationPalette.png "Choosing Location view from the palette")

5. In the Data association dialog, create a new variable named "location".

![alt text](./images/LocationDataMap.png "Data association for location view")

6. Add an instance of the Flooring Type view under the location and create a new variable called flooringType for the data association.
7. Add a Decimal control by dragging and dropping from the right-side palette and place it under the Flooring Type. Set the label to "Square Footage" and create a new variable called squareFootage for the data association.
8. Add a Decimal control by dragging and dropping from the right-side palette and place it under the Square Footage. Set the label to Job Quote and create a new variable called jobQuote for the data association.

![alt text](./images/FormFieldsComplete.png "Form Fields Complete")

9. Add a button in the bottom "Drop content here" area.
10. In the Next step dialog that appears, call the Get Quote action. The inputs and outputs are automatically mapped.

![alt text](./images/GetQuoteButtonNextSteps.png "Next Steps")

11. Change the label of the button to "Get Quote" using the selection toolbar.

![alt text](./images/LocalSelectionBar.png "Selection Bar")

12. You may optionally change its color and set an icon.

![alt text](./images/GetQuoteButton.png "Get Quote Button")

13. Now that the App is fully authored, press the Preview button in the top right corner to try it out. 
14. Once you are happy with how the app is running, return to studio. Using the menu on the card, choose Request publish. Enter v1 for the version (snapshot) name and complete the dialog so the administrator can publish the app into production.

![alt text](./images/RequestPublish.png "Request Publish")

![alt text](./images/RequestPublish2.png "Request Publish dialog")
