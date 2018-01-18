
function iterativeLog(arr) {
  arr.forEach((item, element, arr) => {
    console.log(`${item}: ${element}`);
  });
}

function iterate(callback) {
  var elements = ['one', 'two', 'three', 'four'];
  elements.forEach(element => {
    callback(element);
  });
  
  return elements;
}

function doToArray(array, callback) {
  array.forEach(item => {
    callback(item);
  });
}
