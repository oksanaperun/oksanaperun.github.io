var searchText,
	matchedWords = [],
	maxNumber = 100,
	searchTextElement = $('#searchText'),
	searchButton = $('#searchButton'),
	pickUpButton = $('#pickUpButton');

searchButton.click(function () {
	searchText = searchTextElement.val();

	clearPreviousSearchResults();
	searchWords(searchText);
	displayCurrentSearchResults(maxNumber);
});

pickUpButton.click(function () {
	searchText = searchTextElement.val();

	clearPreviousSearchResults();
	pickUpWords(searchText);
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


