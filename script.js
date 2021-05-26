//////////// Timer  ////////////////////
var timeDisplayEl = $('#time-display');

function displayTime() {
    var rightNow = moment().format('dddd, MMMM Do YYYY');
    //update ID time display with info from rightNow
    timeDisplayEl.text(rightNow);
    }
setInterval(displayTime, 1000);

/////// timeblocks  ///////////

var text = "textArea"

document.getElementById("saveBtn").addEventListener("click", saveToLocal);

function saveToLocal() {
    localStorage.setItem("textArea", text);
    }



//GET ITEM FROM LOCAL STORAGE
$("#hour8am.textArea").val(localStorage.getItem("hour8am"))
$("#hour9am.textArea").val(localStorage.getItem("hour9am"))
$("#hour10am.textArea").val(localStorage.getItem("hour10am"))
$("#hour11am.textArea").val(localStorage.getItem("hour11am"))
$("#hour12pm.textArea").val(localStorage.getItem("hour12pm"))
$("#hour1pm.textArea").val(localStorage.getItem("hour1pm"))
$("#hour2pm.textArea").val(localStorage.getItem("hour2pm"))
$("#hour3pm.textArea").val(localStorage.getItem("hour3pm"))
$("#hour4pm.textArea").val(localStorage.getItem("hour4pm"))
$("#hour5pm.textArea").val(localStorage.getItem("hour5pm"))

$("#hour9pm.textArea").val(localStorage.getItem("hour9pm"))
$("#hour10pm.textArea").val(localStorage.getItem("hour10pm"))

    // Get item from local storage if any
    // $("#hour6 .description").val(localStorage.getItem("hour6"));
   