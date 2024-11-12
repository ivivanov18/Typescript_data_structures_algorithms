/**
 * Time complexity: O(n)
 * Space complexity: O(1)
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean} True if oneAway, false otherwise
 */
export function oneAway(s1: string, s2: string): boolean {
    if (s1.length === s2.length) {
        return oneAwayReplacement(s1, s2);
    } else if (s1.length + 1 === s2.length) {
        return oneAwayInsert(s1, s2);
    } else if (s1.length - 1 === s2.length) {
        return oneAwayInsert(s2, s1);
    }
    return false;
}

function oneAwayReplacement(s1: string, s2: string): boolean {
    let foundDifference = false;
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            if (foundDifference) {
                return false;
            }
            foundDifference = true;
        }
    }
    return true;
}

function oneAwayInsert(s1: string, s2: string): boolean {
    let index1 = 0;
    let index2 = 0;

    while (index1 < s1.length && index2 < s2.length) {
        if (s1[index1] !== s2[index2]) {
            if (index1 !== index2) {
                return false;
            }
            index2++;
        } else {
            index1++;
            index2++;
        }
    }
    return true;
}
