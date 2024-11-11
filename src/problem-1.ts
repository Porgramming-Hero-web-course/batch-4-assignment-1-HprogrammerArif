{
  //
  //PROBELM-1: Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

  const sumArray = (numArr: number[]): number => {
    let sum = 0;
    for (const num of numArr) {
      sum += num;
    }
    return sum;
    // return numArr.reduce((sum, num) => sum + num, 0);
  };

  // Sample Input:
  const result = sumArray([1, 2, 3, 4, 5]);

  // Sample Output:
  console.log(result);

  //
}
