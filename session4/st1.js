// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

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

inp.on("close", () => {
    let words = userInput[0].split(' ');
    let stack = new Stack();

    for (let word of words) {
        // check if the stack is empty
        if (stack.isEmpty()) {
            stack.push(word);
        } else {
            // compare if the top of the stack and the word are equal
            if (stack.peek() === word) {
                stack.pop();
            } else {
                stack.push(word);
            }
        }
    }

    if (!stack.isEmpty()) {
        console.log(stack.items.join(' '));
    } else {
        console.log(-1);
    }
});