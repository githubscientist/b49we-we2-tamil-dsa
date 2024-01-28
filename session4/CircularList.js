class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class CircularList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    toArray() {
        let nodes = [];
        let thead = this.head;

        if (this.head != null) {
            do {
                nodes.push(thead.data);
                thead = thead.next;
            } while (thead && thead != this.head);
        }

        return nodes;
    }

    length() {
        return this.toArray().length;
    }

    unshift(data) {
        let newNode = new Node(data);

        if (this.head == null) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.tail.next = newNode;
            this.head = newNode;
        }
    }

    shift() {
        // attempt to delete only if the list is not empty
        if (this.head != null) {
            if (this.head.next == this.head) {
                this.head = this.tail = null;
            } else {
                this.head = this.head.next;
                this.tail.next = this.head;
            }
        }
    }

    push(data) {
        let newNode = new Node(data);

        if (this.head == null) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = this.tail.next;
            this.tail.next = this.head;
        }
    }

    pop() {
        if (this.head != null) {
            if (this.head.next == this.head) {
                this.head = this.tail = null;
            } else {
                let ttail = this.head;
                while (ttail.next != this.tail) {
                    ttail = ttail.next;
                }
                this.tail = ttail;
                this.tail.next = this.head;
            }
        }
    }
}

let clist = new CircularList();

clist.unshift(3);
clist.unshift(4);
clist.unshift(5);

clist.shift();

clist.push(6);
clist.push(8);

// clist.pop();
// clist.pop();

console.log(clist.toArray());
console.log(clist.length());