function reverseString(str) {
  let splitStr = str.split("");
  const reversedArr = [];
  let joinedArr = "";
  splitStr.forEach((letter) => {
    console.log(reversedArr.unshift([letter]));

    joinedArr = reversedArr.join("");

    return joinedArr;
  });

  return joinedArr;
}

//tests:
// console.log("hello")
// console.log("Expected => olleh")
console.log(reverseString("hello"));

if (require.main === module) {
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

//Itarate through an array--need to reverse the ordr of the elemnts ['h','i']
// make a new array that recives the string in a reversed order
//can use the i to push into the new array length - i

// Please add your pseudocode to this file
// And a written explanation of your solution
