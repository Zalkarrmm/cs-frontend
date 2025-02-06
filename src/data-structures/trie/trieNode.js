import HashTable  from "../hash-table/HashTable"

export const HEAD_CHARACTER = '*'

export default class TrieNode {
  constructor(char, isCompleteWord = false) {
    this.char = char
    this.isCompleteWord = isCompleteWord
    this.children = new HashTable()
  }

  addChild(char, isCompleteWord = false){
    if (!this.hasChild(char)) {
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

  hasChild(char) {
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