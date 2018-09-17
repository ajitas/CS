// ===============================================
// RUN THIS USING NODE
// ===============================================

// ================================================
// TEST CASES
// ================================================

// Case 1 - Small Set of Numbers
var arraySize = 40;

// // Case 2 - Large set of Numbers
// var arraySize = 400000;

var array = [];
for (var index = 0; index < arraySize; index++) {
  var randomNumber = Math.round(Math.random() * arraySize);

  array.push(randomNumber);
}

// ================================================
// SOLUTION - Insertion Sort
// ================================================
function insertionSort(arr){
  for(var i =1;i<arr.length;i++){
    var key = arr[i];
    var index;
    for(var j=i-1;j>=0;j--){
      index =j;
      if(arr[j]>key){
        arr[j+1]=arr[j];
      }
      else{
        break;
      }
    }
    arr[index]=key;
  }
  return arr;

}

// ================================================
// FUNCTION CALL
// ================================================
console.log("PRE-SORT");
console.log(array.join(" "));
console.log("---------------------------");
console.log("POST-SORT");
console.log(insertionSort(array).join(" "));
