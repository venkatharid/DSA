class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function mergeTwoLists(l1, l2) {
    // Create a dummy node to act as the starting point of the merged list
    let dummy = new ListNode(-1);
    let current = dummy;

    // Iterate while both lists have nodes
    while (l1 !== null && l2 !== null) {
        if (l1.val <= l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }

    // If one list is exhausted, attach the remaining nodes of the other list
    if (l1 !== null) {
        current.next = l1;
    } else {
        current.next = l2;
    }

    // Return the merged list, which starts at dummy.next
    return dummy.next;
}

// Example usage:

let l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(4);

let l2 = new ListNode(1);
l2.next = new ListNode(3);
l2.next.next = new ListNode(4);

let mergedList = mergeTwoLists(l1, l2);

let current = mergedList;
while (current) {
    console.log(current.val);  // Output: 1 1 2 3 4 4
    current = current.next;
}
