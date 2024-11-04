// Designing a hit counter involves creating a system that tracks the number of hits (or requests) received in the past 5 minutes (300 seconds). This problem can be solved efficiently using a combination of a queue and a timestamp system.

// Here’s a step-by-step approach to designing a hit counter:

// Problem Statement:
// Design a hit counter that counts the number of hits received in the past 5 minutes. Implement the following methods:

// hit(timestamp): Records a hit at a given timestamp (in seconds).
// getHits(timestamp): Returns the number of hits received in the past 5 minutes from the given timestamp.
// Constraints:
// The timestamp parameter is in seconds and is monotonically increasing.
// You need to ensure that the getHits method runs efficiently.

class HitCounter {
    constructor() {
        this.queue = [];  // Queue to store [timestamp, hit count]
    }

    // Record a hit at the given timestamp
    hit(timestamp) {
        if (this.queue.length === 0 || this.queue[this.queue.length - 1][0] !== timestamp) {
            // If the queue is empty or the last entry's timestamp isn't the current one, add a new entry
            this.queue.push([timestamp, 1]);
        } else {
            // Otherwise, increment the last entry's hit count
            this.queue[this.queue.length - 1][1]++;
        }
    }

    // Return the number of hits in the past 5 minutes
    getHits(timestamp) {
        // Remove hits that are older than 5 minutes (300 seconds)
        while (this.queue.length > 0 && timestamp - this.queue[0][0] >= 300) {
            this.queue.shift();
        }

        // Sum up the hits in the remaining queue
        let totalHits = 0;
        for (const [time, count] of this.queue) {
            totalHits += count;
        }

        return totalHits;
    }
}

// Example usage:
const counter = new HitCounter();
counter.hit(1);
counter.hit(2);
counter.hit(3);
console.log(counter.getHits(4));   // Output: 3
counter.hit(300);
console.log(counter.getHits(300)); // Output: 4
console.log(counter.getHits(301)); // Output: 3 (as the hit at timestamp 1 is out of the 5-minute window)
