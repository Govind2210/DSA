/**
 * Tree:-
 * 
 * A tree is non-linear and a hierarchical data structure consisting 
 * of a collection of nodes such that each node of the tree stores a value and a list of references
 * to other nodes 
 * 
 * space complexity :- O(n)
 * time complexity :-  O(n)
 *
 */

class Node{
    constructor(val){
        this.value = val;
        this.left = null;
        this.right = null;
    }
}
 
class BSTree{
    constructor(){
        this.root = null; // by default
    }

    //checking the root is null
    isTreeEmpty(){
        return this.root === null;
    }

    //inserting the tree
    makeTree(val){
        let newNode = new Node(val) // put rhis on variable
        if(this.root == null){ // checking if it is null add here only
             this.root = newNode; //20
        }
        else{
            this.insertNode(this.root , newNode) // recursion // if its not null 
        }
    }

    insertNode(root , newNode){ 
        if(root.value > newNode.value) { // currentNode > newNode
            if(root.left == null){ // recursion
                root.left = newNode
            }
            else{
                this.insertNode(root.left , newNode) // recursion
            }
            
        }
        else{ // making for right
            if(root.right === null){ // recursion
                root.right = newNode
            }
            else{
                this.insertNode(root.right , newNode)
            }
        }
    }


    // depth in search tree approch

    // pre-order //it will start from top - left -right
    preOrder(root){
        if(root){
            console.warn(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
            
        }
    }

    //in-Order

    inOder(root){ // start from left - centre - right
        if(root){
            this.inOder(root.left)
            console.warn(root.value)
            this.inOder(root.right)
        }
    }

    //post Order

    PostOrder(root){  // it will start from left - right - centre
        if(root){
            this.PostOrder(root.left)
            this.PostOrder(root.right)
            console.warn(root.value)
            
        }
    }

    // breadth first search traversing

    bfsTraversing(){
        let queue = [] // making this empty array
        queue.push(this.root); // pushing every node into  queue array 
        while(queue.length){ 
            let current = queue.shift(); // removinf  1-1 from front
            if(current.left){ // if we have any node in front we push it backside
                queue.push(current.left)
            }
            if(current.right){ // if we have node in right push it on backside
                queue.push(current.right)
            }
            console.log(current.value)
        }
    }

    //min search
    minvalue(root){
        if(!root.left){
            return root.value
        }
        else{
            return this.minvalue(root.left)
        }
    }

    // max - value

    maxvalue(root){
        if(!root.right){
            return root.value
        }
        else{
            return this.maxvalue(root.right)
        }
    }

    // remove node
    removeData(value){
        this.root = this.deleteNode(this.root , value)

    }

    deleteNode(root , value){
        if(root === null){ // checking if it null return null
            return null
        }
        if(value <  root.value){
            root.left = this.deleteNode(root.left , value)
        }
        else if(value > root.value){
            root.right = this.deleteNode(root.right , value)
        }
        else{
            if(!root.left && !root.right){ // this node dont have right node nor left node
                return null
            }
            else if(!root.left ){ // dont have left node 
                return root.right
            }
            else if(!root.right){ // dont have right node
                return root.left
            }
            root.value = this.minvalue(root.right) // if it has both node then it will check min value from right side 
            root.right = this.deleteNode(root.right , root.value)
        }
        return root
    }   
}



let bst = new BSTree()

bst.makeTree(20)
bst.makeTree(10)
bst.makeTree(5)
bst.makeTree(11)
bst.makeTree(30)
bst.makeTree(40)
bst.makeTree(23)

// bst.preOrder(bst.root ) // preOder
// bst.inOder(bst.root) // inorder 
// bst.PostOrder(bst.root)// post order

// bst.bfsTraversing()//breath first search

// console.log(bst.minvalue(bst.root)) // min value
// console.log(bst.maxvalue(bst.root)) // max value

bst.removeData(5) // deleteing the node
bst.removeData()

// console.warn(bst.isTreeEmpty()) // checking is empty 

console.warn(bst) // checking all node