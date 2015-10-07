
var myStack = []; //LIFO - last in first out

//push - add to stack front
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack);
//pop - pop off stack front

console.log(myStack.pop()) //3
myStack.pop()
console.log(myStack)// [1]


var myQueue = [] //FIFO - first in first out

myQueue.push(1)
myQueue.push(2)
myQueue.push(3)

// here is were the queue comes in - we use shift to get the element
//from the front of our array
myQueue.shift()
console.log(myQueue)// [2,3]
//doesnt quite matter here but what the hell while your curious...
myQueue.unshift(5)// unshift method inserts elements at the front of our array
//console.log(myQueue)//[5,2,3]


// first three function calls enqueue a, b, c

//use a stack to implement queue functionality





var inStack = [];
var outStack = [];


//pseudo code for algo

//if the length of the outstack is zero.
  //than, while the instack has items.
  //pop items off the inStack
  //append them to the outack
  //return items from the top of the outstack


var inStack = [];
var outStack = [];

function enQueue(value){
   inStack.push(value)
}

function deQueue(){
  //if the outstack is empty - first item is at the bottom of the inStack
  if(outStack.length == 0){
    //we need to get to the bottom of inStack
    //pop items off of inStack
    //push then to outStack
    while(inStack.length != 0){
       outStack.push(inStack.pop())
    }
  }
  //when we get to the bottom of inStack

  return outStack.pop()
  //return outStack.pop (formerly the bottome of inStack)
}



var inStack = [];
var outStack = [];


function enQueue(value){
  inStack.push(value)
};


function deQueue(){
  if(outStack.length == 0){
    while(inStack.length != 0){
      outStack.push(inStack.pop())
    }
  }
  return outStack.pop()
};

// PYTHON

// #QUESTION 19
// instack = []
// outstack = []
// def enqueue(value):
//   instack.append(value)

// def dequeue():
//   if len(outstack) == 0:
//     while len(instack) != 0:
//       outstack.append(instack.pop())
//   return outstack.pop()





























