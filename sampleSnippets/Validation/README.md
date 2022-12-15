**Abstract:** The sample covers how validation can be used through 3 different ways in BA Studio: 
1. Simple Validation
2. Server Side Validation
3. Client Side Validation 


**Details:**

**Simple Valiation:** 

1. Create a new customer(Customer)
    - Customer(Business Object) with Parameters: firstName(String), lastName(String), accountNo(String), age(Integer), country(String)
2. Drag and Drop the variable fields of customer onto the page. 
3. Drag and Drop a button onto the page. 
4. Open up the validation sideout from the toolbar:
![image](https://media.github.ibm.com/user/392869/files/fe981d00-1f06-11ed-8e72-1fe89ecd9f38)
5. Under define what to validate: Add the variables you want to validate. In the sample, we add tw.local.Customer.country and set it to required. 
6. If you need to validate a data value, the variable must be of simple type with data constraints. 
7. You can add the button under 'Stay on this page when errors exist' or 'Disable this view when errors exist'
8. The output will look as follows at runtime. The * indicates the an input is required:
![image](https://media.github.ibm.com/user/392869/files/83833680-1f07-11ed-9bf7-aba3c3f3c45c)



**Server Side Validation:**

1. Create a new customer(Customer)
    - Customer(Business Object) with Parameters: firstName(String), lastName(String), accountNo(String), age(Integer), country(String)
2. Drag and Drop the variable fields of customer onto the page. 
3. Drag and Drop a button onto the page. 
4. Go to the diagrams tab. The button will take you to an action.
5. Create a new action. Name this 'ValidateCustomer' 
6. This action will have an input of: customer(Customer).
7. This action will have a private variable: validationObj(CoachValidation)
8. Create another private variable: error(Boolean).
9. This will have a server-side script that contains your code for validation. As an example, the following is used in the sample:
```javascript
if (tw.local.customer.country!="Canada" && tw.local.customer.country!="USA") {
	tw.local.error = true;
	tw.local.validationObj = {};
	tw.local.validationObj.validationErrors = [];
	tw.local.validationObj.validationErrors[0] = {};
	tw.local.validationObj.validationErrors[0].errorBOPath = "tw.local.Customer.country";
	tw.local.validationObj.validationErrors[0].errorMessage = "Unsupported Country!";

}
```
*Note: The errorBOPath has to match the variable in the APP*

10. The script will lead to an exclusive gateway. The gateway ends event with error when tw.local.error = true, otherwise the default is ends event. 
11. The following Error code and Error mapping is used for the error ends event: 
![image](https://media.github.ibm.com/user/392869/files/42d4ee80-1f02-11ed-8d42-171f3a10bedf)
12. Your diagram should look something like the following image: 
![image](https://media.github.ibm.com/user/392869/files/51bba100-1f02-11ed-9784-3d1c65f150f1)
13. Go back to page diagram. 
14. Map the data for the ValidateCustomer action. The input will be mapped to `tw.local.customer`
15. Drag and Drop an Error boundary event onto the action. The error properties are as follows:
![image](https://media.github.ibm.com/user/392869/files/b1b24780-1f02-11ed-9e87-97b79c170103)
16. This error will lead to a 'Stay on page' event. Otherwise, the action can lead to a new page that confirms the success of Customer data
17. The output will look like this at runtime when errors exist:
![image](https://media.github.ibm.com/user/392869/files/bd553c80-1f09-11ed-9b2b-56ea9e35c8be)

**Client Side Validation:**

1. Create a new customer(Customer)
    - Customer(Business Object) with Parameters: firstName(String), lastName(String), accountNo(String), age(Integer), country(String)
2. Drag and Drop the variable fields of customer onto the page. 
3. Drag and Drop a button onto the page. 
4. Go to the diagrams tab
5. In the data change tab of the page, add your code for validation. The following is used as an example in the sample:
```javascript
tw.local.isReady = true;
if (tw.local.Customer.country!="Canada" && tw.local.Customer.country!="USA") {
	tw.system.coachValidation.addValidationError("tw.local.Customer.country", "Unsupported Country!")
	tw.local.isReady = false;
}
```
6. The isReady(Boolean) variable can be used to disable the button when errors exist, or stay on page when errors exist. For example, to disable button, use the following visibility rule:
![image](https://media.github.ibm.com/user/392869/files/e1168380-1f05-11ed-90ec-b7ae991dd42b)
7. The output at runtime will look like this when errors exist: 
![image](https://media.github.ibm.com/user/392869/files/10c58b80-1f06-11ed-9561-60f3b2162c8f)

**CP4BA Version:** 22.0.2

**Prereqs:** N/A

**TWX File:** ValidationMethods - v1.twx
