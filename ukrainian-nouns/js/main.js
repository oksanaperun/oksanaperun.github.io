var searchText,
	matchedWords = [],
	maxNumber = 100,
	searchTextInput = $('#searchText'),
	searchButton = $('#searchButton'),
	pickUpButton = $('#pickUpButton');

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





