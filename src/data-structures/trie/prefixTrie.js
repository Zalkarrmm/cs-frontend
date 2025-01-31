import TrieNode, {HEAD_CHARACTER} from './trieNode'

export default class PrefixTrie {
  constructor() {
    this.head = new TrieNode(HEAD_CHARACTER)
  }

  //addWord 
  addWord(word) {
    const chars = [...word]

    let node = this.head

    for(let i = 0; i < chars.length; i++){
      const isComplete = i === chars.length-1

      node = node.addChild(chars[i], isComplete)
    }
    return this
  }

  removeWord(word){

    const depthFirstRemove = (node, i = 0) => {
      if(i >= word.length) return

      const char = word[i]

      const nextNode = node.getChild(char)

      if(!nextNode) return

      depthFirstRemove(nextNode, i + 1)

      if(i === word.length-1){
        nextNode.isCompleteWord = false
      }

      node.removeChild(char)
    }

    depthFirstRemove(this.head)

    return this
  }

  suggestNextCharacter(word){
    const lastChar = this.getLastCharNode(word)

    if(!lastChar) {
      return null
    }

    return lastChar.suggestChildren()
  }

  doestWordExist(word){
    const lastChar = this.getLastCharNode(word)

    return Boolean(lastChar) && lastChar.isCompleteWord
  }

  getLastCharNode(word){
    const chars = [...word]

    let node = this.head

    for(let i = 0; i < chars.length; i++){ 
      if(!node.hasChild(chars[i])){
        return null
      }

      node = node.getChild(chars[i])
    }
    
    return node
  }
}