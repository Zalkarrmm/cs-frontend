import Comparator from "../../utils/comparator";
import HashTable from "../hash-table/HashTable";


export default class BinaryTreeNode {
  constructor(value = null){
    this.value = value
    
    this.left = null
    
    this.right = null

    this.parent = null

    this.meta = new HashTable()

    this.nodeComparator = new Comparator()
  }

  get leftHeight() {
    if (!this.left) {
      return 0
    }

    return this.left.height + 1
  }

  get rightHeight() {
    if(!this.right){
      return 0
    }

    return this.right.height + 1
  }

  get height(){
    return Math.max(this.leftHeight, this.rightHeight)
  }

  get balanceFactor(){
    return this.leftHeight - this.rightHeight
  }

  setValue(value){
    this.value = value

    return this
  }

  setLeft(node){
    if(this.left){
      this.left.parent = null
    }

    this.left = node 

    if(this.left){
      this.left.parent = this
    }

    return this
  }

  setRight(node){
    if(this.right){
      this.right.parent = null
    }

    this.right = node
    
    if(this.right) { 
      this.right.parent = this
    }

    return this
  }

  setValue(value){
    this.value = value

    return this
  }

  get uncle(){
    if(!this.parent || !this.parent.parent || !this.parent.parent.left || !this.parent.parent.right){
      return null
    }
  
    if(this.nodeComparator.equal(this.parent, this.parent.parent.left)){
      return this.parent.parent.right
    }

    return this.parent.parent.left
  }

  removeChild(nodeToRemove){
    if(this.left && this.nodeComparator.equal(this.left, nodeToRemove)){
      this.left = null
      return true
    }

    if(this.right && this.nodeComparator.equal(this.right, nodeToRemove)){
      this.right = null
      return true
    }

    return false
  }
  replaceChild(nodeToReplace, replacementNode) {
    if (!nodeToReplace || !replacementNode) {
      return false
    }
  
    if (this.left && this.nodeComparator.equal(this.left, nodeToReplace)) {
      this.left = replacementNode
      return true
    }
  
    if (this.right && this.nodeComparator.equal(this.right, nodeToReplace)) {
      this.right = replacementNode
      return true
    }
  
    return false
  }

  traverseInOrder(){
    let result = []

    if(this.left){
      result = result.concat(this.left.traverseInOrder())
    }

    result.push(this.value)

    if(this.right){
      result = result.concat(this.right.traverseInOrder())
    }

    return result
  }

  static copyNode(sourceNode, targetNode){
    targetNode.setValue(sourceNode.value)
    targetNode.setLeft(sourceNode.left)
    targetNode.setRight(sourceNode.right)
  }

  toString(){
    return this.traverseInOrder().toString()
  }
}