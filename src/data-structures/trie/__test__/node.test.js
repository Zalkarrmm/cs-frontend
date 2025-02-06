import TrieNode from '../trieNode'

describe('TrieNode', () => {
  it('should create trie node', () => {
    const trieNode = new TrieNode('c', true)

    expect(trieNode.char).toBe('c')
    expect(trieNode.isCompleteWord).toBe(true)
    expect(trieNode.toString()).toBe('c*')
  })
  
  it('should add children', () => {
    const trieNode = new TrieNode('c')

    trieNode.addChild('a', true)
    trieNode.addChild('o')
    expect(trieNode.toString()).toBe('c:a,o')
  })

  it('should get children', () => {
    const trieNode = new TrieNode('c')

    trieNode.addChild('a')
    trieNode.addChild('o')

    expect(trieNode.getChild('a').toString()).toBe('a')
    expect(trieNode.getChild('a').char).toBe('a')
    expect(trieNode.getChild('o').toString()).toBe('o')
    expect(trieNode.getChild('b')).toBeNull()
  })

  it('should define existence of children', () => {
    const trieNode = new TrieNode('c')

    expect(trieNode.hasChildren()).toBe(false)

    trieNode.addChild('a')

    expect(trieNode.hasChildren()).toBe(true)
  })

  it('should define existence of single children', () => {
    const trieNode = new TrieNode('c')

    trieNode.addChild('a')
    trieNode.addChild('o')

    expect(trieNode.hasChild('a')).toBe(true)
    expect(trieNode.hasChild('o')).toBe(true)
    expect(trieNode.hasChild('b')).toBe(false)
  })

  it('should get next symbols', () => {
    const trieNode = new TrieNode('c')

    trieNode.addChild('a')
    trieNode.addChild('o')

    expect(trieNode.suggestChildren()).toEqual(['a', 'o'])
  })

  it('should remove child if it does not have children', () => {
    const trieNode = new TrieNode('c')

    trieNode.addChild('a')
    expect(trieNode.hasChild('a')).toBe(true)

    trieNode.removeChild('a')
    expect(trieNode.hasChild('a')).toBe(false)
  })

  it('should not remove children that have children', () => {
    const trieNode = new TrieNode('c')
    trieNode.addChild('a')

    const childNode = trieNode.getChild('a')
    childNode.addChild('r')

    trieNode.removeChild('a')
    expect(trieNode.hasChild('a')).toEqual(true)
  })

  it('must not to delete children, that are completing symbols', () => {
    const trieNode = new TrieNode('c')

    const IS_COMPLETE_WORD = true

    trieNode.addChild('a', IS_COMPLETE_WORD)

    trieNode.removeChild('a')

    expect(trieNode.hasChild('a')).toEqual(true)
  })
})