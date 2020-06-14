const PRIME_NB = 37;

/**
 * Basic implementation of a Hash Table
 * The data (key-values) is stored in array in the following way
 * [ [[key, value]], [[key1, value1], [key2, value2]] ]
 * keys with same hash are stored in same position in an array
 *
 * The class has
 * hash function: hashes the provided key
 * set function: sets the key and hash at the hashed
 * get function: to retrieve the value for a given key
 */
export class HashTable {
  keyMap: Array<Array<Array<string>>>;

  constructor(size = 53) {
    this.keyMap = new Array<Array<Array<string>>>(size);
  }

  public hash(toHash: string): number {
    let total = 0;
    for (let i = 0; i < Math.min(toHash.length, 100); i++) {
      const char = toHash[i];
      const value = char.charCodeAt(0) - 96;
      total = (total * PRIME_NB + value) % this.keyMap.length;
    }
    return total;
  }

  public set(key: string, value: string): void {
    const index = this.hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = new Array<Array<string>>();
    }
    this.keyMap[index].push([key, value]);
  }

  public get(key: string): string {
    const hashKey = this.hash(key);
    const elementsAtIndex = this.keyMap[hashKey];
    const found = elementsAtIndex.filter((elt) => elt[0] === key)[0][1];
    return found;
  }
}
