function longestCons(nums) {
    if (!Array.isArray(nums)) {
        throw new TypeError("Input must be of Array type.");
    }

if (!nums.every(Number.isInteger)) {
    throw new TypeError("Array must contain only integers.");
}
    if (nums.length === 0) {
        return { length: 0, sequence: [] };
    }

    const numSet = new Set(nums);
    let longest_Sequence = [];

    for (const num of numSet) {
        // as start a sequence from the first number
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            const currentSequence = [currentNum];

            while (numSet.has(currentNum + 1)) {
                currentNum += 1;
                currentSequence.push(currentNum);
            }

            if (currentSequence.length > longestSequence.length) {
                longest_Sequence = currentSequence;
            }
        }
    }

    return { length: longestSequence.length, sequence: longestSequence };
}


