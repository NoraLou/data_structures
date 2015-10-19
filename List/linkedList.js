//Single linked list


function LinkedList(){

  this.head = null;
  this.length = 0;

}


LinkedList.prototype = {

    constructor : LinkedList,

    append : function(val){

      //create node
      var node = {
        key : val,
        next : null
      }

      // if we dont' have a head
      if(this.head === null){
        this.head = node;

      }else{

        var current = this.head;

        while(current.next){
          current = current.next
        }
        current.next = node;
      }
      this.length++
    },

    remove : function (val){

      // set up pointers
      var current = this.head;
      var previous = current;

      //1 value is at head
      if(current.key == val){
        this.head = current.next;

      //node is in the middle or end
      }else{
        //traverse
        while(current.next){

          if(current.key == val){
            //jump over previous
            previous.next = current.next
            this.length--;
            break;

          }else{
            previous = current;
            current = current.next;
          }
        }
      }

      if(current.key == val){
        previous.next = null;
        this.length--;
      }
    }//delete
}//prototye


// var test = new LinkedList();
// test.add(5);
// test.add(6);
// test.add(8);
// console.log(test)
// test.delete(8)
// test.delete(6)
// test.delete(5)
// console.log(test)




// function reverseSll(sll){
// //case 1 - sll length is 0 or 1
// if(!sll.head || !sll.head.next){
//   return sll;
// }

// var nodes = [],
//     current = sll.head;

// while(current){
//   nodes.push(current)
//   current = current.next;
// }

// var reversedLL = new LinkedList();

// //last item becomes first
// reversedLL.head = nodes.pop();
// // set head to current
// var current = reversedLL.head
// //get next node from arr
// var node = nodes.pop();
// //create a loop to go through list & 1. reset pointers 2. add values to reversed list

//   while(node){
//     current.next = node
//     node.next = null

//     current = current.next
//     node = nodes.pop();
//   }

//   return reveresedLL;

// };




//reverse a singly linked list recursively

//read this http://eloquentjavascript.net/code/#4.3 and figure out


// kth node from End
// Question: How could you get the Kth node from the end (no loop)

// function kthFromEnd(sll, k){

//   var node = sll.head,
//       i = 1,
//       kthNode;

//   if(k <= 0){return }

// }


//Double Linked List

function DoubleLinkedList(){
  this.head = null
  this.tail = null
  this.length = 0

}


DoubleLinkedList.prototype = {

  constructor : DoubleLinkedList,

  append : function(val){

    var node = {
      key : val,
      next : null,
      prev : null
    },
      current,
      previous

    //no items yet
    if(this.head === null){
      this.head = node;
      this.tail = node;
    }else{
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
  },//append

  remove: function(val){

    var current = this.head,
      previous

    //case 1 - value is at head
    if(current.key == val){
      this.head = current.next;
      if(this.head){
        this.head.previous = null
        return this
      }
    }


    //case 2 node in the middle
    previous = current

    while(current.next){
      if(current.key == val){
        previous.next = current.next;
        //WHY?????????????????????????????????
        current.next.previous = previous
        break;
      }else{
        previous = current
        current = current.next
      }
    }

    //case 3 -its the last node
    if(current.key = val){
      previous.next = null;
    }


  }//remove
}

var test = new DoubleLinkedList();
// console.log(test)
// console.log("****************************")
test.append(6)
test.append('cat')
test.append('88')
console.log(test)










































