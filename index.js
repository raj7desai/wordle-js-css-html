window.onload = () => {
  let Answer = "ULTRA"
  let word1 = "PAUSE"

  console.log(Answer.indexOf("T"))

  // With indexOf - if the response is -1, the letter is not in the word. if the response is a number >= 0, that is the position of the letter 
  // Go over every letter and compare position of letter with answer 

  let checkWord = (word) => {
    let wordCheck = {}
    for (let i = 0; i < word.length; i++) {
      let letter = word[i]
      // For each letter we have 3 outcomes 
      // -1 = letter does not exist
      // >=0 number - letter exists
      // if letter exists then check if position of letter in word1 == position in word 2
      // output of this function will reurn "Does not exist", "Exists but in wrong place", "exists in right place"

      if (Answer.indexOf(letter) == -1) {

        wordCheck[String(word[i])] = "B"
      } else if (Answer.indexOf(letter) == word.indexOf(letter)) {
        wordCheck[String(word[i])] = "G"
      } else {
        wordCheck[String(word[i])] = "Y"
      }
    }

 return wordCheck

  }

  // Get the letters from row
  //convert the letters into a word
  // check each letter with letter of answer
  // returns a function which says which letters are supposed to be yellow, black or red





console.log(checkWord("ULTRA"))
}