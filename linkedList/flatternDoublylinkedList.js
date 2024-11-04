class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
        this.child = null;
    }
}

function flatten(head) {
    if (!head) return head;

    let current = head;

    while (current !== null) {
        if (current.child) {
            // Save the next node
            let next = current.next;

            // Flatten the child list recursively
            let child = flatten(current.child);

            // Insert the flattened child list
            current.next = child;
            child.prev = current;
            current.child = null; // Unlink the child pointer

            // Traverse to the end of the flattened child list
            while (current.next !== null) {
                current = current.next;
            }

            // Reconnect with the next part of the original list
            if (next) {
                current.next = next;
                next.prev = current;
            }
        }
        current = current.next;
    }

    return head;
}

// Helper function to print the list
function printList(head) {
    let current = head;
    while (current !== null) {
        process.stdout.write(current.value + " ");
        current = current.next;
    }
    console.log();
}

// Example usage:
let head = new Node(1);
head.next = new Node(2);
head.next.prev = head;
head.next.next = new Node(3);
head.next.next.prev = head.next;

head.next.child = new Node(7);
head.next.child.next = new Node(8);
head.next.child.next.prev = head.next.child;
head.next.child.next.child = new Node(11);
head.next.child.next.child.next = new Node(12);
head.next.child.next.child.next.prev = head.next.child.next.child;

head.next.next.next = new Node(4);
head.next.next.next.prev = head.next.next;

console.log("Original List:");
printList(head);

let flattenedList = flatten(head);

console.log("Flattened List:");
printList(flattenedList);
