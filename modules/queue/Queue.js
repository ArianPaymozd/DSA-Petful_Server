class _Node {
  constructor(value) {
      this.value = value;
      this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
        this.first = node;
    }

    if (this.last) {
        this.last.next = node;
    }
    //make the new node the last item on the queue
    this.last = node;
  }

  dequeue() {
    //if the queue is empty, there is nothing to return
   if (this.first === null) {
       return;
   }
   const node = this.first;
   
    //if this is the last item in the queue
   if (node === this.last) {
       this.last = null;
   }
   this.first = this.first.next;
   return [node.value, this.first.value];
  }

  show() {
    return this.first
  }

  all() {
    let results = []
    let node = this.first
    while (node.next !== null) {
      results.push(node.value)
      node = node.next
    }
    if (node.next === null) {
      results.push(node.value)
    }
    return results
  }
}

module.exports = Queue
