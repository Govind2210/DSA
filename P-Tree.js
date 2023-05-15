// practice treee

class Node{
    constructor(val){
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class BtsTree{
    constructor(){
        this.root = null // default
    }

    isEmpty(){ // checking root is empty or not
        return this.root === null;
    }

    // creating a tree
    makeTree(val){
        let newNode = new Node(val)
        console.log("newNode" , newNode)
        if(this.root == null){ // if node is empty insert value here
            this.root = newNode;
        }
        else{ // if nor call a function and find better place
            this.insertNode(this.root , newNode)
        }
    }

    insertNode(root , newNode){
        if(root.value > newNode.value){
            if(root.left == null){
                root.left = newNode
            }
            else{
                this.insertNode(root.left , newNode)
            }
        }
        else{
            if(root.right === null){
                root.right = newNode
            }
            else{
                this.insertNode(root.right , newNode)
            }

        }
    }

    // searching 
    search(root , val){
        if(root === null){ // checking if root is false
            return false;
        }
        else if(root.value === val){ // checking the root value is equal to value
            return true;
        }
        else if(root.value > val){
            return this.search(root.left , val);
        }
        else{
            return this.search(root.right ,val);
        }
    }
}

let bts = new BtsTree() 

bts.makeTree(15)
bts.makeTree(6)
bts.makeTree(55)
bts.makeTree(12)
bts.makeTree(16)
bts.makeTree(77)
bts.makeTree(3)

console.log(bts.search(bts.root , 77))

// console.log(bts.isEmpty())

// console.warn(bts.root) // checking every value
