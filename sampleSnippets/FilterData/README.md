**Abstract:** 

The sample covers how to filter data within a table to allow users to search for specific information. 

**Details:**

The sample is created as follows: 

1. Create a new business object. Name this 'Customer'. The paramters are: `firstName(String), lastName(String), accountNo(String), address(String)`
2. Create a new variable of type Customer. Make it a list. Name this customers. Assign the following default values: 

```javascript
var autoObject = [];
autoObject[0] = {};
autoObject[0].firstName = "Harry";
autoObject[0].lastName = "Peebles";
autoObject[0].accountNo = "1234";
autoObject[0].address = "8 Main Street";

autoObject[1] = {};
autoObject[1].firstName = "Grant";
autoObject[1].lastName = "Taylor";
autoObject[1].accountNo = "4322";
autoObject[1].address = "8 Nantucket Drive";

autoObject[2] = {};
autoObject[2].firstName = "Bob";
autoObject[2].lastName = "Ross";
autoObject[2].accountNo = "3232";
autoObject[2].address = "4 Painting Love";
autoObject
```
3. Create another variable. Name this filterText(String)
4. Create another variable of type Customer. Make it a list. Name this filteredList.
5. DnD a plain text onto the page. Bind this to the filterText variable. 
6. DnD a table onto the page. Bind this to the filterList variable. 
7. DnD 4 plain texts inside the table. Bind each one to: `filteredList.currentItem.firstName, filteredList.currentItem.lastName, filteredList.currentItem.accountNo, filteredList.currentItem.address,`
8. Go to the diagram tab.
9. Add the following JS in the data change tab of the page: 
```javascript
tw.local.filteredList = [];
for(var i=0; i<tw.local.customers.length; i++){
	if(tw.local.filterText==null || tw.local.filterText=="" || (tw.local.customers[i].firstName!=null && tw.local.customers[i].firstName.indexOf(tw.local.filterText)!=-1)){
		tw.local.filteredList.push(tw.local.customers[i]);
	}
}
```
10. Preview and use the plain text field to filter data shown in the table. 



**CP4BA Version:** 22.0.2


**Prereqs:** N/A


**TWX File:** FilterDataInATable - V1.twx


