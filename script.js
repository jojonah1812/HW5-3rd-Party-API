//ISSUES
// 1. no local storage
// 2. SAVE not working
// 3. TRASH not working
// 4. colors not working by time



// Timer //
var timeDisplayEl = $('#time-display');

function displayTime() {
    var rightNow = moment().format('dddd, MMMM Do YYYY');
    //update ID time display with info from rightNow
    timeDisplayEl.text(rightNow);
    }
setInterval(displayTime, 1000);




    //// Local Storage ////
var text = "textArea"

document.getElementById("saveBtn").addEventListener("click", saveToLocal);

function saveToLocal() {
    //// ERROR  on "textArea"??????????  ???????????
    localStorage.setItem("textArea", text);
    }


    // TIME COLORS //

    function timeColors () {
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
$("#hour8.textArea").val(localStorage.getItem("hour8"))
$("#hour9.textArea").val(localStorage.getItem("hour9"))
$("#hour10.textArea").val(localStorage.getItem("hour10"))
$("#hour11.textArea").val(localStorage.getItem("hour11"))
$("#hour12.textArea").val(localStorage.getItem("hour12"))
$("#hour13.textArea").val(localStorage.getItem("hour13"))
$("#hour14.textArea").val(localStorage.getItem("hour14"))
$("#hour15.textArea").val(localStorage.getItem("hour15"))
$("#hour16.textArea").val(localStorage.getItem("hour16"))
$("#hour17.textArea").val(localStorage.getItem("hour17"))

// $("#hour21.textArea").val(localStorage.getItem("hour21"))
// $("#hour22.textArea").val(localStorage.getItem("hour22"))

timeColors();
