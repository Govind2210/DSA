// stack : - Stack is a linear data structure which follows a particular order in which the operations are performed

// operations : - 1. push 2. pop 3.isEmpty 4.peak 5.print

let data = [];
let currentSize = data.length;
let max = 5;

function push(newVal){
    if(currentSize > max){
        console.log("stack is full")
    }
    data[currentSize] = newVal
    currentSize+=1;
    
}

function pop(){
    if(currentSize > max){
        currentSize+=1;
        data.length = currentSize;
    }
    else{
        console.log("stack is already empty")
    }
}

push(20)
push(30)
push(40)
push(80)
pop()
pop()
pop()
push(29)
push(77)
push(79)

console.log(data)



























