//ISSUES
// 1. no local storage
// 2. SAVE not working
// 3. TRASH not working
// 4. colors not working by time

// Timer //
var rightNow = moment().format('dddd, MMMM Do YYYY hh:mm:ss a');


var timeDisplayEl = $('#time-display');

function displayTime() {
    
    //update ID time display with info from rightNow
    timeDisplayEl.text(rightNow);
    console.log(rightNow)
    // setInterval(displayTime, 1000);
}



//// Local Storage ////
///multiple save buttons///
// var saveButtonVar = document.querySelectorAll(".saveBtn")

// //27-30 applying eventlistener to each button with a class saveBtn
// for (let i = 0; i < saveButtonVar.length; i++) {
//     saveButtonVar[i].addEventListener("click", saveToLocal);

// }
// //this = saveButton
// function saveToLocal() {
//     var time = this
//     var text    
//  textAreaVar = document.querySelectorAll(".textArea").value
//     localStorage.setItem(".textArea", text);
//     }







$(document).ready(function() {
    $(".saveBtn").on("click", function() {
        // get nearby values
        var value = $(this).siblings(".textArea").val();
        var time = $(this).parent().attr("id");
    
        // save in localStorage
        localStorage.setItem(time, value);
    });
});







// TIME COLORS //





function timeColors() {
    //current number hours//
    var rightNow = moment().hour();

    $(".time-block").each(function() {
        var blockTime = parseInt($(this).attr("id").split("hour")[1]);
    
        if (blockTime < rightNow) {
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
        }
        else if (blockTime=== rightNow) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    })    
}

//GET ITEM FROM LOCAL STORAGE
$("#hour8.textArea").val(localStorage.getItem("hour8"));
$("#hour9.textArea").val(localStorage.getItem("hour9"));
$("#hour10.textArea").val(localStorage.getItem("hour10"));
$("#hour11.textArea").val(localStorage.getItem("hour11"));
$("#hour12.textArea").val(localStorage.getItem("hour12"));
$("#hour13.textArea").val(localStorage.getItem("hour13"));
$("#hour14.textArea").val(localStorage.getItem("hour14"));
$("#hour15.textArea").val(localStorage.getItem("hour15"));
$("#hour16.textArea").val(localStorage.getItem("hour16"));
$("#hour17.textArea").val(localStorage.getItem("hour17"));

timeColors();
