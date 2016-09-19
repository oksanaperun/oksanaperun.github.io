var matchedWordsNumber,
	preparedMatchedWords = [],
	displayedMatchedWordsNumber,
	searchResults = $('.search-results'),
	searchResultsHeaderElement = $('.search-results-header'),
	sortLinks = $('.sort-links'),
	sortByAlphabetLink = $('#sortByAlphabetLink'),
	sortByWordLengthLink = $('#sortByWordLengthLink'),
	showMoreButton = $('#showMoreButton');

function displayCurrentSearchResults(maxNumber) {
	matchedWordsNumber = matchedWords.length;

	var searchResultsHeader = document.createElement('h3');

	searchResultsHeader.innerHTML = getSearchResultsHeaderText();
	
	searchResultsHeaderElement.append(searchResultsHeader);

	if (matchedWordsNumber != 0) {
		if (matchedWordsNumber != 1)	
			displaySortLinks();

		preparedMatchedWords = matchedWords;

		displayFirstMatchedWords();
	}		
}

function displayFirstMatchedWords() {	
	if (matchedWordsNumber < maxNumber) {
			createSearchResultsList(preparedMatchedWords, 0, matchedWordsNumber);
	} else {
		createSearchResultsList(preparedMatchedWords, 0, maxNumber);
		displayShowMoreButton();
		displayedMatchedWordsNumber = maxNumber;
	}
}

function createSearchResultsList(words, startIndex, numberToDisplay) {
	var searchResultsList = document.createElement('ul');

	searchResults.append(searchResultsList); 

	for(var i = 0; i < numberToDisplay; i++) {
		var wordElement = document.createElement('li');

		if (words[startIndex + i].description) {
			var info = ' <a tabindex="0" role="button" data-toggle="popover" data-trigger="focus" ' +
					'data-placement="top" data-content="' + words[startIndex + i].description + 
					'"><span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span></a>';
			
			wordElement.innerHTML = words[startIndex + i].name + info;
		} else wordElement.innerHTML = words[startIndex + i].name;

		$('ul').last().append(wordElement);
	}

	$(function () {
  		$('[data-toggle="popover"]').popover();
});
}

function getSearchResultsHeaderText() {
	var searchResultsHeader;

	if (matchedWordsNumber == 0)
		searchResultsHeader = 'Жодного слова не знайдено... Спробуйте інший вираз';
	else if (matchedWordsNumber >= 5 && matchedWordsNumber <= 20)
		searchResultsHeader = 'Знайдено ' + matchedWordsNumber + ' слів:';
	else switch(matchedWordsNumber % 10) {
		case 1:
			searchResultsHeader = 'Знайдено ' + matchedWordsNumber + ' слово:';
			break;
		case 2:
		case 3:
		case 4:
			searchResultsHeader = 'Знайдено ' + matchedWordsNumber + ' слова:';
			break;
		default:
			searchResultsHeader = 'Знайдено ' + matchedWordsNumber + ' слів:';
			break;
		}

	return searchResultsHeader;
}

function clearPreviousSearchResults() {
	matchedWords = [];
	hideSortLinks();
	hideShowMoreButton();
	searchResultsHeaderElement.empty();
	searchResults.empty();
}

function displaySortLinks() {
	sortLinks.css("display", "block");
}

function hideSortLinks() {
	sortLinks.css("display", "none");
}

sortByAlphabetLink.click(function () {
	searchResults.empty();

	preparedMatchedWords = matchedWords;

	displayFirstMatchedWords();
});

sortByWordLengthLink.click(function () {
	searchResults.empty();

	preparedMatchedWords = getWordsSortedByLength(matchedWords);

	displayFirstMatchedWords();
});

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

function displayShowMoreButton() {
	showMoreButton.css("display", "block");
}

function hideShowMoreButton() {
	showMoreButton.css("display", "none");
}

function showMoreWords() {
	var notDisplayedMatchedWordsNumber = matchedWordsNumber - displayedMatchedWordsNumber;

	if (notDisplayedMatchedWordsNumber < maxNumber) {
		createSearchResultsList(preparedMatchedWords, displayedMatchedWordsNumber, notDisplayedMatchedWordsNumber);
		hideShowMoreButton();
	} else {
		displayedMatchedWordsNumber = displayedMatchedWordsNumber + maxNumber;
		createSearchResultsList(preparedMatchedWords, displayedMatchedWordsNumber, maxNumber);
	}	
}

showMoreButton.click(function () {
	showMoreWords();
});
