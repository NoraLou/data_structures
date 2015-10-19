
//Recursive Merge Sort

var toBeMerged = [8, 5, 6, 8, 2, 4, 9, 11, 1, 2, 13, 5]

function mergeSortRec(arr){

  var length = arr.length;

  //base case
  if(length === 1){
      return arr
  }

  //divide by 2
  var mid = Math.floor(length/2),
    left = arr.slice(0, mid),
    right = arr.slice(mid, length)

  //return then divide by 2 again
  //we stack in this function until the base case is meet
  return merge(mergeSortRec(left), mergeSortRec(right));

};

var merge = function(left, right){
  var result = [],
    iLeft = 0,
    iRight = 0;

  while(iLeft < left.length && iRight < right.length){
    if(left[iLeft] < right[iRight]){
      //factor out the iteration
      result.push(left[iLeft++]);
    }else{
      result.push(right[iRight++])
    }
  }

  //add what is left on the left
  while(iLeft < left.length){
    result.push(left[iLeft++])
  }

  //add what is left on the right
  while(iRight < right.length){
    result.push(right[iRight++])
  }

  console.log(result);

  return result;

};

mergeSortRec(toBeMerged);

















