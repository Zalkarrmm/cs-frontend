import PrefixTrie from '../prefixTrie.js'

describe('Trie', () => {
  it('should create Prefix Trie', () => {
    const trie = new PrefixTrie()

    expect(trie).toBeDefined()
    expect(trie.head.toString()).toBe('*')
  })

  it('should add words to trie', () => {
    const trie = new PrefixTrie()

    trie.addWord('cat')

    expect(trie.head.toString()).toBe('*:c')
    expect(trie.head.getChild('c').toString()).toBe('c:a')

    trie.addWord('car')
    expect(trie.head.toString()).toBe('*:c')
    expect(trie.head.getChild('c').toString()).toBe('c:a')
    expect(trie.head.getChild('c').getChild('a').toString()).toBe('a:t,r')
    expect(trie.head.getChild('c').getChild('a').getChild('t').toString()).toBe('t*')
  })

  it('should delete a word from trie', () => {
    const trie = new PrefixTrie()

    trie.addWord('carpet')
    trie.addWord('car')
    trie.addWord('cat')
    trie.addWord('cart')
    expect(trie.doesWordExist('carpet')).toBe(true)
    expect(trie.doesWordExist('car')).toBe(true)
    expect(trie.doesWordExist('cart')).toBe(true)
    expect(trie.doesWordExist('cat')).toBe(true)

    trie.removeWord('carpool')
    expect(trie.doesWordExist('carpet')).toBe(true)
    expect(trie.doesWordExist('car')).toBe(true)
    expect(trie.doesWordExist('cart')).toBe(true)
    expect(trie.doesWordExist('cat')).toBe(true)

    trie.removeWord('carpet')
    expect(trie.doesWordExist('carpet')).toEqual(false)
    expect(trie.doesWordExist('car')).toEqual(true)
    expect(trie.doesWordExist('cart')).toBe(true)
    expect(trie.doesWordExist('cat')).toBe(true)

    trie.removeWord('cat')
    expect(trie.doesWordExist('car')).toEqual(true)
    expect(trie.doesWordExist('cart')).toBe(true)
    expect(trie.doesWordExist('cat')).toBe(false)

    trie.removeWord('car')
    expect(trie.doesWordExist('car')).toEqual(false)
    expect(trie.doesWordExist('cart')).toBe(true)

    trie.removeWord('cart')
    expect(trie.doesWordExist('car')).toEqual(false)
    expect(trie.doesWordExist('cart')).toBe(false)
  })

  it('is should get next symbols', () => {
    const trie = new PrefixTrie()

    trie.addWord('cat')
    trie.addWord('cats')
    trie.addWord('car')
    trie.addWord('caption')

    expect(trie.suggestNextCharacters('ca')).toEqual(['t', 'r', 'p'])
    expect(trie.suggestNextCharacters('cat')).toEqual(['s'])
    expect(trie.suggestNextCharacters('cab')).toBeNull()
  })


  it('should define exsitence of words', () => {
    const trie = new PrefixTrie()

    trie.addWord('cat')
    trie.addWord('cats')
    trie.addWord('carpet')
    trie.addWord('car')
    trie.addWord('caption')

    expect(trie.doesWordExist('cat')).toBe(true)
    expect(trie.doesWordExist('cats')).toBe(true)
    expect(trie.doesWordExist('carpet')).toBe(true)
    expect(trie.doesWordExist('car')).toBe(true)
    expect(trie.doesWordExist('cap')).toBe(false)
    expect(trie.doesWordExist('call')).toBe(false)
  })
})