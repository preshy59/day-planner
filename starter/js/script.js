setInterval(
    function () {
        $("#currentDay").text(moment().format("DDD MMM, YYYY hh:mm:ss"))

    }, 1000);

    // Dom element of textarea
let hourNine = $("09");
let hourTen = $("10");
let hourEleven = $("11");
let hourTweleve = $("12");
let hourOne = $("01");
let hourTwo = $("02");
let hourThree = $("03");
let hourFour = $("04");
let hourFive = $("05");

// array element of the dom element of textarea
let hourlyTime = [hourNine, hourTen, hourEleven, hourTweleve, hourOne, hourTwo, hourThree, hourFour, hourFive];
let specificHour = parseInt(moment().format());




    $("button").on("click", function (event) {
        console.log($(event.target).siblings("textarea").val())
        
    })
