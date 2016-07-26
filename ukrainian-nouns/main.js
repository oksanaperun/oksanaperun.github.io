var matchedWords = [],
	maxNumber = 50,
	searchForm = $('#searchForm'),
	searchTextElement = $('#searchText'),
	wordsListElement = $('ul');

$('#searchForm').submit(function () {
 	searchWords();
 	return false;
});


function searchWords() {
	var searchText = searchTextElement.val();

	searchText = searchText.toLowerCase();
	searchText = prepareSearchPattern(searchText);
	
	var wordsCount = bNouns.length;
	//console.log('Count ' + wordsCount);

	clearPreviousSearchResults();

	for(var i = 0; i < wordsCount; i++) {
		if(searchText.test(bNouns[i].name)) {
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

	if (/\./.test(lastSeachCharacter) || /[а-я]/.test(lastSeachCharacter)) {
		pattern = pattern + '$';
	}

	pattern = pattern.replace(/\./g, '[а-я]');
	pattern = pattern.replace(/\*/g, '[а-я]*');

	return new RegExp(pattern);
}

function displayCurrentSearchResults(maxNumber) {
	var searchResultsHeader = document.createElement('h3');

	if (maxNumber < matchedWords.length) {
		searchResultsHeader.innerHTML = 'Перші ' + maxNumber + ' знайдених слів:';
	} else if (matchedWords.length == 0) {
		searchResultsHeader.innerHTML = 'Жодного слова не знайдено...';
	} else searchResultsHeader.innerHTML = 'Знайдено ' + matchedWords.length + ' слів:';
	
	searchForm.append(searchResultsHeader); 

	var numberToDisplay = (matchedWords.length < maxNumber) ? matchedWords.length : maxNumber;

	for(var i = 0; i < numberToDisplay; i++) {
		var wordElement = document.createElement('li');

		wordElement.innerHTML = matchedWords[i].name;

		wordsListElement.append(wordElement); 
	}
}

function clearPreviousSearchResults() {
	matchedWords = [];
	wordsListElement.empty();
	$('h3').remove();
}