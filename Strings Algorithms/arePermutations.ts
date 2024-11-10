/**
 * Checks if two strings are permutations by sorting and comparing them
 * Time complexity: O(nlogn)
 * Space complexity: O(n)
 * @param {string} str1
 * @param {string} str2
 * @returns {boolean} - Returns true if the strings are permutations of each other; otherwise, false.
 */
export function arePermutationsV1(str1: string, str2: string): boolean {
    if (str1.length !== str2.length) {
        return false;
    }
    return sort(str1) === sort(str2);
}

function sort(str: string): string {
    return str.split("").sort().join();
}

/**
 * Checks if two strings are permutations by checking if they have identical character counts
 * Time complexity: O(n)
 * Space complexity: O(1) - assuming a fixed-size ASCII character set
 * @param {string} str1
 * @param {string} str2
 * @returns {boolean}
 */
export function arePermutationsV2(str1: string, str2: string): boolean {
    if (str1.length !== str2.length) {
        return false;
    }

    // Assumption is ASCII standard
    const letters: number[] = Array(128).fill(0);
    for (let i = 0; i < str1.length; i++) {
        letters[str1.charCodeAt(i)]++;
    }
    for (let i = 0; i < str2.length; i++) {
        letters[str2.charCodeAt(i)]--;
        if (letters[str2.charCodeAt(i)] < 0) {
            return false;
        }
    }
    return true;
}
