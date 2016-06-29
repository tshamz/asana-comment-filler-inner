function replaceCommentContent(commentContainer, text) {

  var commentContainerContents = commentContainer.innerHTML;
  var commentContainerText = commentContainerContents.replace(/(<([^>]+)>)/ig,"");

  if (commentContainerText === "" || commentContainerText === "Write a comment…") {
    text = text.replace(/_(.+)_/g, '<em>$1</em>')
               .replace(/\*(.+)\*/g, '<b>$1</b>')
               .replace(/-(.+)-/g, '<u>$1</u>');

    commentContainer.innerHTML = text;
  }

}

chrome.extension.sendMessage({initialize: true}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);


    // ----------------------------------------------------------
    // This part of the script triggers when page is done loading
    console.log("Hello. This message was sent from scripts/inject.js");
    // ----------------------------------------------------------


  }
	}, 10);
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'fill_comment') {

      var count = 0;
      var interval = setInterval(function() {
        var commentContainer = document.getElementById('property_sheet:details_property_sheet_field:comments');
        if (commentContainer !== null || count === 6) {
          clearInterval(interval);
          replaceCommentContent(commentContainer, request.prefillText);
        } else {
          count++;
        }
      }, 500);

    }
});



