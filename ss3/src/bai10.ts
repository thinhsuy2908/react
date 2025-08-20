// Khai báo biến kiểu string với một câu bất kỳ
let sentence: string = "hello world apple banana orange pumpkin cucumber";

// Hàm kiểm tra một từ có các ký tự trùng nhau không
function hasUniqueChars(word: string): boolean {
    let charSet = new Set<string>();
    for (let char of word) {
        if (charSet.has(char)) return false;
        charSet.add(char);
    }
    return true;
}

// Tìm từ dài nhất không có ký tự trùng nhau
function longestUniqueWord(sentence: string): string {
    let words = sentence.split(" ");
    let longest = "";
    for (let word of words) {
        if (hasUniqueChars(word) && word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}

console.log(longestUniqueWord(sentence)); //