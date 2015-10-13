// Level Order Print
//Build a tree class with a string value and array of children
//Writ a function that prints out the values in your tree in level -order

//http://jetheis.com/blog/2013/11/11/programming-interview-question-level-order-traversal/
var levelOrder = function(rootNode) {
    var level, node, queue;
    queue = [[rootNode, 0]];

    return ((function() {
        var _ref, _ref1, _results;
        _results = [];
        while (queue.length) {
            _ref = queue.pop(), node = _ref[0], level = _ref[1];
            if (node.left != null) {
                queue.unshift([node.left, level + 1]);
            }

            if (node.right != null) {
                queue.unshift([node.right, level + 1]);
            }

            _results.push(node.val + (((_ref1 = queue[0]) != null ?
                _ref1[1] : void 0) > level ? '\n' : ''));
        }

        return _results;
    })()).join(' ').replace(/\n\ /g, '\n');
};

