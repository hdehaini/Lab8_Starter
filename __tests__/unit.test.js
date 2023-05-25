// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2


// Testing Phone Numbers
test('Phone Number Test 1 - true', () => {
    expect(functions.isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('Phone Number Test 2 - true', () => {
    expect(functions.isPhoneNumber('456-123-7565')).toBe(true);
});

test('Phone Number Test 3 - false', () => {
    expect(functions.isPhoneNumber('(1111) 12-50054')).toBe(false);
});

test('Phone Number Test 4 - false', () => {
    expect(functions.isPhoneNumber('7 12-123')).toBe(false);
});



// Testing Emails
test('Email Test 1 - true', () => {
    expect(functions.isEmail('hdehaini@ucsd.edu')).toBe(true);
});

test('Email Test 2 - true', () => {
    expect(functions.isEmail('testperson@example.com')).toBe(true);
});

test('Email Test 3 - false', () => {
    expect(functions.isEmail('@example.com')).toBe(false);
});

test('Email Test 4 - false', () => {
    expect(functions.isEmail('test.com')).toBe(false);
});



// Testing Passwords
test('Passwords Test 1 - true', () => {
    expect(functions.isStrongPassword('skajsdhfk101')).toBe(true);
});

test('Passwords Test 2 - true', () => {
    expect(functions.isStrongPassword('AkjdshDJ324')).toBe(true);
});

test('Passwords Test 3 - false', () => {
    expect(functions.isStrongPassword('110011')).toBe(false);
});

test('Passwords Test 4 - false', () => {
    expect(functions.isStrongPassword('ab')).toBe(false);
});



// Testing Dates
test('Dates Test 1 - true', () => {
    expect(functions.isDate('03/14/2015')).toBe(true);
});

test('Dates Test 2 - true', () => {
    expect(functions.isDate('7/22/2023')).toBe(true);
});

test('Dates Test 3 - false', () => {
    expect(functions.isDate('14/38/23')).toBe(false);
});

test('Dates Test 4 - false', () => {
    expect(functions.isDate('03-14-2015')).toBe(false);
});



// Testing Hex Colors
test('Hex Colors Test 1 - true', () => {
    expect(functions.isHexColor('5464FF')).toBe(true);
});

test('Hex Colors Test 2 - true', () => {
    expect(functions.isHexColor('123')).toBe(true);
});

test('Hex Colors Test 3 - false', () => {
    expect(functions.isHexColor('AA')).toBe(false);
});

test('Hex Colors Test 4 - false', () => {
    expect(functions.isHexColor('FFFFFFF')).toBe(false);
});