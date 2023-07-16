import { Node } from './Node';

export class LinkedList<T> {
  head: Node<T> | null;
  tail: Node<T> | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value: T) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      if (this.tail) {
        this.tail.next = node;
      }
      this.tail = node;
    }

    this.length++;
    return this;
  }

  add(value: T, index?: number) {
    if (!this.head) return this.push(value);
    if (index === undefined) return this.push(value);
    if (index < 0) return this;

    const isLast = index >= this.length;
    if (isLast) return this.push(value);

    const node = new Node(value);

    const isFirstOne = index === 0;
    if (isFirstOne) {
      const nextOne = this.head.next;
      this.head = node;
      this.head.next = nextOne;

      this.length++;
      return this;
    }

    let currentNode: Node<T> | null = this.head;
    for (let i = 0; i < index; i++) {
      if (i === index - 1 && !currentNode?.next) {
        const temp = currentNode.next;
        node.next = temp;
        currentNode.next = node;
      }
    }

    this.length++;
    return this;
  }

  get(index: number) {
    const isInvalidIndex = index < 0 || index > this.length;
    if (isInvalidIndex) {
      return null;
    }

    let node: Node<T> | null = this.head;
    for (let i = 0; i < index + 1; i++) {
      if (!node) continue;
      node = node.next;
    }
    return node;
  }

  set(index: number, value: T) {
    const node = this.get(index);
    if (!node) return this;

    node.value = value;
    return this;
  }

  removeTailAddingNewValuesToHead(valueForNewHead: T) {
    if (!this.length) return this;
    if (!this.head) return this;

    if (this.length === 1) {
      this.head.value = valueForNewHead;
      return this;
    }

    let currentHead = this.head;
    let node: Node<T> = this.head;
    for (let i = 0; i < this.length; i++) {
      const isLastBefore = node?.next && !node.next?.next;
      if (isLastBefore) {
        if (node.next) {
          node.next.next = currentHead;
          node.next.value = valueForNewHead;
          this.head = node.next;
        }

        node.next = null;
        this.tail = node;
      }

      if (node.next) node = node.next;
    }

    return this;
  }

  //TODO: Add New value to new head algorithm
  addNewValueToNewHead(valuesForHead: T) {
    if (!this.length || !this.head) {
      return this.push(valuesForHead);
    }
    return this;
  }
}
