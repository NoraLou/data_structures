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

//Another way to do it.

// Use a queue to store nodes at each level. Use null to mark the end of one level.

// Initially, push the root node and null to the queue. Then iterate the queue, push children of each node to the queue and mark non-null element. When you encounter a null element, push a new one. So two consequent null marks the end of iteration.

// var process = function (node) {
//     var queue = [node, null];
//     var i = 0, n = 1;
//     while (queue[i] != null || (i == 0 || queue[i-1] != null)) {
//         if (queue[i] == null) {
//             queue.push(null);
//         }
//         else {
//             queue[i].n = n++;
//             queue[i].children.forEach(function (elem) {
//                 queue.push(elem);
//             });
//         }
//         i++;
//     }
// }

// process(data);
// console.log(data);
// I used an Array for the queue and didn't dequeue the visited elements (O(n) space required). If the space consumed by queue is a bottleneck, you can replace it with some other queue implementation and alter the algorithm a bit.

































