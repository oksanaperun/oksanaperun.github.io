function searchWords(searchText) {
	var isApostropheInSearchText = (searchText.indexOf('\'') > -1);

	searchText = searchText.toLowerCase();
	searchText = prepareSearchPattern(searchText);
	
	var wordsCount = nouns.length;

	for (var i = 0; i < wordsCount; i++) {
		var wordName = isApostropheInSearchText ? nouns[i].name : nouns[i].name.replace("'","");

		if(searchText.test(wordName)) {
			matchedWords.push(nouns[i]);
		}
	}
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

	pattern = pattern.replace(/\./g, '[а-яєії]');
	pattern = pattern.replace(/\*/g, '[а-яєії]*');

	return new RegExp(pattern);
}
