//this function iterates through all the multiple choice options to see which one was selected
        function displayRadioValue() {
            var ele = document.getElementsByName('food');
 
            for (i = 0; i < ele.length; i++) {
                if (ele[i].checked)
                    document.getElementById("topping").innerHTML = "Topping: " + ele[i].value;
            }
        }

function myFunction() {

        var textAreaText = document.getElementById("cheesecakeBox").value; //get the text in the text area box 
        var toppingQuantity = document.getElementById("quantityTopping").value; //get the quantity value

        if (textAreaText.includes("vegan") || textAreaText.includes("Vegan")) { //if the text box has the word vegan 
            alert("Warning! The cheesecake contians dairy!"); //warn the user about dairy with an alert
        }
        else { //otherwise 

           document.getElementById("form_id").style.display="none"; //hide the form 
           document.getElementById("order_id").style.display="none"; //hide the button

           document.getElementById("orderPlaced").innerHTML = "Thank you! Your order has been placed."; //Thank you message for user 

            displayRadioValue(); //this function gets the topping selected from the multiple choice question and prints it

            document.getElementById("getQuantity").innerHTML = "Quanity: " + toppingQuantity; //display the topping quantity

            document.getElementById("getTextArea").innerHTML = "Notes: " + textAreaText; //display the notes box
            
            

        }
    }

/*
all the functions below change the month 
to the corresponding month in the function 
*/

function myJanFunction() {
   $("monthButton").html('Jan');
  }
function myFebFunction() {
   $("monthButton").html('Feb');
  }
  function myMarFunction() {
   $("monthButton").html('Mar');
  }
  function myAprFunction() {
   $("monthButton").html('Apr');
  }
  function myMayFunction() {
   $("monthButton").html('May');
  }
  function myJunFunction() {
   $("monthButton").html('Jun');
  }
  function myJulFunction() {
   $("monthButton").html('Jul');
  }
  function myAugFunction() {
   $("monthButton").html('Aug');
  }
  function mySepFunction() {
   $("monthButton").html('Sep');
  }
  function myOctFunction() {
   $("monthButton").html('Oct');
  }
  function myNovFunction() {
   $("monthButton").html('Nov');
  }
  function myDecFunction() {
   $("monthButton").html('Dec');
  }
