// n1 = {
//     data : 100
// }

// n2 = {
//     data : 200
// }

// n1.next = n2
// console.log(n1)

// creatring with class 

class Node{
    constructor(data , next = null){
        this.data = data;
        this.next = next;
    }
}

// const n1 = new Node(100)
// console.log(n1)

class Linkelist{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    // insetr first node
    insertFirst(data){
        this.head = new Node(data , this.head);
        this.size++
        
    }

    // insert last node
    inserLast(data){
        let node = new Node(data);
        let current;

        // if empty , make head
        if(!this.head){
            this.head = node;
        }
        else{
            current = this.head;

            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        this.size++
    }


    // Insert at index
    insertAt(data, index) {
        //  If index is out of range
        if (index > 0 && index > this.size) {
        return;
        }

        // If first index
        if (index === 0) {
        this.insertFirst(data);
        return;
        }

        const node = new Node(data);
        let current, previous;

        // Set current to first
        current = this.head;
        let count = 0;

        while (count < index) {
        previous = current; // Node before index
        count++;
        current = current.next; // Node after index
        }

        node.next = current;
        previous.next = node;

        this.size++;
    }

    // Get at index
    getAt(index){
        let current = this.head;
        let count =0;

        while(current){
            if(count == index){
                console.log(current.data);
                
            }
            count ++;

            current = current.next;
        }
       // if it is empty
       return;
    }

    // remove at index
    removeAt(index){
        if(index > 0 && index > this.size){
            return;
        }
        let current = this.head;
        let previous;
        let count = 0;
        // remove first
        if(index === 0 ){
            this.head = current.next;
        }
        else{
            while(count < index){
                count++;
                previous = current;
                current = current.next;
            }

            previous.next = current.next;

        }

        this.size--;
    }

    // clear List 
    clearList(){
        this.head = null ;
        this.size = 0;

    }

    // print list data
    printListData(){
        let current = this.head;

        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
}

const li = new Linkelist()

li.insertFirst(100)
li.insertFirst(200)
li.insertFirst(300)
li.inserLast(400)

li.insertAt(500 , 0) 

li.clearList()

// li.removeAt(0)

// li.getAt(0)

li.printListData();

console.log(li);