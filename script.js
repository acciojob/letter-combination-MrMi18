function letterCombinations(digits) {
  if (!digits) return [];

    const phoneMap = {
        "2": "abc", "3": "def", "4": "ghi", "5": "jkl",
        "6": "mno", "7": "pqrs", "8": "tuv", "9": "wxyz"
    };

    let result = [];

    function backtrack(index, currentStr) {
        if (index === digits.length) {
            result.push(currentStr);
            return;
        }

        let letters = phoneMap[digits[index]];
        for (let letter of letters) {
            backtrack(index + 1, currentStr + letter);
        }
    }

    backtrack(0, "");
    return result;
}

module.exports = letterCombinations;
