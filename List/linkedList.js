//Single linked list


function Linkedlist(){

  this.head = {};

}


Linkedlist.prototype = {

    add : function(val){

      //create node
      var node = {
        key : val
        next : null
      }

      // if we dont' have a head
      if(!this.head){
        this.head = node

      }else{

        this.head = current;

        while(current.next){
          current = current.next
        }
        node = current;
      }
      return node;
    },

    delete : function (val){

      // set up pointers
      var current = this.head;
      var previous = current;

      //1 value is at head
      if(current.value == val){
        this.head = current.next;

      //node is in the middle or end
      }else{
        //traverse
        while(current.next){
          if(current.value == val){
            //jump over previous
            previous.next = current.next
            break;
          }else{
            previous = current;
            current = current.next;
          }
        }
      }
    }//delete




}



















