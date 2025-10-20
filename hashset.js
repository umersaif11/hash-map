class Node {
    constructor(key) {
        this.key = key;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    addToList(key) {
        const node = new Node(key);
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
class hashSet {
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
    set(key) {
        const hashValue = this.hash(key);
        if(!this.buckets[hashValue]) {
            this.buckets[hashValue] = new LinkedList();
        }
        const list = this.buckets[hashValue];
        const existingNode = list.getFromList(key);
        if(existingNode) {
            return;
        } else {
            list.addToList(key);
            this.size++;
        }
        let currentLoadFactor = this.size / this.capacity;
        if(currentLoadFactor > this.loadfactor) {
            this.resize();
        }
    }
    resize() {
        const oldBucket = this.buckets;
        this.capacity = this.capacity * 2;
        this.buckets = new Array(this.capacity);
        this.size = 0;
        oldBucket.forEach(list => {
            if(list) {
                let current = list.head;
                while(current) {
                    this.set(current.key);
                    current = current.next;
                }
            }
        })
    }
    has(key) {
        const hashValue = this.hash(key);
        const list = this.buckets[hashValue];
        if(list) {
            let current = list.head;
            while(current) {
                if(current.key === key) {
                    return true;
                }
                current = current.next;
            }
        }
        return false;
    }
    remove(key) {
        const hashValue = this.hash(key);
        const list = this.buckets[hashValue];
        if(list != null) {
            let current = list.head;
            let previous;
            if(current == null) {
                return false;
            }
            if(current.key === key) {
                list.head = current.next;
                this.size--;
                return true;
            }
            while(current) {
                if(current.key === key) {
                    previous.next = current.next;
                    this.size--;
                    return true;
                }
                previous = current;
                current = current.next;
            }
        }
        return false;
    }
    length() {
        return this.size;
    }
    clear() {
        this.buckets = new Array(this.capacity);
        this.size = 0;
    }
    keys() {
        const keys = [];
        this.buckets.forEach(list => {
            if(list) {
                let current = list.head;
                while(current) {
                    keys.push(current.key);
                    current = current.next;
                }
            }
        });
        return keys;
    }
    bucketsArray() {
        return this.buckets;
    }

}

export { hashSet }