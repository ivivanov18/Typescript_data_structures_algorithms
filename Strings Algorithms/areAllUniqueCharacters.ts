const NUMBER_EXTENDED_ASCII_CHARACTERS = 256;

/**
 * Time complexity: O(n)
 * Space complexity O(n)
 * @param str
 * @returns true if all characters are unique, false otherwise
 */
export function areAllCharactersUnique(str: string): boolean {
    if (str.length > NUMBER_EXTENDED_ASCII_CHARACTERS) {
        return false;
    }

    const charSet = new Set<string>();

    for (const c of str) {
        if (charSet.has(c)) {
            return false;
        }
        charSet.add(c);
    }

    return true;
}
