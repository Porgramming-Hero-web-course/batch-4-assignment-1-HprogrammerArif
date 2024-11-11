{
  //
  //Problem 3: Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

  const countWordOccurrences = (sentence: string, word: string): number => {
    const lowerCaseSentence = sentence.toLowerCase();
    const lowerCaseWord = word.toLowerCase();
    const wordsArray = lowerCaseSentence.split(" ");
    //console.log(wordsArray);

    const occurrences = wordsArray.filter((word) => word === lowerCaseWord);
    return occurrences.length;

    // return wordsArray.reduce((count, currentWord) => {
    //   if (currentWord === lowerCaseWord) {
    //     return count + 1;
    //   }
    //   return count;
    // }, 0);

  };

  // Sample Input:
  const totalOccurance = countWordOccurrences(
    "I love typescript",
    "typescript"
  );

  // Sample Output:
  console.log(totalOccurance);
  //1;

  //
}
