setInterval(
    function () {
        $("#currentDay").text(moment().format("DDD MMM, YYYY hh:mm:ss"))

    }, 1000);

    // Dom element of textarea
let hourNine = $("#09");
let hourTen = $("#10");
let hourEleven = $("#11");
let hourTweleve = $("#12");
let hourOne = $("#01");
let hourTwo = $("#02");
let hourThree = $("#03");
let hourFour = $("#04");
let hourFive = $("#05");

// array element of the dom element of textarea
let hourlyTime = [hourNine, hourTen, hourEleven, hourTweleve, hourOne, hourTwo, hourThree, hourFour, hourFive];
let specificHour = parseInt(moment().format("hh"));

//function to assign the colour based on current, past and prsent
function assignColour() {
    for (let i = 0; i < hourlyTime.length; i++) {
        const hourlyTimes = hourlyTime[i];
        hourlyTimes.removeClass("past present current");

        if (specificHour === hourlyTimes.data("hour")) {
            hourlyTimes.addClass("present");
        }
        else if (specificHour > hourlyTimes.data("hour")){
            hourlyTimes.addClass("past")
        }
        else{
            hourlyTimes.addClass("future");
        }
        
    }
    
}
assignColour();




    $("button").on("click", function (event) {
        console.log($(event.target).siblings("textarea").val())
        
    })
