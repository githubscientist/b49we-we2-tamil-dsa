var push = function(sum, head) {
    if(head == null){
        head = new ListNode(sum);
    } else {
        let tail = head;
        while(tail.next != null){
            tail = tail.next
        }
        tail.next = new ListNode(sum);
    }

    return head;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // initialize the carry as 0
    let carry = 0

    // initialize a sum list
    let head = null;

    // traverse through the shorter linked list until we reach the tail node
    while(l1!=null && l2!=null){
        // add the nodes l1.val + l2.val + carry <- sum
        let sum = (l1.val + l2.val + carry)%10;

        // update the carry with the tens digit
        carry = parseInt((l1.val + l2.val + carry)/10);

        // and then insert the node (one's digit) as a tail in the sum list 
        head = push(sum, head);

        l1 = l1.next;
        l2 = l2.next;
    }
    
    // continue traversing through the longer list until we reach the tail
    while(l1!=null){
        let sum = (l1.val + carry)%10;
        carry = parseInt((l1.val + carry)/10);
        head = push(sum, head);
        l1 = l1.next;
    }

    while(l2!=null){
        let sum = (l2.val + carry)%10;
        carry = parseInt((l2.val + carry)/10);
        head = push(sum, head);
        l2 = l2.next;
    }

    // check if the carry is non-zero
    if(carry != 0){
        // create a new node with the data as the carry and insert it to the tail of the list
        head = push(carry, head);
    }
    
    // return the head of the sum list
    return head;
};