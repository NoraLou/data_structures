

function LinkedList(){
  this.head = null
}



LinkedList.prototype.add = function(value){

  var node = {
    head : value,
    next : null,
    previous : null
  }

  //add it to the head
  if(!this.head){
    this.head = node;
    this.tail = node;

  }else{
    //put it on the end
    this.tail.next = node;
    node.previous = this.tail;
    this.tail = node;
  }
}
