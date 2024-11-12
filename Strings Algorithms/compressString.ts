export function compressString(s: string): string {
    let compressed = "";
    let count = 1;

    for (let i = 1; i < s.length; i++) {
        if (s[i - 1] === s[i]) {
            count++;
        } else {
            compressed += s[i - 1] + count.toString();
            count = 1;
        }
    }

    compressed += s[s.length - 1] + count.toString();

    return compressed.length < s.length ? compressed : s;
}
