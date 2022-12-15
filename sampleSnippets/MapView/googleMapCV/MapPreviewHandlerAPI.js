var mixObject = {
    createPreview:function(containingDiv, labelText, callback){
		debugger;
		this.context.coachViewData.currentValue = "roadmap";
		this.context.coachViewData.theFrame = containingDiv.children[0];
		this.context.coachViewData.theFrame.setAttribute("src", "https://www.google.com/maps/embed/v1/view?key=YOUR_API_KEY&center=37.4218,-122.0840&zoom=1&maptype=roadmap");
		callback();
    },
    propertyChanged:function(propertyName, propertyValue){
		if(propertyName=="mapType"){
			if(propertyValue=="satellite" && this.context.coachViewData.currentValue!="satellite"){
				this.context.coachViewData.currentValue = "satellite";
				this.context.coachViewData.theFrame.setAttribute("src", "https://www.google.com/maps/embed/v1/view?key=YOUR_API_KEY&center=37.4218,-122.0840&zoom=1&maptype=satellite");
			}
			else if(propertyValue=="roadmap" && this.context.coachViewData.currentValue!="roadmap"){
				this.context.coachViewData.currentValue = "roadmap";
				this.context.coachViewData.theFrame.setAttribute("src", "https://www.google.com/maps/embed/v1/view?key=YOUR_API_KEY&center=37.4218,-122.0840&zoom=1&maptype=roadmap");
			}
		}
    }
};