var today = moment().format("dddd, MMMM Do");
var todayHour = moment().format("hha");
$('#currentDay').text(today);


var fiveAmTxt = moment().hour("5").format("ha"); 
var sixAmTxt = moment().hour("6").format("ha");
var sevenAmTxt = moment().hour("7").format("ha");
var eightAmTxt = moment().hour("8").format("ha");
var nineAmTxt = moment().hour("9").format("ha");
var ninePmTxt = moment().hour("21").format("ha");
// NOTE: Using format("hha") compared the hour as the number
// At 11am, todayHour = 11am. ninePmTxt.format('hha')=9pm
// todayHour > ninePmTxt 
// 11 > 9 --> TRUE. The time has passed. 
// Want 11 > 21 --> FALSE. 

// Set the hours for the time column
// .hour lets you get or set the hour
$('#h5Txt').text(fiveAmTxt);
$('#h6Txt').text(sixAmTxt);
$('#h7Txt').text(sevenAmTxt);
$('#h8Txt').text(eightAmTxt);
// This could be made into a loop

// CHALLENGE
// var h = i+5
// $('#h'+i+'Txt').text.moment().hour(h).format("hha")
// Use traverse DOM with input-group-text

// BUILD TEST
console.log("Current Hour: " + todayHour)
console.log("ninePMTxt: " + ninePmTxt); 
console.log(todayHour > ninePmTxt);
console.log(todayHour == ninePmTxt); 


$('.container').children().eq(1).addClass("trial1");
$('.container').children().eq(1).children().eq(0).addClass("trial2");
$('.container').children().eq(2).children().children().eq(1).addClass("trial3").removeClass("trial3a");
$('.container').children().children().children(0).eq(1).addClass("trial4");
$('.container').children().children().children(0).eq(1).removeClass("trial5");
console.log($('.container').children().eq(2).children().children().eq(1)); 

$('#h-6-form').children().eq(0).addClass("triala");
$('#h-6-form').children().children().eq(1).addClass("trialb");

// $('#h-6-form').children().children().eq(1).addClass("triala");

// $('#h-6-form').children().children().eq(1).addclass("past");

function hour () {
    // Is the time in the past? 
    if (todayHour > ninePmTxt) {
        console.log("1: The time has passed")
        $('#h-6-form').children().children().eq(1).addClass("past").removeClass("present").removeClass("future");
    // Is it the current time? 
    } else if (todayHour == ninePmTxt) {
        console.log("1: It's the current hour")
        $('#h-6-form').children().children().eq(1).removeClass("past").addClass("present").removeClass("future");
    // Is the time in the future? 
    } else {
        console.log("1: The time is in the future")
        $('#h-6-form').children().children().eq(1).removeClass("past").removeClass("present").addClass("future");
    }

    if (todayHour > sevenAmTxt) {
        console.log("The time has passed")
    } else if (todayHour == sevenAmTxt) {
        console.log("Current: It's the current hour")
    } else {
        console.log("The time is in the future")
    }

    if (todayHour > ninePmTxt) {
        console.log("The time has passed")
    } else if (todayHour == ninePmTxt) {
        console.log("It's the current hour")
    } else {
        console.log("9p: The time is in the future")
    }
};

// Execute every 5 minutes
// setInterval(hour, 1000)
hour()


function testLocalStorageRecall() {
    var testRecall = localStorage.getItem("testLocal")
    console.log("Prior Value: " + testRecall)
    // How can you pass the value back into the empty form? 
    // $('#test-form').text(testRecall)
}

testLocalStorageRecall(); 

// var test = $('#test').val();
var test = $('input[name="test"]'); 
var testBtn = $('#test-form'); 

function testSubmit(event) {
    event.preventDefault();
    console.log(test.val());
    localStorage.setItem("testLocal",test.val());
}

testBtn.on('submit', testSubmit);



// var fiveAmSchedule = $("#id").val();
var fiveAmSchedule = $('input[name="5am"]').val();
var sixAmSchedule = $('input[name=6am]').val();
var sixAmSchedule = $('#6am').val();


var fiveAmDelete = $('#button-addon2-5am');

function locallyStoreData() {
    console.log("hello");
    // Console log value
    console.log(fiveAmSchedule);
    // console.log(sixAmSchedule); 
    // Local Storage
    // localStorage.setItem("5amSch", fiveAmSchedule.val); 
}

// CLICK CODE 1
// Calls function to locally store data if the
$("#h-5").click(function(event) {
    event.stopPropagation();
    locallyStoreData();
// ISSUE: Propgation not stopping. 
})

// CLICK CODE 2
// $("body").on('click', locallyStoreData); 
// 05-Third Party APIs > 28-Stu Mini Project > Lines 108-110



function deleteText(event) {
    console.log("delete test")
    event.preventDefault();
    // Clear text
    // ISSUE: Does not clear the text
    $('input[name="5am"').val('');
    // Clear local storage
}

fiveAmDelete.on('click', deleteText); 

// // Delete the data
// dailyActivityClear.on('click,' deleteText);