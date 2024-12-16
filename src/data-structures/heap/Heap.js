import Comparator from "../../utils/comparator";

export default class Heap {
    constructor (fn) {
        if(new.target === Heap){
            throw new Error("The heap cannot be created directly!");
            
        }

        this.heapContainer = []
        this.compare = new Comparator(fn)
    }

    getLeftChildIndex(parentIndex) {
        return 2 * parentIndex + 1
    }

    getRightChildIndex(parentIndex) {
        return 2 * parentIndex + 2
    }

    getParentIndex(childIndex){
        return Math.floor((childIndex - 1) / 2) // it seems not correct for first
    }

    hasParent(childIndex){
        return this.getParentIndex(childIndex) >= 0
    }
    
    hasLeftChild(parentIndex){
        return this.getLeftChildIndex(parentIndex) < this.heapContainer.length
    }

    hasRightChild(parentIndex){
        return this.getRightChildIndex(parentIndex) < this.heapContainer.length
    }

    leftChild(parentIndex){
        return this.heapContainer[this.getLeftChildIndex(parentIndex)]
    }


    rightChild(parentIndex){
        return this.heapContainer[this.getRightChildIndex(parentIndex)]
    }

    parent(childIndex){
        return this.heapContainer[this.getParentIndex(childIndex)]
    }

    isEmpty(){
        return this.heapContainer.length === 0
    }

    toString(){
        return this.heapContainer.toString()
    }

    // methods to get value of root element

    peek(){ // just returns the root value
        if(this.isEmpty()){
            return null
        }

        return this.heapContainer[0]
    }

    poll(){ // return and delete the root value
        if(this.isEmpty()){
            return null
        }

        if(this.heapContainer.length === 1){
            return this.heapContainer.pop()
        }
        
        const item = this.heapContainer[0]

        this.heapContainer[0] = this.heapContainer.pop()

        this.heapifyDown()

        return item
    }

    add(item){ // add item to heap
        this.heapContainer.push(item) // adds to end

        this.heapifyUp()

        return this
    }

    remove(item, comparator = this.compare) {
        const numberOfItemsToRemove = this.find(item, comparator).length
      
        for (let i = 0; i < numberOfItemsToRemove; i += 1) {
          const index = this.find(item, comparator).pop() // [...searchedValues].pop() -> returns the last one
      
          if (index === this.heapContainer.length - 1) {
            this.heapContainer.pop() // if the last is searching element then just pop it from the end
          } else {
            this.heapContainer[index] = this.heapContainer.pop()
            const parentItem = this.parent(index)
      
            if (
              this.hasLeftChild(index) &&
              (!parentItem ||
                this.pairIsInCorrectOrder(parentItem, this.heapContainer[index]))
            ) {
              this.heapifyDown(index)
            } else {
              this.heapifyUp(index)
            }
          }
        }

        return this
    }

    find(item, comparator = this.compare){
        const incides = []

        for(let i = 0; i < this.heapContainer.length; i += 1){
            if(comparator.equal(this.heapContainer[i], item)){
                incides.push(i)
            }
        }

        return incides
    }

    swap(indexOne, indexTwo){ // switch the places
        const tmp = this.heapContainer[indexOne]

        this.heapContainer[indexOne] = this.heapContainer[indexTwo]
        this.heapContainer[indexTwo] = tmp
    }

    heapifyUp(customStartIndex){
        let currentIndex = customStartIndex || this.heapContainer.length - 1

        while(
            this.hasParent(currentIndex) && 
            !this.pairIsInCorrectOrder(
                this.parent(currentIndex), this.heapContainer[currentIndex]
            )
        ){
            this.swap(currentIndex, this.getParentIndex(currentIndex))
            currentIndex = this.getParentIndex(currentIndex)
        }
    }

    heapifyDown(customStartIndex = 0){
        let currentIndex = customStartIndex
        let nextIndex = null

        while(this.hasLeftChild(currentIndex)){
            if(
                this.hasRightChild(currentIndex) &&
                this.pairIsInCorrectOrder(
                    this.rightChild(currentIndex),
                    this.leftChild(currentIndex)
                )
            ){
                nextIndex = this.getRightChildIndex(currentIndex)
            } else {
                nextIndex = this.getLeftChildIndex(currentIndex)
            }

            if(this.pairIsInCorrectOrder(
                this.heapContainer[currentIndex],
                this.heapContainer[nextIndex]
            )){
                break;
            }

            this.swap(currentIndex, nextIndex)
            currentIndex.nextIndex
        }


    }

    pairIsInCorrectOrder(firstElement, secondElement) {
        throw new Error(`
          You have to implement heap pair comparison method
          for ${firstElement} and ${secondElement} values.
        `);
      }
}