const checkParity = a => {
    if (typeof a !== 'number' || isNaN(a)) {
        return `${a} not is number`;
    }
    return a % 2 === 0
        ? `${a} is an even number`
        : `${a} is odd`;
};

// Ví dụ sử dụng:
console.log(checkParity('abc')); // abc not is number
console.log(checkParity(10));    // 10 is an even number
console.log(checkParity(7));     // 7 is