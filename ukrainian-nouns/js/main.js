var searchText,
	matchedWords = [],
	maxNumber = 60,
	searchTextInput = $('#searchText'),
	searchButton = $('#searchButton'),
	pickUpButton = $('#pickUpButton'),
	showRandomWordLink = $('#showRandomWord');

$('body').keypress(function (e) {
  	if (e.shiftKey && e.keyCode == 13) { // the Enter key code
		pickUpButton.click();
    	return false;  
  	}

  	if (e.keyCode == 13) {
    	searchButton.click();
    	return false;  
  	}
});

searchButton.click(function () {
	searchText = searchTextInput.val();

	clearPreviousSearchResults();
	searchWords(searchText);
	displayCurrentSearchResults(maxNumber);
});

pickUpButton.click(function () {
	searchText = searchTextInput.val();

	clearPreviousSearchResults();
	pickUpWords(searchText);
	displayCurrentSearchResults(maxNumber);
});

showRandomWordLink.click(function () {
	var randomIndex = Math.floor(Math.random() * (nouns.length + 1));
	
	clearPreviousSearchResults();
	searchTextInput.val(nouns[randomIndex].name);
});



