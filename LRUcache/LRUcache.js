/*

Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

Follow up:
Could you do both operations in O(1) time complexity?

Example:

LRUCache cache = new LRUCache(2); // pass in the capacity

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4

*/


/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity
    this.queue = []
    this.indexes = {}
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (!this.indexes.hasOwnProperty(key)) {
        return -1
    }

    const selectedPair = this.indexes[key]
    const queueIndex = this.queue.indexOf(selectedPair)
    this.queue.splice(queueIndex, 1)
    this.queue.unshift(selectedPair)
    return selectedPair[1]
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.indexes.hasOwnProperty(key)) {    
        const queueIndex = this.queue.indexOf(this.indexes[key])
        this.queue.splice(queueIndex, 1)
        this.queue.unshift(this.indexes[key])
        this.indexes[key][1] = value
    } else {
        if (this.queue.length === this.capacity) {
            const keyToRemove = this.queue[this.queue.length - 1][0]
            this.queue.pop()
            delete this.indexes[keyToRemove]
        }

        const pair = [key, value]
        this.queue.unshift(pair)
        this.indexes[key] = pair
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */


/**
 * HELPERS
 **/



/**
 * TEST CASES
 **/

const cache = new LRUCache(2); // pass in the capacity

console.log(cache.put(1, 1));
console.log(cache.put(2, 2));
console.log(cache.get(1));       // returns 1
console.log(cache.put(3, 3));    // evicts key 2
console.log(cache.get(2));       // returns -1 (not found)
console.log(cache.put(4, 4));    // evicts key 1
console.log(cache.get(1));       // returns -1 (not found)
console.log(cache.get(3));       // returns 3
console.log(cache.get(4));       // returns 4
