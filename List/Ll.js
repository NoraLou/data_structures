

function LinkedList(){
   this.length = 1;
   this.head = null;
}

function Node(data){
  this.data = data;
  this.next = null;
}

//add node to the end.
LinkedList.prototype.append = function(element){
      var node = new Node(element),
          current;
      if(this.head === null){
        this.head = node
      }else{
        current = this.head;
        while(current.next){
          current = current.next
        }
        current.next = node
      }
      this.length++
   }

//remove by index ie. position
LinkedList.prototype.removeAt = function(position){
  //check out of bounds
  if(position > -1 && position < this.length){

    var current = this.head,
        previous,
        index = 0;

    //if positin is first
    if(position === 0){
      this.head = current.next
      this.length--;
    }else{
      while(index++ < position){
        previous = current
        current = current.next
      }
      //skip over current to remove positoin value
      previous.next = current.next;
      this.length--;
      return current.data
    }
  }else{
    return null // index is out of bounds
  }
}

//insert element at index pos
// LinkedList.prototype.insertAt = function(position, element){

//   if(position >= 0 && position <= this.length){

//     var current = this.head,
//         previous,
//         next,
//         index = 0;

//     newNode = new Node(element);
//     //position 0

//     if(position === 0){

//       newNode.next = current;
//       this.head = newNode;
//       this.index++;

//     }else{

//       while(index++ < position){
//         previous = current;
//         console.log( "index, current " ,index, current)
//         current = current.next;
//       }
//       newNode.next = current;
//       previous.next = node;
//       this.index++;
//     }
//     return true;
//   }else{
//     return false;
//   }
// }


LinkedList.prototype.indexOf = function(element){

  var current = this.head,
    index = 0;

  while(current){
    if(element === current.data){
      return index;
    }
    index++;
    current = current.next
  }
  return -1;
}


LinkedList.prototype.toString = function(){
  var current = this.head,
      string = '';
  while(current){
    string += current.data + (current.next ? '\n' : '')
    current = current.next
  }
  return string;
}


LinkedList.prototype.print = function(){
  console.log(this.toString());
}



 testLL = new LinkedList();
 testLL.append(1)
 testLL.append(2)
 testLL.append(3)
 testLL.append(4)
 testLL.append(5)
 testLL.append(6)
 testLL.append(7)
 testLL.append(8)
 testLL.append(9)
 testLL.append(10)
 testLL.append(11)
 testLL.append(12)
 testLL.append(13)

 //testLL.print()


// Write a function contains_cycle() that takes the first node in a singly-linked list and returns a boolean indicating whether the list contains a cycle.

function hasCycle(sll){
  var slowPointer = sll.head,
      fastPointer = sll.head;

  while((slowPointer && fastPointer)  && fastPointer.next){
    slowPointer = slowPointer.next
    fastPointer = fastPointer.next.next

    if(slowPointer == fastPointer){
      return true;
    }
  }
  return false;
}

//TEST
// console.log(hasCycle(testLL));
// testLL.head.next.next.next.next.next = testLL.head.next.next
// console.log(hasCycle(testLL));

//COMPLEXITY
// Since fast_runner can't skip over slow_runner, at most slow_runner will run around the cycle once and fast_runner will run around twice. This gives us a runtime of O(n)O(n).

// For space, we store two variables no matter how long the linked list is, which gives us a space cost of O(1)O(1).








//Q :Write a function for reversing a linked list ↴ . Do it in-place ↴ .

// Your function will have one input: the head of the list.

// Your function should return the new head of the list.

LinkedList.prototype.reverseLlInPlace = function (){

  var current = this.head;
  previous = null;
  next = null;


  while(current){
    //copy pointer to the next element!!!
    next = current.next;
    //before we overwrite current.next
    current.next = previous;

    //reverse the next pointer
    current.next = previous

    //move forward in the list
    previous = current;
    //use our temp to retain next
    current = next;
  }
  //previous is the old tail = the new head
  return previous
}

//console.log(testLL.reverseLlInPlace)


// Q You have a linked list  and want to find the kkth to last node.

// LinkedList.prototype.kthToLast = function(n){

//   current = this.head;
//   counter = 0;
//   while(current){
//     counter ++
//     current = current.next;
//   }

//   console.log("counter " , counter)
//   var lengthToGo = counter - n
//   console.log("lengthToGo ", lengthToGo)

//   current = this.head;
//   for (var i = 0 ; i <= lengthToGo; i++ ){
//     current = current.next
//     console.log("*****************")
//     console.log("current :", current)
//   }

//   return current.data;
// }


// testLL.print();


// console.log("Answer ",testLL.kthToLast(2))







