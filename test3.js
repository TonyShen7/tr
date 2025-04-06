_insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (!node.left) node.left = newNode;
      else this._insertNode(node.left, newNode); 
    } else {
  
      if (!node.right) node.right = newNode;
      else this._insertNode(node.right, newNode); 
    }
  }
  













  _findMinNode(node) {
    while (node.left) {
      node = node.left; // Traverse left until the minimum node is found
    }
    return node;
  }
  