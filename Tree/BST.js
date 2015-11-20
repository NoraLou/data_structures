
function BTNode(key){
  this.key = key;
  this.left = null;
  this.right = null;
}

function BinaryTree(){
  this.root = null;
}


BinaryTree.prototype.insert = function(key){

  var newNode =  new BTNode(key);

  //recursive helper funct:
  var insertNode = function(node, newNode){
    if(newNode.key < node){
      if(node.left === null){
        node.left = newNode
      }else{
        insertNode(node.left, newNode)
      }
    }else{
      if(newNode > node){
        if(node.right === null){
          node.right = newNode;
        }else{
          insertNode(node.right, newNode)
        }
      }
    }
  }

  if(root == null){
    root = newNode
  }else{
    //call helper function from the root!
    insertNode(root, newNode)
  }
}

BinaryTree.prototype.getMaxValue = function(node){
  if(node){
    while(node && node.right !== null){
      node = node.right
    }
    return node.key
  }
  return null;
}


BinaryTree.prototype.remove  = function(key){


  var removeNode = function(node, key){
    //case-1 node is null not in tree
    if(node === null){
      return null;
    }
    //we have to search...
    if(node < key){
      if(node.left !== null){
        node=node.left
        removeNode(node)
      }
      return node
    }else if(node > key){
      if(node.right !== null){
        node = node.right
        removeNode(node)
      }
      return node
    }else{
      //found it!!
      //case-2 node has no children
      if(node.left === null && node.right === null){
        node = null;
        return node;
      };
      //case-3 node has one child -check side for value
      if(node.right !== null){
        node = node.right;
        return node;
      }else if(node.left !== null){
        node = node.left;
        return node;
      }
    }
    //case -4 node has two children
    //get min value
    var aux = this.getMinValue(node.right)
    //set node value to min value
    node.key = aux.key
    node.right = removeNode(node.right, aux.key)
    return node

  }
}//prototype


//HELPER FUNCTIONS

function printNode(value){
  console.log(value);
}



btTest = new BinaryTree();
btTest.insert(20)
