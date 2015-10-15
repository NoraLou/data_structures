//LEVEL ORDER TRAVERSE

//build a tree class with a string value and array of children.
//write a function that prints out the values in your tree in level-order

function BinarySearchTree(){

  function Node (key){
    this.key = key;
    this.left = null;
    this.right = null;
  }

  var root = null;

  this.insert = function(key){
    //make a newNode
    var newNode = new Node(key)

    //special case = do we have a root?
    if(root === null){
       root = newNode
    }else{
    //figure out where the node goes
     insertNode(root, newNode)
    }
  },

  var insertNode = function(node, newNode){
    if(newNode.key < node.key){
      if(node.left === null){
        node.left = newNode;
      }else{
        insertNode(node.left, newNode);
      }
    }else{(newNode.key > node.key ){
      if(node.right === null){
        node.right = newNode;
      }else{
        insertNode(node.right, newNode)
      }
  },

  this.getRoot = function(){
    return root;
  },

  this.search = function(key){
    //closure var here to always start at root
    return searchNode(root, key)
  },

  var searchNode = function(node,key){
    // 3 cases
    // 1 is key valid key?
    if(node === null){
      return false;
    }

    if(key > node.key){
      return searchNode(node.right, key)
    }

    else if(key < node.key){
      return searchNode(node.left, key)

    }else{
      return true;
    }

  },

  this.inOrderTraversal = function(key){
    // remember we are using the visitor pattern - that is what the callback is for
    // we want to visit each node in ascending order and do something to it.
    return inOderTraversal(root, callback)
  }

  var inOrderTraverseNode = function(node, callback){
    //think about this per node
    //ascending order
    if(node !== null){
      //first traverse down smallest values
      inOrderTraverseNode(node.left, callback)
      node.key(callback)
      inOrderTraverseNode(node.right, callback)
    }else{
      return null;
    }

  };

  this.preOrderTraversal = function(key){
    return preOrderTraversal(root, callback)
  }

  var preOrderTraverseNode = function(node, callback){
    //child before parents
    if(node !== null){
      callback(node.key)
      preOrderTraverseNode(node.left, callback)
      preOrderTraverseNode(node.right, callback)
    }else{
      return null;
    }
  }

  this.postOrderTraversal = function(key){
    return postOrderTraverseNode(root, callback)
  },

  var postOderTraverseNode = function(node, callback){
    postOrderTraverseNode(node.right, callback)
    postOrderTraverseNode(node.left, callback)
    callback(node.key)
  },

  ////////////////////////////////////////////////////////
  this.min = function(node){
    return findMin(root)
  }

  // var findMin = function(node){
  //   if(node.left){
  //     node = node.left
  //     return findMin(left)
  //   }else{
  //     return node;
  //   }
  // },
  var findMin = function(node){
    while(node && node.left !== null){
      node = node.left
    }
    return node;
  },

  this.max = function(node){
    return findMax(root)
  },

  // var findMax = function(node){
  //   if(node.right){
  //     node = node.right
  //     return findMax(node.right)
  //   }else{
  //     return node;
  //   }

  // }

  var findMax = function(node){
    while(node && node.right !== null){
      node = node.right
    }
    return node;
  },

  this.remove = function(element){
    // after we remove the element
    // we have to re-assign the change
    // to the parent object root.
    root = removeNode(root, element)
    // root here is the value of our function call, always begin search at root.
  },


  var removeNode = function(node, element){
    if(node === null){
      return null;
    }

    if(element < node.key){
      // assign the return value of your removal to the subtree
      // since your removal was on the left-hand subtree
      node.left = removeNode(node.left, element)
      // then return the tree
      return node;
    }

    else if (element > node.key){
      node.right = removeNode(node.right , element)
      return node;

    }else{
      // when we find our node 3 removal cases

      //1. node has no children
      if(node.left && node.right === null){
        // return null bc
        return null;
      }

      //2. node has 1 child
      if(node.left === null){
        node = node.right
        return node;
      }else if(node.right === null){
        node = node.left;
        return node;

      //3.node has 2 children
      //- find the min node from right subtree
      var temp = findMinNode(node.right)
      //replace the value of our "deleted" node with minValue
      node.key = temp.key
      // recursive function will eventually assigne the node.right value to null
      node.right = removeNode(node.right)
      //return the node to the larger structure
      return node

    }
  }; //removeNode()
}//binary tree
