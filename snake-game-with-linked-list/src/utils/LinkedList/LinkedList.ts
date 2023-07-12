import { Node } from './Node';

export class LinkedList {
  head: Node | null;
  tail: Node | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value: any) {
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

  get(index: number) {
    const isInvalidIndex = index < 0 || index > this.length;
    if (isInvalidIndex) {
      return null;
    }

    let node: Node | null = this.head;
    for (let i = 0; i < index + 1; i++) {
      if (!node) continue;
      node = node.next;
    }
    return node;
  }

  set(index: number, value: any) {
    const node = this.get(index);
    if (!node) return this;

    node.value = value;
    return this;
  }
}
