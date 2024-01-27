/*
    LinkedList

    - data is stored in nodes
    - each node has a link to the next node
    - all the nodes will be connected as a chain
    - first node is called head
    - last node is called tail
    - the node's memory will not be in a continuous block
*/

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    toArray() {
        let nodes = [];
        let thead = this.head;

        while (thead != null) {
            nodes.push(thead.data);
            thead = thead.next;
        }

        return nodes;
    }

    // name: insertAtTail
    push(data) {
        // create a new node
        let newNode = new Node(data);

        // check if the list is empty
        if (this.head == null) {
            // the list is empty
            // the newNode is the head and tail node
            this.head = this.tail = newNode;
        } else {
            // the list is not empty
            this.tail.next = newNode;
            this.tail = this.tail.next;
        }
    }

    // name: deleteAtTail
    pop() {
        if (this.head != null) {
            // the list has some elements
            if (this.head.next == null) {
                // the list has only one element
                this.head = this.tail = null;
            } else {
                // the list has more than one element
                let thead = this.head;

                while (thead.next.next != null) {
                    thead = thead.next;
                }

                thead.next = null;
                this.tail = thead;
            }
        }
    }

    // name: insertAtHead
    unshift(data) {
        // create a new node
        let newNode = new Node(data);

        if (this.head == null) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;

            this.head = newNode;
        }
    }

    length() {
        // let i = 0;
        // let thead = this.head;
        // while (thead && thead != null) {
        //     i++;
        //     thead = thead.next;
        // }
        // return i;

        let count = 0;

        let temp = this.head;

        while (temp != null) {
            count++;
            temp = temp.next;
        }

        return count;
    }
}

let list = new LinkedList();

list.push(3);
list.push(5);
list.push(6);
list.push(7);

list.pop(); list.pop();

list.unshift(10);
list.unshift(11);
list.unshift(-1);

console.log(list.toArray());
console.log(`length of the list is ${list.length()}`);

/*
    list = LinkedList {
        head: Node {
            data: 4,
            next: Node {
                data: 5,
                next: null
            }
        }
    }
*/

/*
    Homework: https://leetcode.com/problems/add-two-numbers/description/
*/