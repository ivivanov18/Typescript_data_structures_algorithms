export class StackNode {
	value: number | null;
	next: StackNode | null;
	constructor(value: number) {
		this.value = value;
		this.next = null;
	}
}

export class Stack {
	first: StackNode | null;
	last: StackNode | null;
	size: number;
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	push(value: number): number {
		const newStackNode = new StackNode(value);
		if (!this.first) {
			this.first = newStackNode;
			this.last = newStackNode;
		} else {
			const temp = this.first;
			this.first = newStackNode;
			this.first.next = temp;
		}
		return ++this.size;
	}

	pop(): number | null {
		if (!this.first) return null; // empty list
		let temp = this.first; // returned
		if (this.first == this.last) {
			// one thing in stack
			this.last = null;
		}
		this.first = this.first.next;
		this.size--;
		return temp.value;
	}

	print() {
		let current = this.first;
		while (current != null) {
			console.log('--------');
			console.log('|  ' + current.value);
			current = current.next;
		}
		console.log('--------');
	}
}
