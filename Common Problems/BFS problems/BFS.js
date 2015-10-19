// Level Order Print
//Print a Binary Tree of intergers in level order
function BinarySearchTree(){

  var root = null;

  var Node = function(key){
    this.key = key;
    this.left = null;
    this.right = null;
  };

  this.insert = function(key){

    var newNode = new Node(key);

    if(root === null){
      root = newNode
    }else{
      insertNode(root, newNode)
    }
  };

  var insertNode = function(node, newNode){
        if (newNode.key < node.key){
            if (node.left === null){
                node.left = newNode;
            } else {
                insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null){
                node.right = newNode;
            } else {
                insertNode(node.right, newNode);
            }
        }
    };


  this.getRoot = function(){
    return root;
  }

}


myTree = new BinarySearchTree();

myTree.insert(3);
myTree.insert(9);
myTree.insert(20);
myTree.insert(15);
myTree.insert(7);

console.log(myTree.getRoot())


// steps for BFS with queue:

// enqueue root node
// while there are nodes in the queue, dequeue node, print node, and enqueue children of the node
// repeat above

var T = [
    { left: 1, right: 2 },
    { left: 3, right: 4 },
    { left: null, right: 6 },
    { left: null, right: null },
    { left: null, right: null },
    { left: null, right: null },
    { left: null, right: null }
];


function printTree(tree){

    var queue = [];

    // enqueue root
    queue.push( 0 );

    do {
        var len = queue.length;
        // for each node in the queue
        for( var i = 0; i < len; i++ ){
            // dequeue
            var index = queue.shift();
            // print node
            console.log( index );

            var node = tree[ index ];

            // enqueue children of the node
            if( node.left ) {
                queue.push( node.left );
            }
            if( node.right ) {
                queue.push( node.right );
            }
        }
        // print a line break
        console.log("************************");
    // repeat
    } while( 0 !== queue.length );
}

// run it
console.log(printTree(T));































