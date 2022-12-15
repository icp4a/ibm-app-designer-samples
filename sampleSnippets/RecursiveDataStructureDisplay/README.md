**Abstract:**
The Recursive Data Structure Display sample creates recursive data type using complex type Business Objects to display values that are assigned to the variable of this recursive type. The sample shows this by creating two recurisve objects: 
1. Folder
2. DiscussionEntry

The default behaviour does not support recursive data types. Therefore, the sample addresses a way around these limitatations. The sample offers a way to visualize recursive data since simply dragging and dropping or creating a recursive view hierarchy does not work as expected. 
The details use 'DiscussionEntry' as an example to go over how to create recursive objects, how to assign default values to them, and how to visualize that data. 


**Details:**
- How to Create Recursive Data Objects:
1. Create a new Business Object. Name this "DiscussionEntry"
2. Make it complex type
3. Give the Business Object the parameters: `senderName(String), entryText(String)`
4. Make one of the parameters the Business Object itself: `discussionFork(DiscussionEntry)`. Make this a list.


- How to Assign Default Values to a Recursive data object variable:
1. Create a new variable. Name this 'disuccsionEntries'
2. Assign the 'DiscussionEntry' to the variable type 
3. Under Default Value tab, assign the default values via accessing each recursive list through indexing. Example: 

The first discussion object will be set via: 
```javascript
var autoObject = [];
autoObject[0] = {};
autoObject[0].senderName = "Grant";
autoObject[0].entryText = "Hi!!";
```
Each consecutive object will be set via indexing through the object: 
```javacript
autoObject[0].discussionFork = [];
autoObject[0].discussionFork[0] = {};
autoObject[0].discussionFork[0].senderName = "Alex";
autoObject[0].discussionFork[0].entryText = "Hi, I wanted to talk to you on the side";
autoObject[0].discussionFork[1] = {};
autoObject[0].discussionFork[1].senderName = "Jacob";
autoObject[0].discussionFork[1].entryText = "Sure thing, go ahead!";
autoObject
```


- How to Display Recursive Data:
1. Drag and Drop a Panel onto the coach. 
2. Create a new view - Name this 'RecursiveDataView' 
3. Drag and Drop a Content Box into this view. 
4. Add a configuration option. Name this 'recursivePropertyPath' (String). Set type to Object. 
5. Add a business data. Name this 'TheBizData' (ANY)
6. Under the Behavior tab, under the Event Handlers dropdown, add the following for 'load':
```javascript
var children = this.context.element.children;
var recursivePath = this.context.options.recursivePropertyPath.get("value");

if(!this.contentBoxTemplate){
	for(var i = 0; i < children.length; i++)
	{
		var child = children[i];
		if(child.className && /\bContentBox\b/.test(child.className))
		{
			this.contentBoxTemplate = child;
			
			var cBox2 = document.createElement("div");
			cBox2.className = this.contentBoxTemplate.className;
			if(domClass.contains(this.contentBoxTemplate, "ContentBox")){
				this.contentBoxTemplate.className = "ContentBoxTemplate";
			}
			this.context.element.appendChild(cBox2);
			
			this.contentBox = cBox2;
			break;
		}
	}
}
var children = this.contentBox.children;
for(var i = children.length - 1; i >= 0; i--)
{
	var child = children[i];
	this.context.deleteView(child);
	this.contentBox.removeChild(child);
}
var rootView = this;
var createViewLayer = function(indentLevel, boundObject, bindingPath){
	var cs = rootView.contentBoxTemplate.children;				
	for(var i = 0; i < cs.length; i++)
	{
		var child = cs[i];
		var c = child.cloneNode(true);
	
		rootView.contentBox.appendChild(c);
		var newView = rootView.context.createView(c, null, rootView);
		style.set(newView.context.element, {paddingLeft:((indentLevel*50)+"px")});
		domAttr.set(newView.context.element, "data-binding", bindingPath); 
		if(newView.context.binding == null){
			newView.context.binding = bpmext.ui.substituteObject(newView);
		}
		newView.context.binding.set("value", boundObject);
		newView._refreshView(true);
		var event = {property: newView.context.binding.property, oldVal: null, newVal: newView.context.binding, path: bindingPath};
		newView._bindingChanged(event, true);
		newView._refreshView(true);
		//now render next layer
		if(boundObject[recursivePath]!=null){
			var childProp = boundObject[recursivePath];
			if(childProp.items && childProp.listAllSelectedIndices){
				//list entry.  Note that declaredClass isn't set so we can't use that
				for(var j=0; j<childProp.items.length; j++){
					createViewLayer(indentLevel+1, childProp.items[j], bindingPath+"."+recursivePath+"["+j+"]");
				}
			}
			else{
				//non-list
		 		createViewLayer(indentLevel+1, boundObject[recursivePath], bindingPath+"."+recursivePath);
		 	}
		}
	};
}
debugger;
var rootBoundObject = rootView.context.binding.boundObject;
var thisBoundObject = null;
var bindingPath = null;
if(rootBoundObject.declaredClass=="com.ibm.bpm.coach.List"){
	bindingPath = rootBoundObject._objectPath+"["+this.context.binding.property+"]";
	thisBoundObject = rootBoundObject.items[this.context.binding.property];
}else{
	bindingPath = rootBoundObject._objectPath+"."+this.context.binding.property;
	thisBoundObject = rootBoundObject[this.context.binding.property];
}
createViewLayer(0, thisBoundObject, bindingPath);
```
7. Add the following AMD dependencies: 
```
1. Module ID: dojo/dom-class,  Alias: domClass
2. Module ID: dojo/dom-attr, Alias: domAttr
3. Module ID: dojo/dom-style, Alias: style
```
9. Under the Content Box tab, select 'This View will manage its own content'.
10. Creat another new view - Name this 'AltDiscussionEntryWidget'
11. Drag and Drop a custom HTML into this view. 
12. Bind this view to the "DiscussionEntry" type.
13. The folliwing HTML goes into this custom html: 
```javascript
<div class="discRoot">
	<div class="indDiv">
		<div><span class="senderSpan"></span></div>
		<div><span class="messageSpan"></span></div>
	</div>
</div>
```
11. Under the Behavior tab, add inline CSS. The following is an example of CSS added in the sample to view the data: 
```javascript
.discRoot{
	border-color: rgb(0, 130, 0);
	background-color: rgb(0, 130, 0);
	box-sizing: border-box;
	border-radius: 20px;
	border-style: solid;
	width: fit-content;
}
.indDiv{
	padding: 10px;
}
.senderSpan{
  display: inline-block;
  font-weight: bold;
  color: white;
}
.messageSpan{
  display: inline-block;
  color: white;
}
```
12. Under Event Handlers dropdown, add the following under 'change':
```javascript
var bindingVal = this.context.binding.get("value");
var senderSpan = this.context.element.querySelector(".senderSpan");
senderSpan.innerHTML = bindingVal.senderName+": ";
var messageSpan = this.context.element.querySelector(".messageSpan");
messageSpan.innerHTML = bindingVal.entryText;
```
13. Go back to coach.
14. Bind the panel to `discussionEntries[]` (This is from the variable created before.)
15. Drag and drop the 'RecurisveDataView' within the panel. Bind this view to `discussionEntries.currentItem`
16. Under configuration, set the recursivePropertyPath to 'discussionFork'. 
17. Drag and drop the 'AltDiscussionEntryWidget' view inside the 'RecursiveDataView'. 
18. Preview. 



**CP4BA Version:** 22.0.2


**Prereqs:** N/A


**TWX File:** RecursProcApp - V2.twx
