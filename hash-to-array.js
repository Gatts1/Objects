function convertHashToArray(hash) {
  //your code here - sort the keys!
  let keys = Object.keys(hash);
  let values = Object.values(hash);
  result = [];
  for (let index = 0; index < keys.length; index++) {
    let array = [];
    array.push(keys[index]);
    array.push(values[index]);
    result.push(array);
  }
  return result.sort();
}

console.log(convertHashToArray([[1,2,3],[2,4,6]]))