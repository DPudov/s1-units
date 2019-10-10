import React from 'react'
import {sortTypes, sortByItemNames,
	sortByItemCount, sortByDate, sortOrders} from './sortOrders';

describe('sortByItemCount function', () => {
	it('orders are null', () => {
		const result = sortByItemCount(null, null);
		expect(result).toEqual(0);
	});

	it('orders are not objects', () => {
		const result = sortByItemCount(1, 3);
		expect(result).toEqual(0);
	});

	it('same items count', () => {
		const order1 = {
			items: ['item1', 'item2'],
		};

		const order2 = {
			items: ['1', '2'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(0);
	});

	it('first bigger', () => {
		const order1 = {
			items: ['item1', 'item2', 'item3', 'item4'],
		};

		const order2 = {
			items: ['1', '2'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(1);
	});

	it('second bigger', () => {
		const order2 = {
			items: ['item1', 'item2', 'item3', 'item4'],
		};

		const order1 = {
			items: ['1', '2'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(-1);
	});
});

describe('sortOrders function', () => {
	it('orders are null', () => {
		const result = sortOrders(null, sortTypes.ITEM_NAMES);
		expect(result).not.toBeTruthy();
	})

	it('orders with no type', () => {
		const order1 = {
			items: ['1', '2']
		};

		const order2 = {
			items: ['3', '4']
		};

		const orders = [order1, order2];

		const result = sortOrders(orders, null);
		expect(result).not.toBeTruthy();

		expect(orders).toEqual(orders);
	});


	it('orders are null, no type', () => {
		const result = sortOrders(null, null);
		expect(result).not.toBeTruthy();
	});

	it('sort by names', () => {
		const order1 = {
			items: ['2', '1']
		};

		const order2 = {
			items: ['3', '4', '1']
		};

		const orders = [order2, order1];

		const valid = [order1, order2];

		const result = sortOrders(orders, sortTypes.ITEM_NAMES);

		expect(result).toBeTruthy();
		expect(orders).toEqual(valid);
	});

	it('sort by date', () => {
		const order1 = {
			date: 16
		};

		const order2 = {
			date: 14
		};

		const orders = [order2, order1];

		const valid = [order1, order2];

		const result = sortOrders(orders, sortTypes.DATE);

		expect(orders).toEqual(valid);
		expect(result).toBeTruthy();
	});

	it('sort by count', () => {
		const order1 = {
			items: ['2', '1']
		};

		const order2 = {
			items: ['3', '4', '1']
		};

		const orders = [order2, order1];

		const valid = [order1, order2];

		const result = sortOrders(orders, sortTypes.COUNT);

		expect(orders).toEqual(valid);
		expect(result).toBeTruthy();
	});
});

describe('sortByDate function', () => {
	it('orders are null', () => {
		const result = sortByDate(null, null);
		expect(result).toEqual(0);
	});

	it('first bigger', () => {
		const order1 = {
			date: 15
		};

		const order2 = {
			date: 14
		};

		const result = sortByDate(order1, order2);
		expect(result).toEqual(-1);
	});

	it('second bigger', () => {
		const order1 = {
			date: 15
		};

		const order2 = {
			date: 200
		};

		const result = sortByDate(order1, order2);
		expect(result).toEqual(1);
	});
	it('dates equal', () => {
		const order1 = {
			date: 15
		};

		const order2 = {
			date: 15
		};

		const result = sortByDate(order1, order2);
		expect(result).toEqual(0);
	});
});
