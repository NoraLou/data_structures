// 1. Create a grades object that stores a set of student grades in an object.
//Provide a function for adding a grade
//and a function for displaying the student’s grade average.

function Grades(gradesArray){
    this.gradesArray = gradesArray
    this.addGrade = function(grade){
      this.gradesArray.push(grade)
    }
    this.displayAverage = function(){
      var sum = 0;
      for( var i=0; i < this.gradesArray.length; i++ ){
        sum += this.gradesArray[i]
      }
      var average = sum/this.gradesArray.length
      return average;
    }
}



var myGrades = new Grades([89, 77, 92])

console.log(myGrades.gradesArray)




// 2. Store a set of words in an array and display the contents both forward and backward.

// 3. Modify the weeklyTemps object in the chapter so that it stores a month’s worth of data using a two-dimensional array. Create functions to display the monthly aver‐ age, a specific week’s average, and all the weeks’ averages.

// 4. Create an object that stores individual letters in an array and has a function for displaying the letters as a single word.
