// user logic
// const robogerArray = function(inputtedNumber) {
// let functionArray= [];
//   for (let i=0; i<=inputtedNumber; i+=1) {
//     // functionArray.push(i);
//     }

//   for (let index = 0; index < functionArray.length; index +=1) {
// //  if (inputtedNumber%3 === 0 ) {
// //   endArray.push ("Won't you be my neighbor, userName?"); 
// //    }
//     if (functionArray[i].includes('3')) {
//       functionArray[i].replace ("Won't you be my neighbor?")
//       }
//     else if (functionArray[i].includes('2')) {
//       functionArray[i].replace ("Boop!")
//       }
//     else if (functionArray[i].includes('1')) {
//       functionArray[i].replace ("Beep!")
//       }
// return functionArray;
// }

// business logic
$(document).ready(function() {
  $("#inputForm").submit(function(event){
    event.preventDefault();

    const inputName = $("#userName").val();
    // const inputName = $("input#userName").val();
    $(".userName").text(inputName).val();

    const inputtedNumber = parseInt($("#inputNumber").val());
    // const inputtedNumber = $("input#inputNumber").val();
    alert(inputtedNumber);
    
    // const returnedArray = robogerArray(inputtedNumber);
    // const finalArray = returnedArray.toString;
    //  $(".roborgerResults").text(finalArray);

    // $(".inputNumber").number(inputtedNumber).val();
    // alert("inputtedNumber");

    $("#results").show();
    $("#name").hide();

  });
});