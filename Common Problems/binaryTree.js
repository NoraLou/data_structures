// Look up at least two ways of maintaining a balanced binary search tree—that's how you get the O(log(n)) operation performance. Start with this Wikipedia article as a jumping off point, AVL trees and red-black trees are good choices to focus on.




//BST

//insertion *************
//1. create a Node structure for the input(key)
//2. check for special case - is that node the root?
//3. helper function to position the Node that we can call recursively throught the hierarchy

function BinarySearchTree(){

  var Node = function(key){
    this.key = key;
    this.left = null;
    this.right = null;
  };

  var root = null;

  //refactor add on to prototype.
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




};

//HELPER FUNCTIONS

function printNode(value){
  console.log(value);
}

var tree = new BinarySearchTree();

tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);

console.log(tree);

tree.inOrderTraverse(printNode);

//MOAR NOTES***********************************************

// IN ORDER TRAVERSE__ : visits all the nodes of BST in ascending order- it visits all nodes from smallest to largest
// callback function usees the VISITOR PATTERN
// the visitor pattern is what we want to happend when we visit each node.

// VISITOR PATTERN __https://en.wikipedia.org/wiki/Visitor_pattern































































