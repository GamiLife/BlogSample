import { isOposite } from '..';
import { TDirections } from '../../components/grid/grid';
import { Node } from './Node';

export class LinkedList<T> {
  head: Node<T> | null;
  tail: Node<T> | null;
  length: number;

  currentDirection: TDirections | null = null;

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

  moveAddingNewValuesToTail(valueForNewTail: T, currentDirection: TDirections) {
    if (!this.length) return this;
    if (!this.head) return this;
    if (!this.tail) return this;

    const shouldBeReversed = isOposite(this.currentDirection, currentDirection);
    this.currentDirection = currentDirection;

    if (this.length === 1) {
      this.head.value = valueForNewTail;
      this.tail.value = valueForNewTail;
      return this;
    }

    if (shouldBeReversed) {
      this.reverse();
    }

    let secondItem = this.head.next;
    this.head.next = null;

    if (this.tail) {
      this.tail.next = this.head;
    }
    this.tail = this.head;
    this.tail.value = valueForNewTail;

    this.head = secondItem;

    return this;
  }

  reverse() {
    if (!this.length) return this;
    if (this.length === 1) return this;

    let prev = null;
    let current = this.head;
    let next = null;

    let tempTail = null;
    let tempHead = null;

    for (let i = 0; i < this.length; i++) {
      next = current?.next || null;
      if (current) current.next = prev;
      prev = current;
      if (i === 0) {
        tempTail = prev;
      }
      if (this.length - 1 === i) {
        tempHead = prev;
      }
      current = next;
    }

    this.tail = null;
    this.head = null;

    this.tail = tempTail;
    this.head = tempHead;

    return this;
  }

  resizeAddingNewValueToNewHead(
    valuesForHead: T,
    currentDirection: TDirections | null
  ) {
    if (!this.length || !this.head) {
      return this.push(valuesForHead);
    }

    const shouldBeReversed = isOposite(this.currentDirection, currentDirection);
    this.currentDirection = currentDirection;

    if (shouldBeReversed) {
      this.reverse();
    }

    return this.push(valuesForHead);
  }
}
