class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    addToList(key, value) {
        const node = new Node(key, value);
        if(!this.head) {
            this.head = node;
        } else {
            let current = this.head;
            while(current.next) {
                current = current.next;
            }
            current.next = node;
        }
    }
    getFromList(key) {
        let current = this.head;
        while(current) {
            if(current.key === key) {
                return current;
            }
            current = current.next;
        }
        return null;
    }
}
class hashMap {
    constructor() {
        this.loadfactor = 0.75;
        this.capacity = 16;
        this.buckets = new Array(this.capacity);
        this.size = 0;
    }
    hash(key) {
        let hashCode = 0;
        let primeNumber = 31;

        for(let i = 0; i < key.length; i++) {
            hashCode = 
            ( hashCode * primeNumber + key.charCodeAt(i) ) % this.capacity;
        }
        return hashCode;
    }
    set(key, value) {
        const hashValue = this.hash(key);
        if(this.buckets[hashValue] == null) {
            this.buckets[hashValue] = new LinkedList();
        }
        const list = this.buckets[hashValue];
        const existingNode = list.getFromList(key);
        if(existingNode) {
            existingNode.value = value;
        } else {
            list.addToList(key, value);
            this.size++;
        }
        let currentLoadFactor = this.size / this.capacity;
        if(currentLoadFactor > this.loadfactor) {
            this.resize();
        }
    }
    length() {
        return this.size;
    }
    entries() {
        const pairs = [];
        this.buckets.forEach(list => {
            if(list !== null) {
                let current = list.head;
                while(current !== null) {
                    pairs.push([current.key, current.value]);
                    current = current.next;
                }
            }
        });
        return pairs;
    }
    bucketsArray() {
        return this.buckets;
    }

}

export { hashMap }