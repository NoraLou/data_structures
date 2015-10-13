
//Given a magazine and a ransome note,
//figure out if you can cut some words out of the magazine
//to write the ransom note.

var note = "you will zebra be dying";
var magazine = "dying wool is what you will be doing";


function arrToObject(arr){
  var arrObj = {};
  for(var i = 0 ; i < arr.length; i++){
    var item  = arr[i];
    if(!arrObj[item]){
      arrObj[item] = 1
    }else{
      arrObj[item]++
    }
  }
  return arrObj;
}

function canRansom(note, magazine){

  noteArr = note.split(' ');
  magArr = magazine.split(' ');

  var noteDict = arrToObject(noteArr);
  var magazineDict = arrToObject(magArr);


  for( var j in noteDict){
    if(noteDict.hasOwnProperty(j)){
      var word = j
      if(magazineDict[word] >= noteDict[word]){
         noteDict[word] = noteDict[word] -1
         if(noteDict[word] <= 0){
          delete noteDict[word]
         }
      }else{
        return false
      }

    }
  }
return true
}

console.log(canRansom(note, magazine))















































































