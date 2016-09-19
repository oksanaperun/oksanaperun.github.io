function pickUpWords(searchText) {
	var wordsCount = nouns.length;

	for (var i = 0; i < wordsCount; i++) {
		var noun = nouns[i];

		if (noun.name != searchText && isWordFit(searchText, noun.name)) {
			matchedWords.push(noun);
		}
	}
}

function isWordFit(inputWord, word) {
	var startInputWordLength = inputWord.length,
		wordLength = word.length;

	if (startInputWordLength >= wordLength) {
		for (var i = 0; i < wordLength; i++) {
			var letter = word.substr(i, 1);

			if (inputWord.indexOf(letter) > -1) {
				inputWord = inputWord.replace(letter, '');
			}
		}

		if (inputWord.length == (startInputWordLength - wordLength)) {
			return true;
		} else return false;
	} else return false;
}