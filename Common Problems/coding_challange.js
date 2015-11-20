
//1.Given a string, reverse the letter order of the string.
var mySentence = 'I had some oatmeal for breakfast';

function reverseWordOrder(string){
  //string to array
  var myArr = string.split('');
  var arrRev = [];
  for (var i = myArr.length; i>= 0; i--){
    arrRev.push(myArr[i]);
  }
  var sentenceRev = arrRev.join('')
  return sentenceRev;
}

// console.log(reverseWordOrder(mySentence));  ..tsafkaerb rof laemtao emos dah I



//1.Given a string, reverse the word order of the string.
var mySentence = 'I love apples';

//split the string to iterate over it
//iterate backwards
//idenfiy whitespaces & words
//when a word ends add it to the ouput

function reverseWordOrder(string){
  var reversed = [];
  var wordLen = 0;
  var myString = string.split('')

  for(var i = myString.length-1 ;  i >= 0; i--)
    if(myString[i] ==' ' || i == 0 ){
      reversed.push(string.substr(i, wordLen + 1));
      wordLen = 0;
    }else{
      wordLen++;
    }

  return reversed.join(' ');
};


// console.log(reverseWordOrder("I love apples"));


//Given a string find the first non repeating char

// use charAt & indexOf
// runtime ?  O(n2) ?- not sure why
function firstNonRepeatedChar(string){
  for (var i = 0; i < string.length; i++) {
    var c = string.charAt(i);
    if(string.indexOf(c) == i && string.indexOf(c, i + 1) == -1){
      return c ;
    }
  }
  return null;
};

var someString = 'the quick brown fox ate quickly';
console.log(firstNonRepeatedChar(someString));


// 14. random between 5 to 7
// Question:If you have a function that generate random number between 1 to 5 how could u generate random number 1 to 7 by using that function?

// Answer: Very simple. think of some basic arithmetic and you will get it.


//12. Remove all duplicate char
//runtime? 0(n)
function removeDupChar(string){
  myArr = string.split('')
  var dups = {};
  for (var i = myArr.length-1; i >=0; i--) {
    var c = string[i];
    if(!dups[c]){
      dups[c] = 1
    }else{
      myArr.splice(i,1)
    }
  };
  return myArr;
}

//console.log(removeDupChar('aabbcc'));


//12.5 Does array A have duplicate entries?

// var aArr = [1,2,3,4,4,5,5,6,7];

// for(var i = 0; i < aArr.length; i++ ){
//   for(var j = i+ 1 ; j < aArr.length; j++){
//     if(aArr[i] == aArr[j]){
//       return true
//     }
//   }
//  return false
// }


//13. check palindrome
//Question: How will you verify a word as palindrome?

function isPalindrome(string){
  var testString = string.split('').reverse().join('')
  if(testString == string){
    return true;
  }
  return false;
}

// console.log(isPalindrome('madam'));
// console.log(isPalindrome('monkey'));




//WRITE A FUNCTION TO CHECK A PRIME NUMBER

function isPrime(n){
  var divisor = 2
   while(divisor < n){
     if(n % divisor == 0){
      return true
     }else{
      divisor++
     }
   }
  return false
}


//get all prime factors of a given number
// prime factor is a number that can only be divided by itself or 1.
function getPrimeFactors(n){
  var primeFactors = [];
  var divisor = 2

  while(n > 2){
    if(n % divisor == 0){
      factors.push(divisor);
      n = n/divisor;
    }else{
      divisor++
    }
  }
  return primeFactors;
}


//RECURSIVELY REVERSE A STRING
function recursiveString(string){
  if(string.length == 1){
    return string
  }else{
    return recursiveString(string.substr(1)) + charAt(0);
  }
}


//REVERSE A STRING WITH BUILT IN METHODS
function reverseWord(sentence){
  return sentence.split('').reverse().join('')
}



// How would you find the greatest common divisor of two numbers?
// greatest common divisor = largest number both can be divided by with no remainder
var num1 = 12;
var num2 = 24;

function greatestCommonDivisor(n1, n2){
  var divisor = 2,
      greatestDivisor = 1;

  //if either number is less than 2 - only possible solution is 1
  if(n1 < 2 || n2 < 2){
    return 1
  }

  //while divisor is less than number
  //find a number that both can be divided by with no dividend

  while(n1 >= divisor && n2 >= divisor ){
    if(n1 % divisor == 0 && n2 % divisor == 0){
      greatestDivisor = divisor
    }
    divisor++
  }
  return greatestDivisor;
};


//fancy algorithm
function greatestCommonDivisor(a, b){
  if(b == 0){
    return a;
  }else{
    return greatestCommonDivisor(b, a%b)
  }
}




//remove duplicates from an array
var myArray = ['s', 'a', 'a', 'c', 'c', 'd', 'e', 'd']

function removeDups(arr){
  var dups = {};

  for(var i = arr.length-1; i >=0 ; i--){
    var item = arr[i];
    if(!dups[item]){
      dups[item]=1
    }else{
      arr.splice(i,1)
    }
  }
  return arr;
};

//console.log(removeDups(myArray));




//Merge Two sorted arrays

//combine in a new array
//keep a pointer on each array
//make descisions

function mergeSortedArray(a,b){

  var merged = [],
      aElm = a[0],
      bElm = b[0],
      i = 1,
      j = 1;
  if(a.length == 0){
    return b
  }
  if(b.length == 0){
    return a
  }
  while( aElm || bElm ){
    if( (aElm && !bElm) || aElm < bElm){
      merged.push(aElm);
      aElm = a[i++];
    }else{
      merged.push(bElm)
      bElm = b[j++];
    }
  }
  return merged;
}

//console.log(mergeSortedArray([2,5,6,9], [1,2,3,29]))



//swap number without temp

function swapNumb(a,b){
  b = b-a;
  a = a+b;
  b = a-b;
  console.log('after swap: ', 'a: ', a, 'b: ', b);
};

// swapNumb(4,6)


//make reverse function as string extension?

//I need to add this function to the String.prototype and instead of using str as parameter, i need to use this

String.prototype.reverse = function(){
  if(!this || this.length <2){
    return this
  }
  return this.split('').reverse().join('');
}


//a quick built in method to reverse the order of words

var myString = 'I like cupcakes'

// function reverseWords(str){
//   revArr = str.split(' ').reverse();
//   return String(revArr).replace(/,/g, ' ');
// }

function reverseWords(str){
  return str.split(' ').reverse().join(' ')
}

// console.log(reverseWords(myString));


// If you have a string like "I am the good boy". How can you generate "I ma eht doog yob"? Please note that the words are in place but reverse.

//Do it with built in methods:

var myString = "Winter is coming"

//Answer
//1. You have to reverse the word order in the sentence
//2. Then you need to split per character and reverse the character order.
//(reversing character order gives you a mirror image..)

function reverseInPlace(str){
  return str.split(' ').reverse().join(' ').split('').reverse().join('');
}

//console.log(reverseInPlace(myString));

//REMOVE DUPLICATE CHAR FROM A STRING

//loop througthig string. make a dictionary. remove any words that appear more thann once.

function removeDupChars(str){
  var charCount = {};
  var noCharDups ='';

  for(var i = 0; i < str.length; i++){
    var item = str[i];
    if(!charCount[item]){
      charCount[item]=1;
    }else{
      charCount[item]++;
    }
  }

  for(key in charCount){
    if(charCount.hasOwnProperty(key)){
      if(charCount[key] == 1){
        noCharDups += key;
      }
    }
  }
  return noCharDups;
};
//console.log(removeDupChars('Learn more javascript dude'));

//Sum of two
// Question: From a unsorted array, check whether there are any two numbers that will sum up to a given number?
//you have to compare every number with every other number

function sumFinder(arr, n){
  for (var i = 0; i < arr.length ; i++){
    for(var j = i+1; j < arr.length; j++){
      if(arr[i] + arr[j] == n)
        return true
    }
  }
  return false;
}

// console.log(sumFinder([6,4,3,2,1,7], 9))
// console.log(sumFinder([6,4,3,2,1,7], 2))


//How can you make above question better?
//Make an object that keeps track of the values you have visited
//As you iterate, calculate the "substract", that you would need to reach the sum number, for the present value you are one
//do a dictionary check at O(1)
//if the value is there return true.

//creating a dictionary allows you to only iterate once
//now at 0(n) where n is the length of the input.

function fasterSumFinder(arr, n){
  var visited = {};
  var diff ;
  for(var i = 0; i < arr.length; i++){
    var testValue = arr[i]
    if(!visited[testValue]){
      visited[testValue] = testValue
    }
    var diff = n - testValue
    if(diff!== testValue  && visited[diff]){
      return [diff, testValue]
    }
  }
  return null;
}

// console.log(sumFinder([6,4,3,2,1,7], 9))
// console.log(sumFinder([6,4,3,2,1,7], 2))






//Given an array of elements find the largest sum of any two elements?

var myArray = [1,2,9,4,5,6,7,8]

//iterate through array.
//find the largest element - store it.
//iterate againg skip the largest - find the second largest.
//return largest and second largest combined.

// O(n) - time of function is linear to amount of input

function largestSum(arr){
  var largest = 0;
  var secondLargest = 0;
  for(var i = 0; i < arr.length; i++){
    var num = arr[i];
    if(num >largest){
      largest = num
    }
  }
  for(var i = 0; i < arr.length; i++){
    var num2 = arr[i];
    if(num2 > secondLargest  && num2 !== largest){
      secondLargest = num2;
    }
  }
  return largest + secondLargest
}
// console.log(largestSum(myArray))




//Q:
//Only one number is missing in the array.
// The array is unsorted.
// Find the missing number.
//You have an array of numbers 1 to 100 in an array.

//A:
//sum of a linear series of n numbers = n*(n+1)/2

function missingNumber(arr){
  var n = arr.length + 1 ,
  sum = 0,
  expectedSum = n*(n+1)/2;

  for(var i = 0 ; i < arr.length; i++){
    sum += arr[i];
  }
  return expectedSum - sum;
}

// console.log(missingNumber([5,2,6,1,3]))







//Q.
//Count the total number of zeros from 1 up to N?

//A.
 // if you have a number 1 to 50 the value is 5. just 50 divided by 10. However, if the value is 100. the value is 11. you will get by 100/10 = 10 and 10/10. Thats how you will get in the more zeros in one number like (100, 200, 1000)

function countZero(n){
  var count = 0;
  while(n>0){
    count += Math.floor(n/10);
    n = n/10;
  }
  return count;
}
// console.log(countZero(2014))





//Q. Within a string how can you check for a certain substring?

//A. 1 just use indeOf method

function subStringFinder(str, subStr){
    return str.indexOf(subStr)
}

console.log(subStringFinder('abbcdabbbbbck', 'bck'))


//Q. How would you find all permutations of a string?


















