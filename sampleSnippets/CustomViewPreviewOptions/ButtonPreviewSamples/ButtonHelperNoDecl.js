var mixObject =
{
	createPreview:function(containingDiv, labelText, callback){
		require([ "dojo/dom-construct", "dojo/dom-class" ], this.lang.hitch(this, function(domConstruct, domClass){
			var buttonDiv = domConstruct.create("div");
			domConstruct.place(buttonDiv, containingDiv);
			domClass.add(buttonDiv, "TestButtonDiv");
			var button = domConstruct.create("button");
			this.context.coachViewData.button = button;
			
			domConstruct.place(button, buttonDiv);
			domClass.add(button, "TestButton");
			this.labelTextDom = document.createTextNode(labelText);
			button.appendChild(this.labelTextDom);
			callback();
		}));	
	},
	propertyChanged:function(propertyName, propertyValue){
		if(propertyName=="@label" && this.labelTextDom){
			this.labelTextDom.data = propertyValue;
		}
	}
};