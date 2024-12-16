import Queue from "../Queue";

describe('Queue', () => {
    it('Should create empty queue', () => {
        const queue = new Queue()
        expect(queue).not.toBeNull()
        expect(queue.list).not.toBeNull()
    })

    it('Should add value to queue', () => {
        const queue = new Queue()
        
        queue.enqueue(1)
        queue.enqueue(2)

        expect(queue.toString()).toBe('1,2')
    })

    it('Should add/delete value in/from queue', () => {
        const queue = new Queue()

        queue.enqueue({ value: 'test1', key: 'key1' })
        queue.enqueue({ value: 'test2', key: 'key2' })
    
        const stringifier = (value) => `${value.key}:${value.value}`
    
        expect(queue.toString(stringifier)).toBe('key1:test1,key2:test2')
        expect(queue.dequeue().value).toBe('test1')
        expect(queue.dequeue().value).toBe('test2')
    })

    it('Should peek value from queue without and with deleting nodes', () => { // incorrect description in documentation I suppose
        const queue = new Queue()

        expect(queue.peek()).toBeNull()

        queue.enqueue(1)
        queue.enqueue(2)

        expect(queue.peek()).toBe(1)
        expect(queue.peek()).toBe(1)
    })

    it('should check for emptiness in queue', () => {
        const queue = new Queue()

        expect(queue.isEmpty()).toBe(true)

        queue.enqueue(1)

        expect(queue.isEmpty()).toBe(false)
    })

    it('should delete elements by FIFO order', () => {
        const queue = new Queue()

        queue.enqueue(1)
        queue.enqueue(2)

        expect(queue.dequeue()).toBe(1)
        expect(queue.dequeue()).toBe(2)
        expect(queue.dequeue()).toBeNull()
        expect(queue.isEmpty()).toBe(true)
    })
})