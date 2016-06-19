chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello. This message was sent from scripts/inject.js");
		// ----------------------------------------------------------

    // get comment container
    var commentContainer = document.getElementById('property_sheet:details_property_sheet_field:comments');


    if (commentContainer !== null) {  // this could possibly be taken care of in the url targeting patter in manifest.json?
      var commentContainerHTML = commentContainer.innerHTML;
      var commentContainerText = commentContainerHTML.replace(/(<([^>]+)>)/ig,"");

      // check if container contents are empty or only <br> tags
      if (commentContainerText === "") {
        console.log('empty comment');
      }
    }

    console.log('Comment Container Text: ' + commentContainerText);

	}
	}, 10);
});
