import HashTable from '../hash-table/HashTable'

export const HEAD_CHARACTER = '*'

export default class Node {
  constructor (char, isCompleteWord = false) {
    this.char = char // the main info of done is char

    this.isCompleteWord = isCompleteWord // indicator of finishing letter - boolean

    this.children = new HashTable() // hash table for children
  }

  addChild(char, isCompleteWord = false){
    if(!isCompleteWord){
      this.children.set(char, new Node(char, isCompleteWord))
    }

    const node = this.getChild(char)

    node.isCompleteWord = node.isCompleteWord || isCompleteWord
  
    return node
  }

  removeChild(char) {
    const node = this.getChild(char)

    if(node && !node.isCompleteWord && !node.hasChildren()){
      this.children.remove(char)
    }

    return this
  }

  getChild(char) {
    return this.children.get(char)
  }

  hasChildren(char) {
    return this.children.has(char)
  }

  hasChildren() {
    return this.children.getKeys().length > 0
  }

  suggestChildren() {
    return [...this.children.getKeys()]
  }

  toString() {
    let childrenAsString = this.suggestChildren().toString()
    childrenAsString = childrenAsString ? `:${childrenAsString}` : ''
    const isCompleteString = this.isCompleteWord ? HEAD_CHARACTER : ''

    return `${this.char}${isCompleteString}${childrenAsString}`
  }
}