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
                if(current.key === key) {
                    current.value = value;
                    return;
                }
                current = current.next;
            }
        }
        current.next = node;
    }
    getFromList(key) {
        let current = this.head;
        while(current.next) {
            if(current.key === key) {
                return current.value;
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