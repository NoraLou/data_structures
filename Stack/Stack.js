//Stack (pop, push, peek, length) FILO


// write function that takes a sentence or word and
// checks if it is a palindrome
// use a stack ADT.

function stackPalindromeCheck(string){

   var sword = string.replace(/\s+/g, '');

   var letters = [];
   var rword = ''

   //build up stack of letters
   for(var i = 0; i < sword.length; i++){
      letters.push(sword[i]);
   }

   //build up reverse word w/ LIFO rule
   while(letters.length > 0){
      rword += letters.pop();
   }

   if(rword === sword){
      return string + " is a palidrome";
   }else{
      return string + " is not a palidrome";
   }
}

// console.log(stackPalindromeCheck("monkeys  love banans"));

// console.log(stackPalindromeCheck("a man a plan a canal panama"));

//Stack Class
function Stack(){
   var items = [];

   this.push = function(el){
      items.push(el);
   },

   this.pop = function(){
      return items.pop();
   },

   this.peek = function(){
      return items[items.length-1];
   },

   this.isEmpty = function(){
      return items.length == 0;
   },

   this.clear = function(){
      items = [];
   },

   this.print = function(){
      console.log(items.toString());
   };
}

//super simple
var stack = [];
stack.push(2);       // stack is now [2]
stack.push(5);
var i = stack.pop();
// console.log(i)


//convert decimal to binary with stack

function getbinaryString(decNum){
   //collect remainders;
   var remStack = [];
   var rem;
   var binaryString = '';

   while(decNum > 0){
      rem = Math.floor( decNum % 2 );
      remStack.push(rem);
      // included Math.floor any long floating points
      // will mess up while loop
      decNum = Math.floor(decNum/2);
   }

   //LIFO
   while(remStack.length !== 0){
      binaryString += remStack.pop().toString();
   }

   return binaryString;

}

// console.log(getbinaryString(10))


function baseConverter(decNum, base){
   var remStack = [];
   var rem;
   var baseString = '';
   var digits = '0123456789ABCDEF'
   while(decNum > 0){
      rem = Math.floor( decNum % base);
      remStack.push(rem);
      decNum = Math.floor(decNum/2);
   }
   while(remStack.length !== 0){
      baseString += digits[remStack.pop()];
   }
   return baseString;
}
console.log(baseConverter(345, 2))
console.log(baseConverter(345, 8))
console.log(baseConverter(345, 16))





























