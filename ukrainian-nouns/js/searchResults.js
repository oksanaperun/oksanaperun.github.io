var maxNumber = 100,
	numberToDisplay,
	searchResults = $('.search-table-results'),
	searchResultsHeaderElement = $('.search-table-results-header'),
	sortLinks = $('.sort-links'),
	sortByAlphabetLink = $('#sortByAlphabetLink'),
	sortByWordLengthLink = $('#sortByWordLengthLink');

function displayCurrentSearchResults(maxNumber) {
	var searchResultsHeader = document.createElement('h3');

	if (maxNumber < matchedWords.length)
		searchResultsHeader.innerHTML = 'Перші ' + maxNumber + ' знайдених слів:';
	else searchResultsHeader.innerHTML = getSearchResultsHeaderText(matchedWords.length);

	searchResultsHeaderElement.append(searchResultsHeader);

	if (matchedWords.length != 0) {
		numberToDisplay = (matchedWords.length < maxNumber) ? matchedWords.length : maxNumber;
			
		displaySortLinks();
		createSearchResultsList(matchedWords, numberToDisplay);
	}
}

function createSearchResultsList(words, numberToDisplay) {
	var searchResultsList = document.createElement('ul');

	searchResults.append(searchResultsList); 

	for(var i = 0; i < numberToDisplay; i++) {
		var wordElement = document.createElement('li');

		wordElement.innerHTML = words[i].name;

		$('ul').append(wordElement); 
	}
}

function getSearchResultsHeaderText(wordsNumber) {
	var searchResultsHeader;

	if (wordsNumber == 0 )
		searchResultsHeader = 'Жодного слова не знайдено...';
	else if (wordsNumber >= 5 || wordsNumber <= 20)
		searchResultsHeader = 'Знайдено ' + wordsNumber + ' слів:';
	else switch(wordsNumber % 10) {
		case 1:
			searchResultsHeader = 'Знайдено ' + wordsNumber + ' слово:';
			break;
		case 2:
		case 3:
		case 4:
			searchResultsHeader = 'Знайдено ' + wordsNumber + ' слова:';
			break;
		default:
			searchResultsHeader = 'Знайдено ' + wordsNumber + ' слів:';
			break;
	}

	return searchResultsHeader;
}

function clearPreviousSearchResults() {
	matchedWords = [];
	hideSortLinks();
	searchResultsHeaderElement.empty();
	searchResults.empty();
}

function getWordsSortedByLength(words) {
	var wordsNumber = words.length,
		sortedWords = [],
		maxWordLength = 20;

	for (var i = 2; i < maxWordLength; i++) {
		for (var j = 0; j < wordsNumber; j++) {
			if (words[j].name.length == i)
				sortedWords.push(words[j]);
		}
	}

	return sortedWords;
}

function displaySortLinks() {
	sortLinks.css("display", "block");
}

function hideSortLinks() {
	sortLinks.css("display", "none");
}

sortByAlphabetLink.click(function () {
	searchResults.empty();
	createSearchResultsList(matchedWords, numberToDisplay);
});

sortByWordLengthLink.click(function () {
	searchResults.empty();

	var sortedMatchedWords = getWordsSortedByLength(matchedWords);

	createSearchResultsList(sortedMatchedWords, numberToDisplay);
});