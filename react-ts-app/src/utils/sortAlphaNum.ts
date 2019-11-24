const reA = /[^a-zA-Z]/g
const reN = /[^0-9]/g

// [](https://stackoverflow.com/questions/4340227/sort-mixed-alpha-numeric-array)
export function sortAlphaNum(a: string, b: string): number {
  var aA = a.replace(reA, '')
  var bA = b.replace(reA, '')
  if (aA === bA) {
    var aN = parseInt(a.replace(reN, ''), 10)
    var bN = parseInt(b.replace(reN, ''), 10)
    return aN === bN ? 0 : aN > bN ? 1 : -1
  } else {
    return aA > bA ? 1 : -1
  }
}
