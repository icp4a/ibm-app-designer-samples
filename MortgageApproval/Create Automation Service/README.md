# The Provider: Creating an automation service for the assembler to use.

In this part of the sample, the provider (a technical user) creates a business-level automation service for the assembler to use in their app. These automation services are created in Business Automation Studio and are available to use by all pillars within ICP4A (Applications, workflow, decisions, etc). 
___
**Ensure you have the MortgagePA process app imported into Workflow as indicated [here](../README.md).**
___
1. Open Business Automation Studio and select the Automations tile.

![alt text](./images/BAStudioHome.png "BA Studio Home")  

2. In the Automation panel, select the External link. Here, you will see existing connections to external systems.  We don't have any yet, so click on the Business Automation Workflow tile.

![alt text](./images/ExternalAutomations.png "External Automations")  

3. After the wizard launches, enter the connection information about your workflow system (either a workflow center or workflow server).

![alt text](./images/WizardConnection.png "Wizard Connection")  

4. After pressing the Next button, the wizard will establish a connection with the remote system and show a list of Process Apps.  Select the MortgagePA process app and choose the two processes and one serivce flow as operations to include on the resulting automation service.

![alt text](./images/WizardPAandOperations.png "Wizard Process App and Operations")  

5. Go to the next page and give the automation service a name.

![alt text](./images/WizardServiceName.png "Wizard Service Name")  

6. Click Publish to complete the creation of the automation service. A notification will appear indicating that it is being created. When it is ready another notification will appear.

![alt text](./images/PublishNotify.png "Publish Notify")  

7. The automation service is now ready to use.  It will show up in the platform-wide catalog of published services.

![alt text](./images/ServiceCatalog.png "Service Catalog")  

8. Clicking on the automation service will reveal more details.

![alt text](./images/ServiceCatalogDetails.png "Service Catalog Details")  

9. The connection is also saved for quick access to bring in more external services from the same system.

![alt text](./images/ExternalConnection.png "External Connection")  

10. Clicking on the connection shows the automation services and allow the creation of more automation services.

![alt text](./images/ExternalConnectionDetails.png "External Connection Details")  
