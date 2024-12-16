import LinkedList from "../linked-list/LinkedList";

export default class Queue {
    constructor () {
        this.list = new LinkedList()
    }

    isEmpty(){
        return !this.list.head
    }

    peek(){ // check first
        if(this.isEmpty()){
            return null
        }
        
        return this.list.head.value
    }

    enqueue(value){ // add to end as push
        this.list.append(value)
    }

    dequeue(){ // call a current queue value
        const removedHead = this.list.removeHead()
        return removedHead?.value || null
    }
    
    toString(cb){ // to string
        return this.list.toString(cb)
    }

    toArray(){ // to array
        return this.list.toArray().map((node) => node.value)
    }
}