import React from 'react'
import {getDate} from './getDate.js';

describe('getDate testing', () => {
    it('null timestamp', () => {
        const result = getDate(null);
        expect(result).toEqual('1 января, чт, 1970 год')
    });
    it('My birthday timestamp', () => {
        const result = getDate(new Date(1999, 11, 9));
        expect(result).toEqual('9 декабря, чт, 1999 год')
    });
    it('not valid timestamp', () => {
        const result = getDate(-1);
        expect(result).toBe(undefined);
    });
});
