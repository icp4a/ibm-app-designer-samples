**Abstract:** The sample covers how to embed dynamic google maps in your app using an API key, and without using one. 

**Details:**

- **With API Key**: 

1. Create CSHS. Name this 'Google Maps API'
2. Set to URL addressable
3. Create a new view. Name this 'AddressCV'. Set the business data of this view to a variable 'address' of type Address.
     - Address(Business Object) with Parameters: streetNumber(Integer), streetName(String), city(String), state(String), country(String), postalCode(String)
4. Go to grid for this view and create a second column. 
5. Drag and drop the address variables onto the page. Each column will have 3 variables. Hide the comma seperator.
6. Go back to coach in CSHS. Drag and drop the AddressCV onto the page. Create a new variable address(Address) and bind it to this view.
7. Create a new view. Name this 'MapCV'. DnD a custom HTML into this view. The custom HTML has the following code:
```
<iframe id="mapFrameID"
	width="100%"
	height="99%"
	frameborder="0" style="border:0">
</iframe>
```
8. The business data for this view is postalCode(String)
9. Add a config option for this view: Name this 'mapType'. This responds to screen size. The variable type is 'MapType'
     - MapType (Business Object):
     ![image](https://media.github.ibm.com/user/392869/files/51060a80-1e2f-11ed-89b7-5c0cfd676957)
10. Inline CSS for the view: 
```
 .MapCV{
    padding:10px;
    width:250px;
    height:250px;
}
```
11. JS for event handler change for the view: (You will need to generate your Google Dev API Key to embed here)
```javascript
 var theFrame = document.querySelector("#mapFrameID");
 var postalCode = this.context.binding.get("value");
 var mapType = this.context.options.mapType;
 if(!mapType){
 mapType="roadmap";
 }
 else{
 mapType = mapType.get("value");
 }
 if(postalCode=="" || !postalCode){
 	theFrame.setAttribute("src", "https://www.google.com/maps/embed/v1/view?key=YOUR_API_KEY&center=37.4218,-122.0840&zoom=1&maptype="+mapType);
}
else{
 	theFrame.setAttribute("src", "https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q="+postalCode+"&maptype="+mapType);
 }
```
12. Attach the [map palette](./mapPalette.png) image for Palette icon. 
13. Attach the [map preview handler html code](./MapPreviewHandler.html) for the HTML snippet file. 
14. Attach the [map preview handler javascript](./MapPreviewHandlerAPI.js) for the helper JS file. 
15. Go back to coach, create new grid cell, drag and drop a collapsible panel. Label this Map.
16. DnD MapCV into the collapsible panel. Bind this to address.postalCode. Set the height to 400px and width to auto. Set the mapType to Satellite or RoadMap.

- **Without API Key**:


1. Create CSHS. Name this 'Google Maps No API'
2. Set to URL addressable
3. Create a new view. Name this 'AddressCV'. Set the business data of this view to a variable 'address' of type Address.
     - Address(Business Object) with Parameters: streetNumber(Integer), streetName(String), city(String), state(String), country(String), postalCode(String)
4. Go to grid for this view and create a second column. 
5. Drag and drop the address variables onto the page. Each column will have 3 variables. Hide the comma seperator.
6. Go back to coach in CSHS. Drag and drop the AddressCV onto the page. Create a new variable address(Address) and bind it to this view.
7. Create a new view. Name this 'MapCVNoAPI'. DnD a custom HTML into this view. The custom HTML has the following code:
```
<iframe id="mapFrameID"
	width="100%"
	height="99%"
	frameborder="0" style="border:0">
</iframe>
```
8. The business data for this view is postalCode(String)
9. Add a config option for this view: Name this 'mapType'. This responds to screen size. The variable type is 'MapType'
     - MapType (Business Object):
     ![image](https://media.github.ibm.com/user/392869/files/51060a80-1e2f-11ed-89b7-5c0cfd676957)
10. Inline CSS for the view: 
```
 .MapCV{
    padding:10px;
    width:250px;
    height:250px;
}
```
11. JS for event handler change for the view. Notice this uses no API key:
```javascript
var theFrame = document.querySelector("#mapFrameID");
var postalCode = this.context.binding.get("value");
var mapType = this.context.options.mapType;
if(!mapType){
mapType="roadmap";
}
else{
    mapType = mapType.get("value");
    }
if (mapType == "roadmap") {
    mapType = 'm';
}
else {
    mapType = 'h';
}

if(postalCode=="" || !postalCode){
    theFrame.setAttribute("src", "https://maps.google.com/maps?&q=" + encodeURIComponent( 'L3R9Z7' ) + "&output=embed&t=" +mapType);
}
else{
    theFrame.setAttribute("src", "https://maps.google.com/maps?&q="+ encodeURIComponent( postalCode ) +  "&output=embed&t="+mapType);
}
```
12. Attach the [map palette](./mapPalette.png) image for Palette icon. 
13. Attach the [map preview handler html code](./MapPreviewHandler.html) for the HTML snippet file. 
14. Attach the [map preview handler javascript](./MapPreviewHandlerNoAPI.js) for the helper JS file. 
15. Go back to coach, create new grid cell, drag and drop a collapsible panel. Label this Map.
16. DnD MapCV into the collapsible panel. Bind this to address.postalCode. Set the height to 400px and width to auto. Set the mapType to Satellite or RoadMap.


The output looks the same using either methods (with or without the API Key): 
![output](https://media.github.ibm.com/user/392869/files/bae3ea00-1eeb-11ed-87d0-0d5e8c1248a8)



**CP4BA Version:** 22.0.2

**Prereqs:** N/A

**TWX File:** GoogleMapsEmbed - v1.twx (This is not fully function for the API Key method. You will need to embed your own API key)
