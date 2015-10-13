
// add next larger, next smaller i.e successor/predeccessor



function BinarySearchTree(){

  var Node = function(key){
    this.key = key;
    this.left = null;
    this.right = null;
  };

  var root = null;

  //refactor add on to prototype.r
  this.insert = function(key){
    var newNode = new Node(key);
    if(root === null){
      root = newNode
    }else{
      insertNode(root, newNode);
    }
  };//this.insert

  //3
  var insertNode = function(node, newNode){
    if(newNode.key < node){
      if(node.left === null){
        node.left = newNode;
      }else{
        insertNode(node.left, newNode)
      }
    }else{
      if(newNode.key > node){
        if(node.right === null){
          node.right = newNode;
        }else{
          insertNode(node.right, newNode)
        }
      }
    }
  };// add else if insert a break sos you dont add a value that already exsists

  this.getRoot = function(key){
    return root;
  };

  this.search = function(key){
    return searchNode(root, key);
  };

  var searchNode = function(node, key){

    if(node === null){
      return false;
    }

    if(key < node.key){
      return searchNode(node.left, key);

    }else if(key > node.key){
      return searchNode(node.right, key);

    }else{
      return true;
    }
  };

  this.inOrderTraverse = function(callback){
    inOrderTraverseNode(root, callback);
  };

  var inOrderTraverseNode = function(node, callback){
     if( node !== null){
        inOrderTraverseNode(node.left, callback);
        callback(node.key);
        inOrderTraverseNode(node.right, callback);
     }
  }

  this.preOrderTraverse = function(callback){
    preOrderTraverseNode(root, callback);
  };

  var preOrderTraverseNode = function(node, callback){
    if(node !== null){
      //visit the node prior to its decendants
      callback(node.key);
      preOrderTraverseNode(node.left,callback);
      preOrderTraverseNode(node.right,callback);
    }
  };

  this.postOrderTraverse = function(callback){
    postOrderTraverseNode(root, callback);
  }

  var postOrderTraverseNode = function(node, callback){
    if(node !== null){
      preOrderTraverseNode(node.right, callback);
      preOrderTraverseNode(node.left, callback);
      callback(node.key);
    }
  };

  this.min = function(node){
    getMinValue(root)
  }

  var getMinValue = function(node){
     if(node){
      while(node && node.left !== null){
        node = node.left
      }
      return node.key;
     }
     return null;
  };

  this.max = function(node){
    getMaxValue(root)
  }

  var getMaxValue = function(node){
    if(node){
      while(node && node.right ! == null){
        node = node.right
      }
      return node.key
    }
    return null;
  }

  this.remove = function(key){
    root = removeNode(root, key);
  };

  var removeNode = function(node, key){

    //find node
    //case 1 - node is null- not in tree

    if(node === null){
      return null
    }

    //searching
    if(node > key){
      if(node.right !== null){
        node = node.right
        removeNode(node)
      }
      //why do I need to return node here...
      return node;

    } else if (node < key) {
      if(node.left !== null){
        node = node.left
        removeNode(node)
      }
      return node;

    // found it - time to remove it
    } else {

        //case -1 no children
        if(node.left === null && node.right === null){
          node  = null;
          return node;
        };

        //case -2 one children -check each side for a value-
        if(node.right!== null){
          node = node.right;
          return node;

        }else if(node.left !== null){
          node = node.left;
          return node;
        }

        //case -3 two children
          //find min value in the right => replace node with that value
          //=> set node to ther right to null ==> return null
        var aux = getMinValue(node.right)
        node.key = aux.key
        //returns null; sets node.right to null
        node.right = removeNode(node.right, aux.key)
        return node
    }
};

//HELPER FUNCTIONS

function printNode(value){
  console.log(value);
}



//Notes

//BST

//insertion *************
//1. create a Node structure for the input(key)
//2. check for special case - is that node the root?
//3. helper function to position the Node that we can call recursively throught the hierarchy

//search*************




//delete**************


//For depth-first search:
// callback function usees the VISITOR PATTERN
// the visitor pattern is what we want to happend when we visit each node.

// VISITOR PATTERN __https://en.wikipedia.org/wiki/Visitor_pattern































































