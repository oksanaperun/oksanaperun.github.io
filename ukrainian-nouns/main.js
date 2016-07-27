var matchedWords = [],
	maxNumber = 100,
	searchForm = $('#searchForm'),
	searchTextElement = $('#searchText'),
	showSearchExamplesButton = $('#showSearchExamples'),
	hideSearchExamplesButton = $('#hideSearchExamples'),
	searchExamplesItems = $('.search-table-examples-items'),
	searchResults = $('.search-table-results');

searchForm.submit(function () {
 	searchWords();
 	return false;
});


function searchWords() {
	var searchText = searchTextElement.val(),
		isApostropheInSearchText = (searchText.indexOf('\'') > -1);

	searchText = searchText.toLowerCase();
	searchText = prepareSearchPattern(searchText);
	
	var wordsCount = bNouns.length;
	//console.log('Count ' + wordsCount);

	clearPreviousSearchResults();

	for(var i = 0; i < wordsCount; i++) {
		var wordName = isApostropheInSearchText ? bNouns[i].name : bNouns[i].name.replace('\'','');

		if(searchText.test(wordName)) {
			matchedWords.push(bNouns[i]);
		}
	}
	//console.log('Matched words count ' + matchedWords.length);
	
	displayCurrentSearchResults(maxNumber);
}


function prepareSearchPattern(searchText) {
	var pattern = searchText,
		searchTextLength = searchText.length,
		fisrtSearchCharacter = searchText.charAt(0),
		lastSeachCharacter = searchText.charAt(searchTextLength - 1);

	if (!(/\*/.test(fisrtSearchCharacter))) {
	 pattern = '^' + pattern;
	}

	if (!(/\*/.test(lastSeachCharacter))) {
		pattern = pattern + '$';
	}

	pattern = pattern.replace(/\./g, '[а-я]');
	pattern = pattern.replace(/\*/g, '[а-я]*');

	return new RegExp(pattern);
}

function displayCurrentSearchResults(maxNumber) {
	var searchResultsHeader = document.createElement('h3');

	if (maxNumber < matchedWords.length)
		searchResultsHeader.innerHTML = 'Перші ' + maxNumber + ' знайдених слів:';
	else searchResultsHeader.innerHTML = getSearchResultsHeaderText(matchedWords.length);
	
	searchResults.append(searchResultsHeader); 

	if (matchedWords.length != 0) {
		var numberToDisplay = (matchedWords.length < maxNumber) ? matchedWords.length : maxNumber,
			searchResultsList = document.createElement('ul');

		searchResults.append(searchResultsList); 

		for(var i = 0; i < numberToDisplay; i++) {
			var wordElement = document.createElement('li');

			wordElement.innerHTML = matchedWords[i].name;

			$('ul').append(wordElement); 
		}
	}
}

function getSearchResultsHeaderText(wordsNumber) {
	var searchResultsHeader;

	if (wordsNumber == 0 )
		searchResultsHeader = 'Жодного слова не знайдено...';
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
	searchResults.empty();
}

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