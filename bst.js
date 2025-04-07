class Node {
    constructor(value) {
      this.value = value
      this.left = null  // Left child
      this.right = null // Right child
    }
  } 
  
  class BinarySearchTree {
    constructor() {
      this.root = null //root node starts as null
    }
  
 //insert a new value into the BST
    insert(value) {
      const newNode = new Node(value) //create a new node with the given value
      
      //if the tree is empty, make the new node the root
      if (this.root == null) {
        this.root = newNode
      } else {
        this.insertNode(this.root, newNode) //start the division at the root
      }
    }
  
    //left or right
    insertNode(node, newNode) {
      if (newNode.value < node.value) {
        //if new node's value is smaller, go left
        if (node.left == null) {
          node.left = newNode
        } else {
          this.insertNode(node.left, newNode) //keep checking left side
        }
      } else {
        //if new node's value is greater or equal, go right
        if (node.right == null) {
          node.right = newNode
        } else {
          this.insertNode(node.right, newNode) //keep checking right side
        }
      }
    }
  
    //function to print the tree
    printTree() {
      this.printInOrder(this.root) //print inorder
    }
  
    printInOrder(node) {
      if (node != null) {
        this.printInOrder(node.left) //visit left child first
        console.log(node.value) //print node's value
        this.printInOrder(node.right) //visit right child
      }
    }
  }
  
  // Usage example:
  const bst = new BinarySearchTree()
  bst.insert(10) //insert 10
  bst.insert(5) //insert 5
  bst.insert(20) 
  bst.insert(3) 
  bst.insert(7) 
   
  
  bst.printTree() // Output: 3, 5, 7, 10, 20 (
  