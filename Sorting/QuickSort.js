QuickSort

//divide and conquer
//sorts in-place (unlike merge sort which requires extra space)

//think of as recursive partioning

//https://www.youtube.com/watch?v=UgshAvuW33o

//O(n log n) best case

//n2 worst case.

function QuickSort = function(array){
  quick(array, 0, array.length-1)

}

var partition = function(array, left, right){

  var pivot = array[Math.floor((right + left)/2)]
    i = left,
    j = right;

    console.log('pivot is :' + pivot + 'left is :' + left ; )
}






// sortit = [6, 20, 17, 0, 32, -7, 45, 4];

// //Calling quicksort to execute here, see implementation further down
// quicksort(sortit);

// function partition(arr, low, high) {
//     var pivotIdx  = low;
//     var pivotval = arr[pivotIdx];
//     var i = low;
//     var j = high;

//     while ( i <= j ) {
//         while (arr[i] < pivotval) {
//          i++;
//         }
//         while (arr[j] > pivotval ) {
//          j--;
//         }
//     if (i <= j ) {
//       var temp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = temp;
//       i++; j--;
//     }
//     }
//   if (low < j) {
//     partition(arr, low, j);
//   }
//   if (i < high) {
//     partition(arr, i , high)
//   }

// }

// function quicksort(arr) {
//    var sorted = "";
//    partition(arr, 0, arr.length - 1);
//    for(var  i=0; i<arr.length; i++) {
//       sorted += arr[i] + ', '
//    }
//    $('#sorted').text(sorted);
// }

