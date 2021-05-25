var timeDisplayEl = $('#time-display');



function displayTime() {
    var rightNow = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    //update ID time display with info from rightNow
    timeDisplayEl.text(rightNow);
    }

setInterval(displayTime, 1000);