class Hashtable {
  constructor(size) {
    this.table = new Array(size)
    this.size = size
  }

//convert key into index
hash(key) {
  let total = 0
  for(let i =0; i< key.length; i++) {
    total += key.charCodeAt(i)
  }
return total % this.size //index is in the range of 0-100
}
//set key value pair into index
set(key, value) {
  const index = this.hash(key) //find index
  this.table[index] = value //store value at index
}
//find value
get(key) {
  const index = this.hash(key) //find index
  return this.table[index] //return the value at the index
}

}
const table = new Hashtable(100)

table.set("random", "hello")
table.set("goals", 7)
console.log(table.get("random"))
console.log(table.get("goals"))
