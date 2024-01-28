class Node {
    constructor(data) {
        this.prev = null;
        this.data = data;
        this.next = null;
    }
}

class DoubleList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    toArray() {
        let thead = this.head;
        let nodes = [];

        while (thead != null) {
            nodes.push(thead.data);
            thead = thead.next;
        }

        return nodes;
    }

    unshift(data) {
        let newNode = new Node(data);

        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }

    push(data) {
        let newNode = new Node(data);

        if (this.head == null) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = this.tail.next;
        }
    }

    shift() {
        // check if the list is not empty
        if (this.head != null) {
            // check if the list has only one node
            if (this.head.next == null) {
                this.head = this.tail = null;
            } else {
                // list has more than one node
                this.head = this.head.next;
            }
        }
    }

    pop() {
        if (this.head != null) {
            if (this.head.next == null) {
                this.head = this.tail = null;
            } else {
                let ttail = this.tail.prev;
                ttail.next = null;
                this.tail = ttail;
            }
        }
    }
}

let dlist = new DoubleList();

// insert a node at the head of the list
dlist.unshift(5);
dlist.unshift(4);
dlist.unshift(3);
dlist.unshift(2);

// insert a node at the tail of the list
dlist.push(6);
dlist.push(7);

// remove the head node
dlist.shift(); dlist.shift();

// remove the tail node
dlist.pop();dlist.pop();

console.log(dlist.toArray());