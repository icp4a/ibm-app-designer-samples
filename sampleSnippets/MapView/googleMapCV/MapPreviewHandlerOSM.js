var mixObject = {
    createPreview:function(containingDiv, labelText, callback){
		this.context.coachViewData.theFrame = containingDiv.children[0];
		this.context.coachViewData.theFrame.setAttribute("src", "https://www.openstreetmap.org");
		callback();
    }
};

        