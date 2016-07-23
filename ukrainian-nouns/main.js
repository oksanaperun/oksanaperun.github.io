var matchedWords = [],
	wordsListElement = $('ul');

$('#searchForm').submit(function () {
 	searchWords();
 	return false;
});


function searchWords() {
	var searchPattern = $('#searchPattern').val();

	searchPattern = searchPattern.toLowerCase();
	
	var wordsCount = bNouns.length;
	console.log('Count ' + wordsCount);

	clearPreviousSearchResults();

	for(var i = 0; i < wordsCount; i++) {
		if (bNouns[i].name.indexOf(searchPattern) > -1) {
			matchedWords.push(bNouns[i]);
		}
	}
	console.log('Matched words count ' + matchedWords.length);
	
	displayCurrentSearchResults();
}


function prepareSearchPattern(pattern) {

	//var prepared = new RegExp(^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$);
}

function displayCurrentSearchResults() {
	for(var i = 0; i < matchedWords.length; i++) {
		var wordElement = document.createElement('li');

		wordElement.innerHTML = matchedWords[i].name;

		wordsListElement.append(wordElement); 
	}
}

function clearPreviousSearchResults() {
	matchedWords = [];
	wordsListElement.empty();
}