class Stack {
    constructor() {
        this.items = [];
        this.top = -1;
    }

    push(data) {
        this.items.push(data);
        this.top++;
    }

    isEmpty() {
        return this.top == -1;
    }

    pop() {
        if (!this.isEmpty()) {
            this.items.pop();
            this.top--;
        }
    }

    peek() {
        if (!this.isEmpty()) {
            return this.items[this.top];
        }
    }
}

let stack = new Stack();

stack.push(4);
stack.push(5);

stack.push(6);
stack.pop();
// stack.pop();

console.log(stack.peek());