class HashTable {
    constructor(size = 10) {
      this.table = new Array(size); // create table with given size
      this.size = size; // store size
    }
  
    hash(key) {
      let total = 0;
      for (let char of key) {
        total += char.charCodeAt(0); // add character codes together
      }
      return total % this.size; // return index inside table size
    }
  
    set(key, value) {
      const index = this.hash(key); // find index by hashing key
      this.table[index] = [key, value]; // store key and value at index
    }
  
    get(key) {
      const index = this.hash(key); // find index by hashing key
      const pair = this.table[index]; // get stored key/value pair
      if (pair && pair[0] == key) { // check if keys match
        return pair[1]; // return value
      }
      return undefined; // return undefined if not found
    }
  }
  

  const ht = new HashTable();
  ht.set("apple", 100);           // add "apple": 100
  console.log(ht.get("apple"));   // output 100
  console.log(ht.get("banana"));  // output undefined (not found)
  