{
//
//Problem 2: Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.


const removeDuplicates = (elements: number[]):number[] => {
  return [...new Set(elements)]
}


// Sample Input:
const unique  = removeDuplicates([1, 2, 2, 3, 4, 4, 5])

// Sample Output:
console.log(unique);
//[1, 2, 3, 4, 5]

  //
}


