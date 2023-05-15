// 10 -- > 16 --> 20 // by developer by akash

// Example of LinkedList how its Work

// let Linkelist = {
//     value : 10 ,
//     next : {
//         value : 16 ,
//         next : {
//             value : 20 ,
//             next : null
//         }
//     }
// }


class LinkedList{
    constructor(data){
        this.head = {
            value : data,
            next : null
        }
        this.tail = this.head
        this.length = 1;
        
    }

    // insert a new node
    append(data){
        let newNode = {
            value : data,
            next : null
        }
        this.tail.next = newNode
        this.tail = newNode

    }
    // add at the first
    prepend(data){
        let newNode = {
            value : data,
            next : null
        }
        newNode.next = this.head,
        this.head = newNode
    }

    // insert at any position 
    traversing(req){
        let counter = 0;
        let currentNode = this.head

        while(counter != req){
            counter++
            currentNode = currentNode.next
        }
        return currentNode
    }

    // 2   10 -15 -16
    //  \ /
    //   4

    insertAtIndex(index , data){
        const newNode ={
            value : data ,
            next : null
        }
        let leaderNode = this.traversing(index-1) // we are grabiing // 2 // by using this function
        const nextNode = leaderNode.next // here we have grab // 10 

        leaderNode.next = newNode // 2 - 4 
        newNode.next = nextNode  // 4 - 10
    }

    // delete the node
    deletetheNode(index){
        const leaderNode = this.traversing(index - 1) //2
        const unWantedNode = leaderNode.next  //4 --> delete   

        const nextNode = unWantedNode.next //10

        leaderNode.next = nextNode
        this.length--
    }

    // reverse the linkedlist [2,10,16,20]
    reverse(){
        let first = this.head
        this.tail = this.head
        let second = first.next
        while(second){
            let temp = second.next;
            second.next = first

            first = second
            second = temp
        }
        this.head.next = null
        this.head = first
    }





}

const myList = new LinkedList(10)
myList.append(16)
myList.append(20)
myList.prepend(2)
// myList.insertAtIndex(1 , 4)
// myList.deletetheNode(1)
myList.reverse()
console.log(myList)