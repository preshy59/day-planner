setInterval(
    function () {
        $("#currentDay").text(moment().format("DDD MMM, YYYY hh:mm:ss"))

    }, 1000);
