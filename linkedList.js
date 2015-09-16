// ADT List

// * ordered sequence of data

//see http://www.cs.cornell.edu/courses/cs2110/2011fa/Lectures/L06-Lists/L06-Lists.pdf

//PROPS
//length
// head
// tail
// current
// next
// null value at end

//FX
//add
//delete

//constructor function
//begin with the property head which is null
function LinkedList(){
  //head private
  this._length = 0;
  this._head = null;
}

LinkedList.prototype = {
  add: function(data){
    var current;

    var node = {
      data:data,
      next:null
    };

    if(!this._head){
      this._head = node;
    }else{
       //start to shift to next node
       //set up current and next value
       current = this._head;
       //while next is !null- where there is value
       while(current.next){
          //shift over one object
          current = current.next;
          //break out when you reach the end
       }
       //asign newly declared node to
       //the null object at tail
       current.next = node;
    }
  },
  delete : function(){

  }



}//linkedlist.proto



var test = new LinkedList();
console.log(test); //{head:null}


test.add('a');
test.add('b');
test.add('c');


// console.log(test)//{ head: { value: 'a', next: { value: 'b', next: [Object] } } }

// console.log(test._head)//{ value: 'a', next: { value: 'b', next: { value: 'c', next: null } } }

// console.log(test._head.next)//{ value: 'b', next: { value: 'c', next: null } }

// console.log(test._head.next.next)//{ value: 'c', next: null }



console.log(LinkedList.prototype.constructor);






















