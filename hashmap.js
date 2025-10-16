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
    }
}
class hashMap {
    constructor() {
        this.loadfactor = 0.75;
        this.capacity = 16;
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
}

export { hashMap }