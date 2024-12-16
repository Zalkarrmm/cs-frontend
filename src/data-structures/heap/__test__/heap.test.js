import Heap from "../Heap";

describe('Heap', () => {
    it('should throw error on attemp to create heap directly from base class', () => {
        const initialHeap = () => {
            const heap = new Heap()
            heap.add(5)
        }

        expect(initialHeap).toThrow()
    })
})