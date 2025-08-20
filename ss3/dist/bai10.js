// Khai báo biến kiểu string với một câu bất kỳ
let sentence = "hello world apple banana orange pumpkin cucumber";
// Hàm kiểm tra một từ có các ký tự trùng nhau không
function hasUniqueChars(word) {
    let charSet = new Set();
    for (let char of word) {
        if (charSet.has(char))
            return false;
        charSet.add(char);
    }
    return true;
}
// Tìm từ dài nhất không có ký tự trùng nhau
function longestUniqueWord(sentence) {
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
