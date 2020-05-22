
// user logic
let endArray = [];
const robogerArray = function(inputtedNumber, inputName) {
  let midArray = [0];
  let stringConvert = "0";

  for (let i=1; i<=inputtedNumber; i+=1) {
    if (i%3 === 0) {
        midArray.push ("Won't you be my neighbor, " + inputName + "?");
      }
    else {
      midArray.push(i);
      } 
    }
    
  midArray.forEach(function(item) {
    if (Number.isNaN (item)) {
      endArray.push(item);
    }
    else if (Number.isInteger(item)) {
      stringConvert= item.toString();
      if (stringConvert.includes('3')) {
        endArray.push("Won't you be my neighbor?");
        }
      else if (stringConvert.includes('2')) {
        endArray.push("Boop!");
        }
      else if (stringConvert.includes('1')) {
        endArray.push("Beep!");
        }
      else {
        endArray.push(item);
        }
       }
    else {
      endArray.push(item);
      }
    });
return endArray;
};


// business logic
$(document).ready(function() {
  $("#inputForm").submit(function(event){
 
    event.preventDefault();

    const inputName = $("#userName").val();
    $(".userName").text(inputName).val();

    const inputtedNumber = parseInt($("#inputNumber").val());

    const returnedArray = robogerArray(inputtedNumber, inputName);
    $(".returnedArray").text(returnedArray).val();

    $("#results").show(); 
    $("#myform")[0].reset();
    $("#name").hide();
    $("#reverseButton").show();

    // $("#reverseButton").click(function(){
    //   let reverseArray= returnedArray.reverse;
    //   $(".reverseArray").text(reverseArray).val();
    // });
  });
      $("#reverseButton").click(function(){
      let reverseArray= returnedArray.reverse;
      $(".reverseArray").text(reverseArray).val();
    });
});