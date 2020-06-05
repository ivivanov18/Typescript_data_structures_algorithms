import { expect } from 'chai';
import { Queue } from '../queue';

describe('QUEUE DATA STRUCTURE', () => {
	it('Should create new Queue with size 0 and last equals first', () => {
		const queue = new Queue();
		expect(queue.size).to.be.equal(0);
		expect(queue.first).to.be.equal(queue.last);
		expect(queue.first).to.be.null;
	});
});
