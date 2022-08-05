function isPalindrome(word) {
  // Write your algorithm here
  let newWord = [];
   newWord = word.toLowerCase().split("").reverse().join(""); 
   if (newWord === word) {
    return true; 
   } else {
      return false;
    }
  } 
isPalindrome("madam");

/* Rewrite the problem in your own words: 

Declare a function that will recived 1 string as an argument. 
The function should return a true value if the input is a palindrome word, 
otherwise return a false value.
*/
/* 
  Add your pseudocode here
  Declare a function with one parameter,

  declare new variable and assign the value resulted from the methods aplied to the argument .toLowerCase(),.split(""),.reverse(),.join("")
  
  If new value saved on variable is iqual to the argument 
  return true 
   otherwise  return false. 
  
*/

/*
  Add written explanation of your solution here:
 This problem asked to find palindrome words; therefore I look for simple methods that will return the expected solution.
 First: after the function was declared with one argument, I declared a new varible to save the value resulted from 
 the application of four methods to the argument. The first method applied was .toLowerCase(), to convert the string 
 into lower case, then the .split("") divided the string value and converted it to an array of substring values. 
 The third method .reverse() reversed the order of the elements within the array by taking the last element and 
 moving it into the first index position. Then last method .join("") converted the substrings into a single string. 
 A conditional statement was created to compare the value entered as an argument with the value saved within the array.
 This conditional will return a true value if the argument and the array's value are equal, if these two values are not equal 
 will return a false value.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
