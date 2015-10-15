//Single linked list


function LinkedList(){

  this.head = null;
  this.length = 0;

}


LinkedList.prototype = {

    add : function(val){

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

    delete : function (val){

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
            return null;

          }else{
            previous = current;
            current = current.next;
          }
        }
      }

      if(current.key == val){
        previous.next = null;
      }
    }//delete
}//prototye


var test = new LinkedList();

test.add(5);
test.add(6);
test.add(8);


console.log(test);
console.log("*******************************************");
// console.log(test.head);
// console.log('*******************************************');
// console.log(test.head.next);
// console.log("********************************************");
// console.log(test.head.next.next);

// test.delete(5);
// console.log(test);
// console.log("*******************************************");
test.delete(6);
console.log(test);
console.log("********************************************");
test.delete(8);
console.log(test);
console.log("********************************************");
test.delete(5);
console.log("********************************************");
console.log(test);



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











