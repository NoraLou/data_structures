
// Recursive Version
function recPerm(rest, soFar){
  var next,
  remaining;

  if(rest == ''){
    console.log("soFar :",soFar);
  }else{

    for(var i = 0; i < rest.length; i++){
      console.log("rest.substr(0,i) :", rest.substr(0,i));
      console.log("rest.substr(i+1, rest.length-1) :",rest.substr(i+1, rest.length-1));

      remaining = rest.substr(0,i) + rest.substr(i+1, rest.length-1);
      next = soFar + rest[i]

      recPerm(remaining, next);
    }
  }
}

// recPerm('abc',' ');
//console.log('abc'.substr(0,0))
// console.log('abc'.substr(2, 2))


//ANOTHER WAY
// http://www.graemeboy.com/string-permutations

function combineChars (chars) {
    var permutations = [], words = [], firstChar;
    if (chars.length === 1) { // base case
        permutations.push(chars);
        return permutations;
    }
    firstChar = chars[0];
    chars = chars.substring(1,chars.length);
    words = combineChars(chars);
    for (var i = 0; i < words.length; i++) {
        for (var j = 0; j < words[i].length + 1; j++) {
            permutations.push(insertCharAt(words[i], firstChar, j));
        }
    }
    return permutations;
}

function insertCharAt(word, charIn, i) {
    var start = word.substring(0,i);
    var end = word.substring(i,word.length);
    return start + charIn + end;
}

//ANOTHER WAY

function permutations(str){

  var arr = str.split(''),
      perms = [],
      rest,
      picked,
      restOfPerms,
      next;

  if(!arr.length){return str}

  for(var i = 0; i < arr.length; i++){
    //make copy
    rest = arr.slice(0)

    //pull item from copy
    leadChar = rest.splice(i,1)

    //recursively call func w/ rest of the string
    restPerms = permutations(rest.join(''))

    for(var j= 0 ; j < restPerms.length; j++){
      next = picked.concat(restPerms[j]);
      perms.push(next.join(''));
    }
  }
  return perms;
}



permutations('abced')
























