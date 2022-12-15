var mixObject = {
    createPreview:function(containingDiv, labelText, callback){
		this.context.coachViewData.currentValue = "roadmap";
		this.context.coachViewData.theFrame = containingDiv.children[0];
		this.context.coachViewData.theFrame.setAttribute("src", "https://maps.google.com/maps?&q=" + encodeURIComponent( 'L3R9Z7' ) + "&output=embed&t=m");
		callback();
    },
    propertyChanged:function(propertyName, propertyValue){
		if(propertyName=="mapType"){
			if(propertyValue=="satellite" && this.context.coachViewData.currentValue!="satellite"){
				this.context.coachViewData.currentValue = "satellite";
				this.context.coachViewData.theFrame.setAttribute("src", "https://maps.google.com/maps?&q=" + encodeURIComponent( 'L3R9Z7' ) + "&output=embed&t=h");
			}
			else if(propertyValue=="roadmap" && this.context.coachViewData.currentValue!="roadmap"){
				this.context.coachViewData.currentValue = "roadmap";
				this.context.coachViewData.theFrame.setAttribute("src", "https://maps.google.com/maps?&q=" + encodeURIComponent( 'L3R9Z7' ) + "&output=embed&t=m");
			}
		}
    }
};