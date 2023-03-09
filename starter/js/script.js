setInterval(
    function () {
        $("#currentDay").text(moment().format("DDD MMM, YYYY HH:mm:ss"))

    }, 1000);

    // Dom element of textarea
let hourNine = $("#9");
let hourTen = $("#10");
let hourEleven = $("#11");
let hourTweleve = $("#12");
let hourOne = $("#13");
let hourTwo = $("#14");
let hourThree = $("#15");
let hourFour = $("#16");
let hourFive = $("#17");

// array element of the dom element of textarea
let hourlyTime = [hourNine, hourTen, hourEleven, hourTweleve, hourOne, hourTwo, hourThree, hourFour, hourFive];
let specificHour = parseInt(moment().format("kk"));

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


//function to submit the text
$("button").on("click",function (event) {
     event.preventDefault();
    let submit = $(event.target).siblings("textarea").val();
    console.log(submit)
       let save =  $(event.target).data("hour");
       console.log(save)
       localStorage.setItem("hourlyTime " + save, submit);
       
})
function storeInput(){

    for (let index = 9; index < 18; index++) {
        
        const value = localStorage.getItem(`hourlyTime ${index}`);
        if (value) {
            let currentHour = $(`[data-hour = ${index}]`);
            currentHour.val(value);
            console.log(value);
        }
       
      }
   
}
storeInput();
