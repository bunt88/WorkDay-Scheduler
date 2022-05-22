
// Use Moment.js to set the current date at the top of the app
var today = moment().format("dddd, MMMM Do, YYYY, h:mm a");
$("#currentDay").text(today);


function timeTracker(hour) {

    var currentHour = moment().hour();
    var blockTime = document.getElementById("#hour8");

    if (blockTime < currentHour) {
        // $("timeBlock").removeClass("present")
        // $("timeBlock").removeClass("future")
        $("timeBlock").addClass("past")
    }
    else if (blockTime === currentHour) {
        // $(".time-block").removeClass("past")
        // $(".time-block").removeClass("future")
        $(".time-block").addClass("present")
    }
    else (blockTime > currentHour); {
        // $(".time-block").removeClass("past")
        // $(".time-block").removeClass("present")
        $(".time-block").addClass("future")
    }


    console.log(currentHour);
}

// Set items in local storage
$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var task = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, task);
    })
    // Get items from local storage
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));
    $("#hour18 .description").val(localStorage.getItem("hour18"));

    timeTracker();



})
