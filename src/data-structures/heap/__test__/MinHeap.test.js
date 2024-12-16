import MinHeap from "../MinHeap";
import Comparator from "../../../utils/comparator";

describe('MinHeap', () => {
    it('should create min-heap', () => {
        const minHeap = new MinHeap()

        expect(minHeap).toBeDefined()
        expect(minHeap.peek()).toBeNull()
        expect(minHeap.isEmpty()).toBe(true)
    })

    it('should elements in heap and heapify up', () => {
        const minHeap = new MinHeap()

        minHeap.add(5)
        expect(minHeap.isEmpty()).toBe(false)
        expect(minHeap.peek()).toBe(5)
        expect(minHeap.toString()).toBe('5')


        minHeap.add(3)
        expect(minHeap.peek()).toBe(3)
        expect(minHeap.toString()).toBe('3,5')

        minHeap.add(10)
        expect(minHeap.peek()).toBe(3)
        expect(minHeap.toString()).toBe('3,5,10')


        minHeap.add(1)
        expect(minHeap.peek()).toBe(1)
        expect(minHeap.toString()).toBe('1,3,10,5')

        minHeap.add(1)
        expect(minHeap.peek()).toBe(1)
        expect(minHeap.toString()).toBe('1,1,10,5,3')

        expect(minHeap.poll()).toBe(1)
        expect(minHeap.toString()).toBe('1,3,10,5')

        expect(minHeap.poll()).toBe(1)
        expect(minHeap.toString()).toBe('3,5,10')

        expect(minHeap.poll()).toBe(3)
        expect(minHeap.toString()).toBe('5,10')
    })

    it('should return an elements from heap and heapifyDown', () => {
        const minHeap = new MinHeap()

        minHeap.add(5)
        minHeap.add(3)
        minHeap.add(10)
        minHeap.add(11)
        minHeap.add(1)


        expect(minHeap.toString()).toBe('1,3,10,11,5')

        expect(minHeap.poll()).toBe(1)
        expect(minHeap.toString()).toBe('3,5,10,11')

        expect(minHeap.poll()).toBe(3)
        expect(minHeap.toString()).toBe('5,11,10')

        expect(minHeap.poll()).toBe(5)
        expect(minHeap.toString()).toBe('10,11')

        expect(minHeap.poll()).toBe(10)
        expect(minHeap.toString()).toBe('11')

        expect(minHeap.poll()).toBe(11)
        expect(minHeap.toString()).toBe('')

        expect(minHeap.poll()).toBeNull()
        expect(minHeap.toString()).toBe('')
    })

    it('should heapifyDown by correct branch', () => {
        const minHeap = new MinHeap()

        minHeap.add(3)
        minHeap.add(12)
        minHeap.add(10)

        expect(minHeap.toString()).toBe('3,12,10')

        minHeap.add(11)
        expect(minHeap.toString()).toBe('3,11,10,12')

        expect(minHeap.poll()).toBe(3)
        expect(minHeap.toString()).toBe('10,11,12')
    })

    it('should find indexes of element', () => {
        const minHeap = new MinHeap()

        minHeap.add(3)
        minHeap.add(12)
        minHeap.add(10)
        minHeap.add(11) 
        minHeap.add(11)

        expect(minHeap.toString()).toBe('3,11,10,12,11')

        expect(minHeap.find(5)).toEqual([])
        expect(minHeap.find(3)).toEqual([0])
        expect(minHeap.find(11)).toEqual([1, 4])
    })

    it('should remove elements from heap and heapifyDown', () => {
        const minHeap = new MinHeap()

        minHeap.add(3)
        minHeap.add(12)
        minHeap.add(10)
        minHeap.add(11)
        minHeap.add(11)

        expect(minHeap.toString()).toBe('3,11,10,12,11')

        expect(minHeap.remove(3).toString()).toEqual('10,11,11,12')
        expect(minHeap.remove(3).peek()).toEqual(10)
        expect(minHeap.remove(11).toString()).toEqual('10,12')
        expect(minHeap.remove(3).peek()).toEqual(10)
    })
})