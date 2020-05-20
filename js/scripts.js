// user logic
let endArray = [];
const robogerArray = function(inputtedNumber, inputName) {
  let functionArray= [];
  let midArray= [0];
  let three = /3/g;
  let two = /2/g;
  let one = /1/g;

  for (let i=0; i<=inputtedNumber; i+=1) {
    functionArray.push(i);
    }

  for (let i=1; i<=inputtedNumber; i+=1) {
    if (functionArray[i]%3 === 0) {
      midArray.push ("Won't you be my neighbor, " + inputName + "?"); 
      }
      // // else if (functionArray[i] === three ) {
      // //   endArray.push ("Won't you be my neighbor?");
      // //   }
      //   else if (functionArray[i] === two ) {
      //     endArray.push ("Boop!");
      //     }
      //   //   else if (functionArray[i]===(one)) {
      //   //     midArray.push ("Beep!");
      //   //     }
  else {
        midArray.push(i);
      }

  const convertToString = midArray.toString();
  const threeString = (convertToString.replace(three, "Won't you be my neighbor?"));
  const twoString = (threeString.replace(two, "Boop!"));
  endArray = (twoString.replace(one, "Beep!"));
}
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
    const finalString = returnedArray.toString();
     $(".finalString").text(finalString).val();    
     alert(finalString);

    $("#results").show();
    $("#name").hide();

  });
});