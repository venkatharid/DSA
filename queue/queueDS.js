class Queue {
    constructor(){
        this.items= []
    }
    enqueue(element){
        this.items.push(element)
    }

    dequeue(){
        if(this.isEmpty()){
            console.log("Empty String")
        }else{
            this.items.shift()
        }
    }

    isEmpty(){
        return this.items.length > 0 ? 0 : 1;
    }

    front(){
        if(this.isEmpty()){
            console.log("Empty String")
        }else{
            console.log(this.items[0], "top")
        }
    }

    isSize(){
        return this.items.length
    }

    print(){
        for(let i=0; i<this.isSize(); i++){
            console.log(this.items[i],",")
        }
    }

}


const queue = new Queue();

queue.enqueue(5)
queue.enqueue(6)
queue.enqueue(7)
queue.enqueue(8)

queue.print()
queue.dequeue()
queue.print()
queue.front()


