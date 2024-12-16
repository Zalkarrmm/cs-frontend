import LinkedList from '../linked-list/LinkedList'

export default class Stack {
    constructor(){
        this.list = new LinkedList()
    }

    isEmpty(){
        return !this.list.head
    }

    peek(){
        if(this.isEmpty()){
            return null
        }

        return this.list.head.value
    }

    push(value){
        this.list.prepend(value)
    }

    pop(){
        const removedHead = this.list.removeHead()
        return removedHead?.value || null
    }

    toString(cb){
        return this.list.toString(cb)
    }

    toArray(){
        return this.list.toArray().map((node) => node.value)
    }
}