import { isNamedExports } from "typescript";
import LinkedList from "../linked-list/LinkedList";

const defaultHashTableSize = 32

export default class HashTable {
    constructor(size = defaultHashTableSize){
        this.buckets = new Array(size).fill(null).map(() => new LinkedList())
        this.keys = {}   
    }

    hash(key){
        const hash = [...key].reduce((acc, char) => acc + char.charCodeAt(0), 0)

        return hash % this.buckets.length
    }

    set(key, value){
        const index = this.hash(key)

        this.keys[key] = index

        const bucket = this.buckets[index]

        const node = bucket.find({cb: (value) => value.key === key})

        if(!node){
            bucket.append({key, value})
        } else {
            node.value.value = value
        }
    }

    remove(key){
        const index = this.hash(key)

        delete this.keys[key]
        
        const bucket = this.buckets[index]

        const node = bucket.find({ cb: (value) => value.key === key })

        return node ? bucket.remove(node.value) : null
    }

    get(key){
        const index = this.hash(key)
        
        const bucket = this.buckets[index]

        const node = bucket.find({ cb: (value) => value.key === key })

        return node ? node.value.value : null
    }

    has(key){
        return Object.hasOwn(this.keys, key)
    }
    
    getKeys() {
        return Object.keys(this.keys)
    }

    getValues(){
        return this.buckets.reduce((acc, bucket) => {
            return acc.concat(
                bucket.toArray().map((node) => node.value.value)
            )
        }, [])
    }
}