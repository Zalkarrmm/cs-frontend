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

  it('should add objects to queue', () => {
    const priorityQueue = new PriorityQueue()

    const user1 = { name: 'Mike' }
    const user2 = { name: 'Bill' }
    const user3 = { name: 'Jane' }

    priorityQueue.add(user1, 1)
    expect(priorityQueue.peek()).toBe(user1)
    
    priorityQueue.add(user2, 2)
    expect(priorityQueue.peek()).toBe(user1)
  
    priorityQueue.add(user3, 0)
    expect(priorityQueue.peek()).toBe(user3)
  })

  it('should take items from heap by prioruty', () => {
    const priorityQueue = new PriorityQueue()

    priorityQueue.add(10, 1)
    priorityQueue.add(5, 2)
    priorityQueue.add(100, 0)
    priorityQueue.add(200, 0)

    expect(priorityQueue.poll()).toBe(100)
    expect(priorityQueue.poll()).toBe(200)
    expect(priorityQueue.poll()).toBe(10)
    expect(priorityQueue.poll()).toBe(5)
  })

  it('should update proirities of heap nodes', () => {
    const priorityQueue = new PriorityQueue()


    priorityQueue.add(10, 1)
    priorityQueue.add(5, 2)
    priorityQueue.add(100, 0)
    priorityQueue.add(200, 0) // [100, 200, 10, 2]


    expect(priorityQueue.peek()).toBe(100)


    priorityQueue.changePriority(100, 10)
    priorityQueue.changePriority(10, 20)


    expect(priorityQueue.poll()).toBe(200)
    expect(priorityQueue.poll()).toBe(5)
    expect(priorityQueue.poll()).toBe(100)
    expect(priorityQueue.poll()).toBe(10)
  })

  it('должен обновить приоритеты внутренних узлов', () => {
    const priorityQueue = new PriorityQueue()

    priorityQueue.add(10, 1)
    priorityQueue.add(5, 2)
    priorityQueue.add(100, 0)
    priorityQueue.add(200, 0)

    expect(priorityQueue.peek()).toBe(100)

    priorityQueue.changePriority(200, 10)
    priorityQueue.changePriority(10, 20)

    expect(priorityQueue.poll()).toBe(100)
    expect(priorityQueue.poll()).toBe(5)
    expect(priorityQueue.poll()).toBe(200)
    expect(priorityQueue.poll()).toBe(10)
  })

  it('should change priorities and add new', () => {
    const priorityQueue = new PriorityQueue()

    priorityQueue.add(10, 1)
    priorityQueue.add(5, 2)
    priorityQueue.add(100, 0)
    priorityQueue.add(200, 0)

    priorityQueue.changePriority(200, 10)
    priorityQueue.changePriority(10, 20)

    priorityQueue.add(15, 15)

    expect(priorityQueue.poll()).toBe(100)
    expect(priorityQueue.poll()).toBe(5)
    expect(priorityQueue.poll()).toBe(200)
    expect(priorityQueue.poll()).toBe(15)
    expect(priorityQueue.poll()).toBe(10)
  })

  it('must determine whether the values of elements', () => {
    const priorityQueue = new PriorityQueue()

    priorityQueue.add(10, 1)
    priorityQueue.add(5, 2)
    priorityQueue.add(100, 0)
    priorityQueue.add(200, 0)
    priorityQueue.add(15, 15)

    expect(priorityQueue.hasValue(70)).toBe(false)
    expect(priorityQueue.hasValue(15)).toBe(true)
  })
})