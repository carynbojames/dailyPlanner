var today = moment().format("dddd, MMMM Do");
var todayHour = moment().format("HH");
$('#currentDay').text(today);

LocalStorageRecall(); 

// Time stamps for logic to determine if the time block is past, present, or future
var fiveAmTxt = moment().hour("5").format("HH"); 
var sixAmTxt = moment().hour("6").format("HH");
var sevenAmTxt = moment().hour("7").format("HH");
var eightAmTxt = moment().hour("8").format("HH");
var nineAmTxt = moment().hour("9").format("HH");
var tenAmTxt = moment().hour("10").format("HH");
var elevenAmTxt = moment().hour("11").format("HH");
var twelvePmTxt = moment().hour("12").format("HH");
var onePmTxt = moment().hour("13").format("HH");
var twoPmTxt = moment().hour("14").format("HH");
var threePmTxt = moment().hour("15").format("HH");
var fourPmTxt = moment().hour("16").format("HH");
var fivePmTxt = moment().hour("17").format("HH");
var sixPmTxt = moment().hour("18").format("HH");
var sevenPmTxt = moment().hour("19").format("HH");
var eightPmTxt = moment().hour("20").format("HH");
var ninePmTxt = moment().hour("21").format("HH");

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
    // past: grey
    // current: red
    // future: green
    
    // Is the time in the past? 
    if (todayHour > fiveAmTxt) {
        console.log("6: The time has passed")
        $('#h-5-form').children().children().eq(1).addClass("past").removeClass("present").removeClass("future");
    // Is it the current time? 
    } else if (todayHour == fiveAmTxt) {
        console.log("6: It's the current hour")
        $('#h-5-form').children().children().eq(1).removeClass("past").addClass("present").removeClass("future");
    // Is the time in the future? 
    } else {
        console.log("6: The time is in the future")
        $('#h-5-form').children().children().eq(1).removeClass("past").removeClass("present").addClass("future");
    }

    if (todayHour > sixAmTxt) {
        console.log("6: The time has passed")
        $('#h-6-form').children().children().eq(1).addClass("past").removeClass("present").removeClass("future");
    } else if (todayHour == sixAmTxt) {
        console.log("6: It's the current hour")
        $('#h-6-form').children().children().eq(1).removeClass("past").addClass("present").removeClass("future");
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

    if (todayHour > eightAmTxt) {
        $('#h-8-form').children().children().eq(1).addClass("past").removeClass("present").removeClass("future");
    } else if (todayHour == eightAmTxt) {
        $('#h-8-form').children().children().eq(1).removeClass("past").addClass("present").removeClass("future");
    } else {
        $('#h-8-form').children().children().eq(1).removeClass("past").removeClass("present").addClass("future");
    }

    if (todayHour > nineAmTxt) {
        $('#h-9-form').children().children().eq(1).addClass("past").removeClass("present").removeClass("future");
    } else if (todayHour == nineAmTxt) {
        $('#h-9-form').children().children().eq(1).removeClass("past").addClass("present").removeClass("future");
    } else {
        $('#h-9-form').children().children().eq(1).removeClass("past").removeClass("present").addClass("future");
    }

    if (todayHour > tenAmTxt) {
        $('#h-10-form').children().children().eq(1).addClass("past").removeClass("present").removeClass("future");
    } else if (todayHour == tenAmTxt) {
        $('#h-10-form').children().children().eq(1).removeClass("past").addClass("present").removeClass("future");
    } else {
        $('#h-10-form').children().children().eq(1).removeClass("past").removeClass("present").addClass("future");
    }

    if (todayHour > elevenAmTxt) {
        $('#h-11-form').children().children().eq(1).addClass("past").removeClass("present").removeClass("future");
    } else if (todayHour == elevenAmTxt) {
        $('#h-11-form').children().children().eq(1).removeClass("past").addClass("present").removeClass("future");
    } else {
        $('#h-11-form').children().children().eq(1).removeClass("past").removeClass("present").addClass("future");
    }

    if (todayHour > twelvePmTxt) {
        $('#h-12-form').children().children().eq(1).addClass("past").removeClass("present").removeClass("future");
    } else if (todayHour == twelvePmTxt) {
        $('#h-12-form').children().children().eq(1).removeClass("past").addClass("present").removeClass("future");
    } else {
        $('#h-12-form').children().children().eq(1).removeClass("past").removeClass("present").addClass("future");
    }

    if (todayHour > onePmTxt) {
        $('#h-13-form').children().children().eq(1).addClass("past").removeClass("present").removeClass("future");
    } else if (todayHour == onePmTxt) {
        $('#h-13-form').children().children().eq(1).removeClass("past").addClass("present").removeClass("future");
    } else {
        $('#h-13-form').children().children().eq(1).removeClass("past").removeClass("present").addClass("future");
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

    if (todayHour > threePmTxt) {
        $('#h-15-form').children().children().eq(1).addClass("past").removeClass("present").removeClass("future");
    } else if (todayHour == threePmTxt) {
        $('#h-15-form').children().children().eq(1).removeClass("past").addClass("present").removeClass("future");
    } else {
        $('#h-15-form').children().children().eq(1).removeClass("past").removeClass("present").addClass("future");
    }

    if (todayHour > fourPmTxt) {
        $('#h-16-form').children().children().eq(1).addClass("past").removeClass("present").removeClass("future");
    } else if (todayHour == fourPmTxt) {
        $('#h-16-form').children().children().eq(1).removeClass("past").addClass("present").removeClass("future");
    } else {
        $('#h-16-form').children().children().eq(1).removeClass("past").removeClass("present").addClass("future");
    }

    if (todayHour > fivePmTxt) {
        $('#h-17-form').children().children().eq(1).addClass("past").removeClass("present").removeClass("future");
    } else if (todayHour == fivePmTxt) {
        $('#h-17-form').children().children().eq(1).removeClass("past").addClass("present").removeClass("future");
    } else {
        $('#h-17-form').children().children().eq(1).removeClass("past").removeClass("present").addClass("future");
    }

    if (todayHour > sixPmTxt) {
        $('#h-18-form').children().children().eq(1).addClass("past").removeClass("present").removeClass("future");
    } else if (todayHour == sixPmTxt) {
        $('#h-18-form').children().children().eq(1).removeClass("past").addClass("present").removeClass("future");
    } else {
        $('#h-18-form').children().children().eq(1).removeClass("past").removeClass("present").addClass("future");
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
var h14Value = $('input[name="h-14-value"]');
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
var h15Btn = $('#h-15-form'); // button list

// h-15 Submit
function h15Submit(event) {
    event.preventDefault();
    console.log("h15Submit: " + h15Value.val()); // not required
    localStorage.setItem("h15Local",h15Value.val());
}

h15Btn.on('submit', h15Submit);


// /// ----- Local Storage Recall ------
// var timeBlocks = ['h5','h6', 'h7', 'h8', 'h14'];
// var recallLi = [];
// for (var i=0; i<timeBlocks.length; i++) {
//     recallLi.push(timeBlocks[i] + "Recall"); 
// }
// console.log(recallLi); 
// console.log(typeof recallLi); // object





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

    // BUILD TESTS :: Testing getData at different locations
    // $("#h-15-form") 
    // $('#test').text(testRecall);
    // $('#test3').text(testRecall);
    // $('#textarea').children().children().eq(0).attr("value", h14Recall); 
    // $('#textarea').children().children().eq(0).attr("value", h14Recall); 
}

// $("#button").on('click', localStorage.clear())


// 1a. HTML create a primary button in HTML
// 1b. Create an array of the time blocks
// 1c. Create an array of the buttons

// 2a. Event delegation calls the specific time block to locally store the data
// 2b. Create var for the input data
//     Use the data-time block to assign and name the variable

// 3a. localStorageRecall
// 3b. Create an array of the recall variable names
// 3c. For loop to get the data from local storage
//     Add attribute 'value' to <input> element    


// var storedData = [
//     h5Recall, 
//     h6Recall, 
//     h7Recall, 
//     h8Recall,
// ]

// for (var i = 0) {

// }; 

// for (var i = 0; i < storedData.length; i++) {
//     var storedData[i] = localStorage.getItem("h14local")
//     $('#test-form').children().children().eq(1).attr('value', storedData[i]);
// }