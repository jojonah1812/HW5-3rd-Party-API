var timeDisplayEl = $('#time-display');

function displayTime() {
    var rightNow = moment().format('dddd, MMMM Do YYYY');
    //update ID time display with info from rightNow
    timeDisplayEl.text(rightNow);
    }
setInterval(displayTime, 1000);

// timeblocks

var text = "textArea"

document.getElementById("saveBtn").addEventListener("click", saveToLocal);

function saveToLocal() {
    localStorage.setItem("textArea", text);
    }



//GET ITEM FROM LOCAL STORAGE
$("#hour8am.textArea").val(localStorage.getItem("hour8am"))




    // Get item from local storage if any
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    // $("#hour9 .description").val(localStorage.getItem("hour9"));
    // $("#hour10 .description").val(localStorage.getItem("hour10"));
    // $("#hour11 .description").val(localStorage.getItem("hour11"));
    // $("#hour12 .description").val(localStorage.getItem("hour12"));
    // $("#hour13 .description").val(localStorage.getItem("hour13"));
    // $("#hour14 .description").val(localStorage.getItem("hour14"));
    // $("#hour15 .description").val(localStorage.getItem("hour15"));
    // $("#hour16 .description").val(localStorage.getItem("hour16"));
    // $("#hour17 .description").val(localStorage.getItem("hour17"));