function analyzeStudent(grades) {
    const scores = Object.values(grades);
    const avg = +(scores.reduce((sum, score) => sum + score, 0) / scores.length).toFixed(2);

    let rank = "";
    if (avg >= 8.5) rank = "Học sinh giỏi";
    else if (avg >= 7) rank = "Học sinh khá";
    else if (avg >= 5) rank = "Học sinh trung bình";
    else rank = "Học sinh yếu";

    let bestSubject = "", worstSubject = "";
    let maxScore = -Infinity, minScore = Infinity;
    for (const [subject, score] of Object.entries(grades)) {
        if (score > maxScore) {
            maxScore = score;
            bestSubject = subject;
        }
        if (score < minScore) {
            minScore = score;
            worstSubject = subject;
        }
    }

    return {
        average: avg,
        rank,
        bestSubject,
        worstSubject
    };
}
const grades = {
    Toan: 9,
    Van: 8,
    Anh: 7.5,
    Ly: 9.2,
    Hoa: 6.8
};

console.log(analyzeStudent(grades));
