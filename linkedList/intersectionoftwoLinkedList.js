class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function getIntersectionNode(headA, headB) {
    if (!headA || !headB) return null;

    let lengthA = 0;
    let lengthB = 0;

    let currentA = headA;
    let currentB = headB;

    // Calculate the length of list A
    while (currentA) {
        lengthA++;
        currentA = currentA.next;
    }

    // Calculate the length of list B
    while (currentB) {
        lengthB++;
        currentB = currentB.next;
    }

    // Reset pointers to the start of each list
    currentA = headA;
    currentB = headB;

    // Advance the pointer of the longer list by the difference in lengths
    if (lengthA > lengthB) {
        for (let i = 0; i < lengthA - lengthB; i++) {
            currentA = currentA.next;
        }
    } else {
        for (let i = 0; i < lengthB - lengthA; i++) {
            currentB = currentB.next;
        }
    }

    // Traverse both lists together to find the intersection point
    while (currentA && currentB) {
        if (currentA === currentB) {
            return currentA; // Intersection point
        }
        currentA = currentA.next;
        currentB = currentB.next;
    }

    return null; // No intersection
}

// Example usage:

// List A: 1 -> 9 -> 1
//                    \
//                     2 -> 4
//                    /
// List B:     3 -> 2 -> 4

let headA = new ListNode(1);
headA.next = new ListNode(9);
headA.next.next = new ListNode(1);
headA.next.next.next = new ListNode(2);
headA.next.next.next.next = new ListNode(4);

let headB = new ListNode(3);
headB.next = headA.next.next.next; // Intersection at node with value 2

let intersectionNode = getIntersectionNode(headA, headB);

if (intersectionNode) {
    console.log("Intersection at node with value:", intersectionNode.value);
} else {
    console.log("No intersection.");
}
