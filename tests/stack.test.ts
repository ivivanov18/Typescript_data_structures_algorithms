import { Stack, StackNode } from '../stack';
import { expect } from 'chai';
// import mocha from 'mocha';

describe('STACK DATA STRUCTURE', () => {
	it('should create new stack with size 0 and first last equal', () => {
		const st = new Stack();
		expect(st.size).to.be.equal(0);
		expect(st.first).to.be.equal(st.last);
		expect(st.first).to.be.null;
	});

	it('should add one new node and return right size', () => {
		const st = new Stack();
		const size = st.push(100);
		expect(size).to.be.equal(1);
		expect(st.first!.value).to.be.equal(100);

		expect(st.push(1000)).to.be.equal(2);
		expect(st.pop()).to.be.equal(1000);
	});
});
