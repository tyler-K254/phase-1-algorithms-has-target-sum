function hasTargetSum(array, target) {
  const seenNumbers = {};
for (const number of array) {
// n steps
const complement = target - number;
if (complement in seenNumbers) return true; seenNumbers [number] = true;
}
return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
 Initialize an empty object called seenNumbers.

  Iterate over each number in the array

  Calculate the complement of the number as target - number.

  Check if the complement is present in the seenNumbers object.
  If yes, return true.

  Add the current number to the seenNumbers object as a key with a
  value of true

  If no matching complement is found in the seenNumbers object during
  the iteration, return false.
*/

/*
This solution uses JavaScript object to keep track of the numbers in the 
input array that have been processed so far. It iterates through each 
element number in the array, calculates the complement of the number as 
target - number, and checks if the complement is already present in the 
seenNumbers object. If a matching complement is found, it means that 
there are two distinct elements in the array whose sum equals the target, 
so the function returns true. If no matching complement is found during 
the iteration, the function returns false, indicating that there are no 
two distinct elements in the array whose sum equals the target.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  if (require.main === module) {
    console.log("Expecting: true");
    console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));
  
    console.log("");
  
    console.log("Expecting: true");
    console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));
  
    console.log("");
  
    console.log("Expecting: false");
    console.log("=>", hasTargetSum([1, 2, 5], 4));
  
    console.log("");
  
    console.log("");
    // Negative numbers?
    console.log("Expecting: true");
    console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));
  
    console.log("");
    // Multiple pairs?
    console.log("Expecting: true");
    console.log("=>", hasTargetSum([1, 2, 3, 4], 5));
  
    console.log("");
    // Single numbers?
    console.log("Expecting: false");
    console.log("=>", hasTargetSum([4], 4));
  }
  }

module.exports = hasTargetSum;
