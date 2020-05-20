
const robogerArray = function(inputtedNumber) {
const endArray = []; 
for (let index = 0; index <= inputtedNumber; index +=1) {
 if (inputtedNumber%3 === 0 ) {
  endArray.push ("Won't you be my neighbor, userName?"); 
   }
// else if (robogerArray[i].includes('3')) {
//   $("#ruby").show(); [replace with "Won't you be my neighbor, userName?"]
//    }
// else if (robogerArray[i].includes('2')) {
//   $("#ruby").show(); [replace with "Boop!"]
//    }
// else if (robogerArray[i].includes('1')) {
//   $("#ruby").show(); [replace with "Beep!"]
//    }
// else {[push int to new array]
//    }
return endArray; 
}

$(document).ready(function() {
  $("#inputForm").submit(function(event){
    event.preventDefault();

    const inputName = $("#userName").val();
    // const inputName = $("input#userName").val();
    $(".userName").text(inputName).val();

    const inputtedNumber = $("#inputNumber").val();
    // const inputtedNumber = $("input#inputNumber").val();
    alert("inputtedNumber");
    
    const returnedArray = robogerArray(inputtedNumber);
     $(".roborgerResults").text(returnedArray);

    // $(".inputNumber").number(inputtedNumber).val();
    // alert("inputtedNumber");

    $("#results").show();
    $("#name").toggle();

  });
});