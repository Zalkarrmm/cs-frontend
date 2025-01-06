import PriorityQueue from "../priority-queue"

describe('Priority queue', () => {
  it('should create default priority queue', () => {
    const priorityQueue = new PriorityQueue()
    
    expect(priorityQueue).toBeDefined()
  })
  it('should add items with elements priority', () => {
    const priorityQueue = new PriorityQueue()

    priorityQueue.add(10, 1)
    expect(priorityQueue.peek()).toBe(10)

    priorityQueue.add(5, 2)
    expect(priorityQueue.peek()).toBe(10)

    priorityQueue.add(100, 0)
    expect(priorityQueue.peek()).toBe(100)
  })

})