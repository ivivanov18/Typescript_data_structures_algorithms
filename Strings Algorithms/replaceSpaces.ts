/**
 * Replaces spaces in a string with `%20`
 * Time complexity: O(n) where is n is the true length of the string
 * Space complexity: O(n) due to the array used to store the characters of the string
 * @param {string} str
 * @param {number} trueLength
 * @returns {string} - with spaces replaced with `%20`
 */
export function replaceSpaces(str: string, trueLength: number): string {
    const strArray = str.split("");
    let spaceCount = 0;
    for (let i = 0; i < trueLength; i++) {
        if (strArray[i] === " ") {
            spaceCount++;
        }
    }

    let newLength = trueLength + spaceCount * 2;

    for (let i = trueLength - 1, j = newLength - 1; i >= 0; i--) {
        if (strArray[i] === " ") {
            strArray[j] = "0";
            strArray[j - 1] = "2";
            strArray[j - 2] = "%";
            j -= 3;
        } else {
            strArray[j] = strArray[i];
            j--;
        }
    }
    return strArray.splice(0, newLength).join("");
}
