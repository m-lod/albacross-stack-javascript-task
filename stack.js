class Stack {
  constructor(...args) {
    this.data = args;
    this.size = this.data.length;
  }

  isEmpty() {
    return this.size === 0;
  }

  push(elements) {
    this.data.push(elements);
    this.size = this.data.length;
    return this.data;
  }

  pop() {
    if (this.size === 0) return null;

    this.size = this.size - 1;
    return this.data.pop();
  }

  peek() {
    return this.data[this.size - 1];
  }

  swap() {
    const first = this.data[this.size - 1];
    const second = this.data[this.size - 2];

    this.data[this.size - 1] = second;
    this.data[this.size - 2] = first;
  }
}

module.exports = Stack;
