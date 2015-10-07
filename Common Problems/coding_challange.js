
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

// dont understand why the concatination doesnt work

// function reverseWords(mySentence){
//   var reverseWords = ' ';
//   var letters = 0;
//   for(var i = mySentence.length-1; i >= 0; i--){
//     if(mySentence[i]==' '||i==0){
//       var word = mySentence.substr(i, letters +1);
//       reverseWords+=word
//       letters = 0
//     }else{
//       letters++;
//     }
//   }

//   return reverseWords
// };

// console.log(reverseWords(mySentence));

// function reverseWords(str){
//  var rev = [],
//      wordLen = 0;
//  for(var i = str.length-1; i>=0; i--){
//    if(str[i]==' ' || i==0){
//      rev.push(str.substr(i,wordLen+1));
//      wordLen = 0;
//    }
//    else
//      wordLen++;
//  }
//  return rev.join(' ');
// }

//Given a string find the first non repeating char

// 1. use charAt & indexOf
// runtime ?  O(n2) ?- not sure why
function firstNonRepeatedChar(string){
  for (var i = 0; i < string.length; i++) {
    var c = string.charAt(i);
    if(string.indexOf(c) == 1 && string.indexOf(c, i + 1) == -1){
      return c ;
    }
  }
  return null;
};

// var someString = 'the quick brown fox ate quickly';
// console.log(firstNonRepeatedChar(someString));


14. random between 5 to 7
Question:If you have a function that generate random number between 1 to 5 how could u generate random number 1 to 7 by using that function?

Answer: Very simple. think of some basic arithmetic and you will get it.


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


//13. check palindrome
//Question: How will you verify a word as palindrome?

function isPalindrome(string){
  var testString = string.split('').reverse().join('')
  if(testString == string){
    return true;
  }
  return false;
}

console.log(isPalindrome('madam'));
console.log(isPalindrome('monkey'));




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


//GET ALL PRIME FACTORS
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

















