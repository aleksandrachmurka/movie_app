import formatTime from './formatTime.js';
import formatData from './formatDate.js';
import setInputValue from './setInputValue.js';

describe('formatting data', ()=> {
	it('should return proper data format', ()=>{
		const expected = '18.05.2018';
		expect(formatData('2018-05-18T08:04:53.000Z')).toBe(expected);
	});
	it('should return false when no date', ()=>{
		const expected = false;
		expect(formatTime()).toBe(expected);
	});
});

describe('formatting time', ()=>{
	it('should return proper time format', ()=>{
		const expected = '01:00';
		expect(formatTime(500)).toBe(expected);
	});
	it('should return false when no time', ()=>{
		const expected = false;
		expect(formatTime()).toBe(expected);
	});
});

describe('setting input value', ()=>{
	it('should return 0 when value is undefined', ()=>{
		const expected = '0';
		expect(setInputValue()).toBe(expected);
	});
	it('should return 0 when value is null', ()=>{
		const expected = '0';
		expect(setInputValue(null)).toBe(expected);
	});
	it('should return first element when value is an array', ()=>{
		const expected = '1';
		expect(setInputValue([1,2,3])).toBe(expected);
	});
	it('should return string', ()=>{
		const expected = '5';
		expect(setInputValue(5)).toBe(expected);
	});

});


