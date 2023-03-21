
// implemention of queue data Structure
class Queue {
    constructor() {
        this.items = [];
        this.maxSize = 6;
    }

    // add element to the queue
    enqueue(element) {
        return this.items.push(element);
    }

    // remove element from the queue
    dequeue() {
        if(this.items.length > 0){
            return this.items.shift();
        }
    }

    // view the front element
    peek(){
        return this.items[0];
    }

    // check the queue is empty or not
    isEmpty(){
        return this.items.length === 0;
    }

    // checking that queue is full or not
    isFull(){
        return this.items.length == this.maxSize;
    }

    // size of the queue
    size(){
        return this.items.length;
    }

    // empty the queue
    clear(){
        this.items = [];
    }
}


let queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);

console.log(queue.items);

queue.dequeue();
console.log(queue.items);
console.log(queue.peek());
console.log(queue.isEmpty());
console.log(queue.size());
console.log(queue.isFull());
// queue.clear()
console.log(queue.items);

