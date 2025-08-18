function insertArrayAt(arr1, arr2, position) {
    if (
        !Array.isArray(arr1) ||
        !Array.isArray(arr2) ||
        typeof position !== 'number' ||
        position < 0 ||
        position > arr1.length
    ) {
        console.log('Vị trí chèn không hợp lệ!');
        return;
    }
    // Sử dụng spread operator để chèn arr2 vào arr1 tại vị trí position
    const result = [
        ...arr1.slice(0, position),
        ...arr2,
        ...arr1.slice(position)
    ];
    return result;
}

// Ví dụ sử dụng:
console.log(insertArrayAt([1,2,3,7,8], [4,5,6], 3)); // [1,2,3,4,5,6,7,8]
console.log(insertArrayAt(['a','b','e','f'], ['c','d'], 2)); // ['a','b','c','d','e','f']
console.log(insertArrayAt([1,2,3], [4,5], 10)); // Vị trí chèn không