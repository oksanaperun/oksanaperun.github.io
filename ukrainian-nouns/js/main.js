var searchText,
	matchedWords = [],	
	searchTextElement = $('#searchText'),
	searchButton = $('#searchButton'),
	pickUpButton = $('#pickUpButton'),
	showSearchExamplesButton = $('#showSearchExamples'),
	hideSearchExamplesButton = $('#hideSearchExamples'),
	searchExamplesItems = $('.search-table-examples-items');

searchButton.click(function () {
	searchText = searchTextElement.val();

	clearPreviousSearchResults();
	searchWords(searchText);
	//console.log('Matched words count ' + matchedWords.length);
	displayCurrentSearchResults(maxNumber);
});

pickUpButton.click(function () {
	searchText = searchTextElement.val();

	clearPreviousSearchResults();
	pickUpWords(searchText);
	//console.log('Matched words count ' + matchedWords.length);
	displayCurrentSearchResults(maxNumber);
});

showSearchExamplesButton.click(function () {
	showSearchExamples();
});

hideSearchExamplesButton.click(function () {
	hideSearchExamples();
});

function showSearchExamples() {
	showSearchExamplesButton.css("display", "none");
	hideSearchExamplesButton.css("display", "block");
	searchExamplesItems.css("display", "block");
}

function hideSearchExamples() {
	showSearchExamplesButton.css("display", "block");
	hideSearchExamplesButton.css("display", "none");
	searchExamplesItems.css("display", "none");
}

