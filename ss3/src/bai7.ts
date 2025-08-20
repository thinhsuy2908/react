let input: string = "banana";
function removeDuplicates(str: string): string {
    let result = "";
    for (let char of str) {
        if (!result.includes(char)) {
            result += char;
        }
    }
    return result;
}
console.log(removeDuplicates(input)); // 
console.log(removeDuplicates("hello world")); 