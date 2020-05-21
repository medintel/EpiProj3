// user logic
let endArray = [];
const robogerArray = function(inputtedNumber, inputName) {
  let functionArray= [];
  let midArray= [0];
  let lateArray= [0];
  let three = /3/g;
  // const tthree = three.find(Element => Element)
  // const ttwo = RegExp('*2*','g')
  let two = /2/g;
  let one = /1/g;
  let stringConvert = "0";

  for (let i=0; i<=inputtedNumber; i+=1) {
    functionArray.push(i);
    }

  for (let i=1; i<=inputtedNumber; i+=1) {
    if (functionArray[i]%3 === 0) {
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
        else if (stringConvert.includes('1')){
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



 
  //     )

  //     for (let index=0; index, i.length; )
  //        //   stringConvert.replace(two, "Boop!")
  //   //   endArray.push(i);
  //   }
  // }

  //   else {
  //     for (let index=1; index<=i; index+=1) {
  //       if (functionArray[i] === 2) {
  //           endArray.push ("Boop!");
  //         }
  //       else if (functionArray[i] === 1){
  //           endArray.push ("Beep!");
  //       }

    // else if (functionArray[i] === 2){
    //   endArray.push ("Boop!");
    // }
    // else if (functionArray[i] === 1){
    //   endArray.push ("Beep!");
    // }


  // for (let i=1; i<=inputtedNumber; i+=1) {
    // midArray.forEach(function(i) {
    //   stringConvert.replace(two, "Boop!")
    //   endArray.push(i);
    // });

    // stringConvert.replace(three, "Won't you be my neighbor?");
    // stringConvert.replace(two, "Boop!"));

    // if (stringConvert.includes(three)) {
    //       endArray.push ("Won't you be my neighbor?");
    //     }
    //   else if (stringConvert.includes(two)) {
    //     endArray.push ("Boop!");
    //     }
    //     else if (stringConvert.includes(one)) {
    //       endArray.push ("Beep!");
    //       }
    //       else {
    //         endArray.push (midArray[i]);
    //         }
    // }

  // const threeArray = midArray.forEach(
  //   if (functionArray[i] === three ) {
  //       endArray.push ("Won't you be my neighbor?");
  //       }
  //           else if (functionArray[i] === two ) {
  //     endArray.push ("Boop!");
  //     });



  // for (let i=1; i<=inputtedNumber; i+=1) {
  //   if (functionArray[i]%3 === 0) {
  //     midArray.push ("Won't you be my neighbor, " + inputName + "?");
  //     }
  //     // // else if (functionArray[i] === three ) {
  //     // //   endArray.push ("Won't you be my neighbor?");
  //     // //   }
  //     //   else if (functionArray[i] === two ) {
  //     //     endArray.push ("Boop!");
  //     //     }
  //     //   //   else if (functionArray[i]===(one)) {
  //     //   //     midArray.push ("Beep!");
  //     //   //     }
  // else {
  //       endArray.push(i);
  //     }

  // const convertToString = midArray.toString();
  // const threeString = (convertToString.replace(three, "Won't you be my neighbor?"));
  // const twoString = (threeString.replace(two, "Boop!"));
  // endArray = (twoString.replace(one, "Beep!"));

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