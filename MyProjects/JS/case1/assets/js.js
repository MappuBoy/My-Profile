var i = 0;

function colourChange() {
    setTimeout(function () {
        if (i == 0) {
            $("#firstDiv").css('background-color', 'lightpink');
            $("#secondDiv").css('background-color', '#bb5bc9');
            $("#thirdDiv").css('background-color', 'red');
            $("#fourthDiv").css('background-color', 'green');
            $("#fifthDiv").css('background-color', 'blue');
            $("#sixthDiv").css('background-color', 'yellow');
            console.log("0");
        }
        if (i == 1) {
            $("#firstDiv").css('background-color', 'yellow');
            $("#secondDiv").css('background-color', 'lightpink');
            $("#thirdDiv").css('background-color', '#bb5bc9');
            $("#fourthDiv").css('background-color', 'red');
            $("#fifthDiv").css('background-color', 'green');
            $("#sixthDiv").css('background-color', 'blue');
            console.log("1");
        }
        if (i == 2) {
            $("#firstDiv").css('background-color', 'blue');
            $("#secondDiv").css('background-color', 'yellow');
            $("#thirdDiv").css('background-color', 'lightpink');
            $("#fourthDiv").css('background-color', '#bb5bc9');
            $("#fifthDiv").css('background-color', 'red');
            $("#sixthDiv").css('background-color', 'green');
            console.log("2");
        }
        if (i == 3) {
            $("#firstDiv").css('background-color', 'green');
            $("#secondDiv").css('background-color', 'blue');
            $("#thirdDiv").css('background-color', 'yellow');
            $("#fourthDiv").css('background-color', 'lightpink');
            $("#fifthDiv").css('background-color', '#bb5bc9');
            $("#sixthDiv").css('background-color', 'red');
            console.log("3");
        }
        if (i == 4) {
            $("#firstDiv").css('background-color', 'red');
            $("#secondDiv").css('background-color', 'green');
            $("#thirdDiv").css('background-color', 'blue');
            $("#fourthDiv").css('background-color', 'yellow');
            $("#fifthDiv").css('background-color', 'lightpink');
            $("#sixthDiv").css('background-color', '#bb5bc9');
            console.log("4");
        }
        if (i == 5) {
            $("#firstDiv").css('background-color', '#bb5bc9');
            $("#secondDiv").css('background-color', 'red');
            $("#thirdDiv").css('background-color', 'green');
            $("#fourthDiv").css('background-color', 'blue');
            $("#fifthDiv").css('background-color', 'yellow');
            $("#sixthDiv").css('background-color', 'lightpink');
            console.log("5");
        }
        i++;
        if (i < 6) {
            colourChange();
        }else{
            i=0;
            colourChange();
        }
    }, 750);
}

colourChange();


