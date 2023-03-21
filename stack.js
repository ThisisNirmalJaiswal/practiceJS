class Stack {
    constructor() {
        this.items = [];
        this.maxSize = 6;
    }

    // add element to the stack
    add(element) {
        return this.items.push(element);
    }

    // remove element from the stack
    remove() {
        if (this.items.length > 0) {
            return this.items.pop();
        }
    }

    // view the last element
    peek() {
        return this.items[this.items.length - 1];
    }

    // check if the stack is Empty
    isEmpty() {
        return this.items.length == 0
    }

    isFull() {
        return this.items.length == this.maxSize;
    }

    size() {
        return this.items.length;
    }

    clear() {
        this.items = [];
    }
}

let myStack = new Stack();
myStack.add(4)
myStack.add(4)
myStack.add(4)
myStack.add(4)
myStack.add(4)
myStack.add(4)
// myStack.clear();
console.log(myStack.isFull());

/*
1. Define Stack?What are the operations that can be performed on stacks?Explain why Stack is a recursive data structure?

In computer science, a stack is an abstract data type that represents a collection of elements that are organized in a last-in, first-out (LIFO) manner. 
It is like a pile of plates, where the last plate placed on top of the stack is the first one to be removed.

The basic operations that can be performed on a stack are:

1. Push: Adds an element to the top of the stack.
2. Pop: Removes and returns the top element of the stack.
3. Peek or Top: Returns the top element of the stack without removing it.
4. IsEmpty: Returns true if the stack is empty.
5. Size: Returns the number of elements in the stack.


Stacks are recursive data structures because they can be defined in terms of themselves. 
A stack consists of a top element and the rest of the stack, which is another stack. 
This recursive definition allows us to implement stacks using recursion. 
For example, a recursive function can be used to reverse the order of a stack by repeatedly popping the top element and calling the function recursively on the rest of the stack.

In addition, many programming languages use a stack to keep track of function calls and local variables. 
When a function is called, its arguments and return address are pushed onto the stack, and when the function returns, they are popped off the stack. 
This is known as the call stack, and it is an essential part of many programming languages.

*/ 


/*
2. Why and when should I use Stack or Queue data structures instead of Arrays/Lists?
There are several reasons why you might want to use a stack or a queue data structure instead of an array or a list. Here are some of the most common ones:

a. Last-in, First-out (LIFO) or First-in, First-out (FIFO) ordering: Stacks and queues have a specific ordering of elements that may be more appropriate for certain algorithms or data processing tasks. For example, if you need to reverse the order of elements, you can use a stack. If you need to process elements in the order they were added, you can use a queue.
*/





