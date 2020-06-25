# A sample of steps to leverage Action Configurator to process a Swagger file

The Action Configurator in this sample is designed to process a Swagger file so that the Action defined in the Toolkit contribution in this sample can make REST calls by leveraging processed parameters. A sample swagger file is also included as a template of formats. 


1. Create a Template/App, import ```Rest Call Service for Swagger``` toolkit as a dependency
![alt text](./images/import-toolkit.png "Import Toolkit")

2. Create a new Action, drag a Nested Action and drop onto the flow. Select ```Rest Call Action for Swagger``` as a nested action and a ```Confiure...``` button will appear. 
![alt text](./images/create-action.png "Create Action")
![alt text](./images/nest-action.png "Nest Action")

3. Click on the ```Confiure...``` button, you can select a swagger file that you would like to process. On the next page, two single selects will let you choose an operation that you want make the REST call. 
![alt text](./images/select-operation.png "Select Operation")

4. After you finish configuration, Business Objects will be created based on ```definitions``` section in your swagger file and local variables will be generated baed on ```varTypeMap``` pre-defined in the Action Configurator. In the Data Mapping tab, all processed information will be mapped here using  generated local variables. Also, a defined endpoint entry will also be created so that host information and authentication can be configured here. 
![alt text](./images/BOs.png "BOs")
![alt text](./images/mappings.png "Data Mappings")
![alt text](./images/app-resource.png "Defined Endpoint")

5. At this point, you have finished configuration. All you need is to populate local variables in the main application flow. Below is merely an example but you don't have to follow it. Instead, local variables can be populated by scripts or even some other actions. 
![alt text](./images/appFlow.png "App Flow Example")