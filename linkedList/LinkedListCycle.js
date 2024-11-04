class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function hasCycle(head) {
    if (!head || !head.next) {
        return false; // No cycle if list is empty or has only one node
    }

    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;       // Move slow pointer by 1 step
        fast = fast.next.next;  // Move fast pointer by 2 steps

        if (slow === fast) {
            return true; // Cycle detected
        }
    }

    return false; // No cycle
}

// Example usage:

// Creating a list with a cycle:
// List: 1 -> 2 -> 3 -> 4 -> 5
//                ^         |
//                |_________|

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
head.next.next.next.next.next = head.next.next; // Creating a cycle

console.log(hasCycle(head)); // Output: true

// Creating a list without a cycle:
// List: 1 -> 2 -> 3 -> 4 -> 5 -> null

let head2 = new ListNode(1);
head2.next = new ListNode(2);
head2.next.next = new ListNode(3);
head2.next.next.next = new ListNode(4);
head2.next.next.next.next = new ListNode(5);

console.log(hasCycle(head2)); // Output: false
