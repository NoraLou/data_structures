
function print2D(num){

  var numsPrinted = 1;
  var space = num;

  for(var i = 1; i <= num; i++){
    var horizontal = "";

    for(var j = 1; j<= num; j++){

      if(numsPrinted <= num || i == num){
        horizontal += " " + numsPrinted %10
        numsPrinted++;

      }else if( j == space ){
        horizontal += " " + numsPrinted %10
        numsPrinted++;

      }else{
        horizontal += " "+ " ";
      }

    }
    console.log(horizontal);
    space--;

  }// for loop

};

print2D(5)

