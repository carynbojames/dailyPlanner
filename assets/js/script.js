var today = moment().format("dddd, MMMM Do");
var todayHour = moment().format("h a");
$('#currentDay').text(today);

LocalStorageRecall(); 

// Time stamps for logic to determine if the time block is past, present, or future
var fiveAmTxt = moment().hour("5").format("h a"); 
var sixAmTxt = moment().hour("6").format("h a");
var sevenAmTxt = moment().hour("7").format("h a");
var eightAmTxt = moment().hour("8").format("h a");
var nineAmTxt = moment().hour("9").format("h a");
var tenAmTxt = moment().hour("10").format("h a");
var elevenAmTxt = moment().hour("11").format("h a");
var twelvePmTxt = moment().hour("12").format("h a");
var onePmTxt = moment().hour("13").format("h a");
var twoPmTxt = moment().hour("14").format("h a");
var threePmTxt = moment().hour("15").format("h a");
var fourPmTxt = moment().hour("16").format("h a");
var fivePmTxt = moment().hour("17").format("h a");
var sixPmTxt = moment().hour("18").format("h a");
var sevenPmTxt = moment().hour("19").format("h a");
var eightPmTxt = moment().hour("20").format("h a");
var ninePmTxt = moment().hour("21").format("h a");
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
$('#h9Txt').text(nineAmTxt);
$('#h10Txt').text(tenAmTxt);
$('#h11Txt').text(elevenAmTxt);
$('#h12Txt').text(twelvePmTxt);
$('#h13Txt').text(onePmTxt);
$('#h14Txt').text(twoPmTxt);
$('#h15Txt').text(threePmTxt);
// This could be made into a loop
// May delete this so I'm not worried about formatting and I can get the formula to work

// CHALLENGE
// var h = i+5
// $('#h'+i+'Txt').text.moment().hour(h).format("hha")
// Use traverse DOM with input-group-text

// BUILD TEST
console.log("Current Hour: " + todayHour)
console.log('twoPmTxt: ' + twoPmTxt);
console.log("ninePmTxt: " + ninePmTxt);
console.log(todayHour > ninePmTxt);
console.log(todayHour == ninePmTxt); 

// $('.container').children().eq(1).addClass("trial1");
// $('.container').children().eq(1).children().eq(0).addClass("trial2");
// $('.container').children().eq(2).children().children().eq(1).addClass("trial3").removeClass("trial3a");
// $('.container').children().children().children(0).eq(1).addClass("trial4");
// $('.container').children().children().children(0).eq(1).removeClass("trial5");
// console.log($('.container').children().eq(2).children().children().eq(1)); 

// $('#h-6-form').children().eq(0).addClass("triala");
// $('#h-6-form').children().children().eq(1).addClass("trialb");


function hour () {
    // // Is the time in the past? 
    // if (todayHour > fiveAmTxt) {
    //     console.log("5: The time has passed")
    //     $('#h-5-form').children().children().eq(1).addClass("past").removeClass("present").removeClass("future");
    // // Is it the current time? 
    // } else if (todayHour == fiveAmTxt) {
    //     console.log("5: It's the current hour")
    //     $('#h-5-form').children().children().eq(1).removeClass("past").addClass("present").removeClass("future");
    // // Is the time in the future? 
    // } else {
    //     console.log("5: The time is in the future")
    //     $('#h-5-form').children().children().eq(1).removeClass("past").removeClass("present").addClass("future");
    // }

    // past: grey
    // current: red
    // future: green
    
    // Is the time in the past? 
    if (todayHour > sixAmTxt) {
        console.log("6: The time has passed")
        $('#h-6-form').children().children().eq(1).addClass("past").removeClass("present").removeClass("future");
    // Is it the current time? 
    } else if (todayHour == sixAmTxt) {
        console.log("6: It's the current hour")
        $('#h-6-form').children().children().eq(1).removeClass("past").addClass("present").removeClass("future");
    // Is the time in the future? 
    } else {
        console.log("6: The time is in the future")
        $('#h-6-form').children().children().eq(1).removeClass("past").removeClass("present").addClass("future");
    }

    if (todayHour > sevenAmTxt) {
        console.log("7: The time has passed")
        $('#h-7-form').children().children().eq(1).addClass("past").removeClass("present").removeClass("future");
    } else if (todayHour == sevenAmTxt) {
        console.log("7: It's the current hour")
        $('#h-7-form').children().children().eq(1).removeClass("past").addClass("present").removeClass("future");
    } else {
        console.log("7: The time is in the future")
        $('#h-7-form').children().children().eq(1).removeClass("past").removeClass("present").addClass("future");
    }

    if (todayHour > twoPmTxt) {
        console.log("14: The time has passed")
        $('#h-14-form').children().children().eq(1).addClass("past").removeClass("present").removeClass("future");
    } else if (todayHour == twoPmTxt) {
        console.log("14: It's the current hour")
        $('#h-14-form').children().children().eq(1).removeClass("past").addClass("present").removeClass("future");
    } else {
        console.log("14: The time is in the future")
        $('#h-14-form').children().children().eq(1).removeClass("past").removeClass("present").addClass("future");
    }

    if (todayHour > ninePmTxt) {
        console.log("The time has passed")
    } else if (todayHour == ninePmTxt) {
        console.log("It's the current hour")
    } else {
        console.log("The time is in the future")
    }
};

// Execute upon loading
hour();
// Execute every 5 minutes
setInterval(hour, 300000);




// var test = $('#test').val();
var test = $('input[name="test"]'); 
var testBtn = $('#test-form'); 

function testSubmit(event) {
    event.preventDefault();
    console.log("testSubmit: " + test.val());
    localStorage.setItem("testLocal",test.val());
}

testBtn.on('submit', testSubmit);


// h-14-form
var h14Btn = $('#h-14-form'); 

// h-14 Submit
function h14Submit(event) {
    event.preventDefault();
    var h14Value = $('input[name="h-14-value"]'); 
    console.log("h14Submit: " + h14Value.val());
    localStorage.setItem("h14Local",h14Value.val());
    // console.log("h14Submit: " + h14Local);
}

h14Btn.on('submit', h14Submit);

// h-15-form
var h15Value = $('input[name="h-15-value"]'); 
var h15Btn = $('#h-15-form'); 

// h-15 Submit
function h15Submit(event) {
    event.preventDefault();
    console.log("h15Submit: " + h15Value.val());
    localStorage.setItem("h15Local",h15Value.val());
}

h15Btn.on('submit', h15Submit);


/// ----- Local Storage Recall ------
function LocalStorageRecall() {
    // Test Local Storage Recall
    var testRecall = localStorage.getItem("testLocal")
    console.log("Test Recall: " + testRecall)
    console.log(typeof testRecall) // string
    $('#test-form').children().children().eq(1).attr('value', testRecall);

    // h-14 Local Storage Recall
    var h14Recall = localStorage.getItem("h14Local")
    console.log("h14Value Recall: " + h14Recall)
    $('#h-14-form').children().children().eq(1).attr('value', h14Recall);
    // $('#h-14-form').children().children().eq(1).text("value=" + h14Recall); 

    // h-15 Local Storage Recall
    var h15Recall = localStorage.getItem("h15Local")
    console.log("h15Value Recall: " + h15Recall)
    $('#h-15-form').children().children().eq(1).attr('value', h15Recall);


    // $("#h-15-form") 
    // $('#test').text(testRecall);
    // $('#test3').text(testRecall);
    // $('#textarea').children().children().eq(0).attr("value", h14Recall); 
    // $('#textarea').children().children().eq(0).attr("value", h14Recall); 
}

// $("#button").on('click', localStorage.clear())



