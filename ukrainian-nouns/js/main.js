var searchText,
	matchedWords = [],
	maxNumber = 60,
	searchTextInput = $('#searchText'),
	searchButton = $('#searchButton'),
	pickUpButton = $('#pickUpButton'),
	showRandomWordLink = $('#showRandomWord');

searchTextInput.keypress(function (e) {
	var key = e.which;

	if (key == 13) { // the Enter key code
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



