
function clickUserIn () {
	// finding the element to print the results
	var dictionaryOut = document.getElementById("dictionary-out");
	// clean previous results
	dictionaryOut.innerHTML = "";
	
	// finding the users input
	var userIn = document.getElementById("user-in");
	// get each word on users input
	// this ignors all kinds of char except letters and numbers
	var dictionary = userIn.value.split(/\W+/g);
	
	// running array of words
	dictionary.forEach(function (word, index) {
		// each word will be print beginning from the last to the first letter
		for (i = word.length-1; i >= 0; i--) {
			// printing each letter
			dictionaryOut.innerHTML += word[i];
		}
		dictionaryOut.innerHTML += "<br>";
	});
}
