class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    peek() {
        if (this.top != null) {
            return this.top.data;
        }
    }

    push(data) {
        let newNode = new Node(data);
        if (this.top == null) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
    }

    pop() {
        if (this.top != null) {
            this.top = this.top.next;
        }
    }

    isEmpty() {
        return this.top == null;
    }
}

let stack = new Stack();

stack.push(5);
stack.push(6);
stack.push(7);

stack.pop();

console.log(stack.peek());