import Comparator from '../../utils/comparator'
import MinHeap from '../heap/MinHeap'

export default class PriorityQueue extends MinHeap {
  constructor() {
    super()
    this.priorities = new Map()

    this.compare = new Comparator(this.comparePriorities.bind(this))
  }

  add(item, priority = 0) {
    this.priorities.set(item, priority)
    super.add(item)

    return this
  }

  remove(item, compare) {
    super.remove(item, compare)

    this.priorities.delete(item)

    return this
  }

  changePriority(item, priority) {
    this.remove(item, new Comparator(this.compareValues))

    this.add(item, priority)

    return this
  }

  findByValue(item) {
    return this.find(item, new Comparator(this.compareValues))
  }

  hasValue(item) {
    return this.findByValue(item).length > 0
  }

  comparePriorities(a, b) {
    return this.compareValues(this.priorities.get(a), this.priorities.get(b))
  }

  compareValues(a, b) {
    if (a === b) {
      return 0
    }
    return a < b ? -1 : 1
  }
}