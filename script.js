var timeDisplayEl = $('#time-display');

function displayTime() {
    var rightNow = moment().format('dddd, MMMM Do YYYY');
    //update ID time display with info from rightNow
    timeDisplayEl.text(rightNow);
    }
setInterval(displayTime, 1000);

// timeblocks


document.getElementById("saveBtn").addEventListener("click", saveToLocal);

function saveToLocal() {

    localStorage.setItem("key", "value");

    //   document.getElementById("demo").innerHTML = Date();
}
