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


// // BUILD TEST
// console.log("Current Hour: " + todayHour)
// console.log('twoPmTxt: ' + twoPmTxt);
// console.log("ninePmTxt: " + ninePmTxt);
// console.log(todayHour > ninePmTxt);
// console.log(todayHour == ninePmTxt); 
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

// h-5-form
var h5Value = $('input[name="h-5-value"]');
var h5Btn = $('#h-5-form'); 

// h-5 Submit
function h5Submit(event) {
    event.preventDefault(); 
    localStorage.setItem("h5Local",h5Value.val());
}

h5Btn.on('submit', h5Submit);

// h-6-form
var h6Value = $('input[name="h-6-value"]');
var h6Btn = $('#h-6-form'); 

// h-6 Submit
function h6Submit(event) {
    event.preventDefault(); 
    localStorage.setItem("h6Local",h6Value.val());
}

h6Btn.on('submit', h6Submit);

// h-7-form
var h7Value = $('input[name="h-7-value"]');
var h7Btn = $('#h-7-form'); 

// h-7 Submit
function h7Submit(event) {
    event.preventDefault(); 
    localStorage.setItem("h7Local",h7Value.val());
}

h7Btn.on('submit', h7Submit);

// h-8-form
var h8Value = $('input[name="h-8-value"]');
var h8Btn = $('#h-8-form'); 

// h-8 Submit
function h8Submit(event) {
    event.preventDefault(); 
    localStorage.setItem("h8Local",h8Value.val());
}

h8Btn.on('submit', h8Submit);

// h-9-form
var h9Value = $('input[name="h-9-value"]');
var h9Btn = $('#h-9-form'); 

// h-9 Submit
function h9Submit(event) {
    event.preventDefault(); 
    localStorage.setItem("h9Local",h9Value.val());
}

h9Btn.on('submit', h9Submit);

// h-10-form
var h10Value = $('input[name="h-10-value"]');
var h10Btn = $('#h-10-form'); 

// h-10 Submit
function h10Submit(event) {
    event.preventDefault(); 
    localStorage.setItem("h10Local",h10Value.val());
}

h10Btn.on('submit', h10Submit);

// h-11-form
var h11Value = $('input[name="h-11-value"]');
var h11Btn = $('#h-11-form'); 

// h-11 Submit
function h11Submit(event) {
    event.preventDefault(); 
    localStorage.setItem("h11Local",h11Value.val());
}

h11Btn.on('submit', h11Submit);

// h-12-form
var h12Value = $('input[name="h-12-value"]');
var h12Btn = $('#h-12-form'); 

// h-12 Submit
function h12Submit(event) {
    event.preventDefault(); 
    localStorage.setItem("h12Local",h12Value.val());
}

h12Btn.on('submit', h12Submit);

// h-13-form
var h13Value = $('input[name="h-13-value"]');
var h13Btn = $('#h-13-form'); 

// h-13 Submit
function h13Submit(event) {
    event.preventDefault();
    localStorage.setItem("h13Local",h13Value.val());
}

h13Btn.on('submit', h13Submit);

// h-14-form
var h14Value = $('input[name="h-14-value"]');
var h14Btn = $('#h-14-form'); 

// h-14 Submit
function h14Submit(event) {
    event.preventDefault();
    // var h14Value = $('input[name="h-14-value"]'); 
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

// h-16-form
var h16Value = $('input[name="h-16-value"]');
var h16Btn = $('#h-16-form'); 

// h-16 Submit
function h16Submit(event) {
    event.preventDefault();
    localStorage.setItem("h16Local",h16Value.val());
}

h16Btn.on('submit', h16Submit);

// h-17-form
var h17Value = $('input[name="h-17-value"]');
var h17Btn = $('#h-17-form'); 

// h-17 Submit
function h17Submit(event) {
    event.preventDefault();
    localStorage.setItem("h17Local",h17Value.val());
}

h17Btn.on('submit', h17Submit);

// h-18-form
var h18Value = $('input[name="h-18-value"]');
var h18Btn = $('#h-18-form'); 

// h-18 Submit
function h18Submit(event) {
    event.preventDefault();
    localStorage.setItem("h18Local",h18Value.val());
}

h18Btn.on('submit', h18Submit);


function LocalStorageRecall() {  
    // h-5 Local Storage Recall
    var h5Recall = localStorage.getItem("h5Local")
    $('#h-5-form').children().children().eq(1).attr('value', h5Recall);

    // h-6 Local Storage Recall
    var h6Recall = localStorage.getItem("h6Local")
    $('#h-6-form').children().children().eq(1).attr('value', h6Recall);

    // h-7 Local Storage Recall
    var h7Recall = localStorage.getItem("h7Local")
    $('#h-7-form').children().children().eq(1).attr('value', h7Recall);

    // h-8 Local Storage Recall
    var h8Recall = localStorage.getItem("h8Local")
    $('#h-8-form').children().children().eq(1).attr('value', h8Recall);

    // h-9 Local Storage Recall
    var h9Recall = localStorage.getItem("h9Local")
    $('#h-9-form').children().children().eq(1).attr('value', h9Recall);

    // h-10 Local Storage Recall
    var h10Recall = localStorage.getItem("h10Local")
    $('#h-10-form').children().children().eq(1).attr('value', h10Recall);

    // h-11 Local Storage Recall
    var h11Recall = localStorage.getItem("h11Local")
    $('#h-11-form').children().children().eq(1).attr('value', h11Recall);

    // h-12 Local Storage Recall
    var h12Recall = localStorage.getItem("h12Local")
    $('#h-12-form').children().children().eq(1).attr('value', h12Recall);

    // h-13 Local Storage Recall
    var h13Recall = localStorage.getItem("h13Local")
    $('#h-13-form').children().children().eq(1).attr('value', h13Recall);

    // h-14 Local Storage Recall
    var h14Recall = localStorage.getItem("h14Local")
    $('#h-14-form').children().children().eq(1).attr('value', h14Recall);
    // $('#h-14-form').children().children().eq(1).text("value=" + h14Recall); 

    // h-15 Local Storage Recall
    var h15Recall = localStorage.getItem("h15Local")
    console.log("h15Value Recall Value: " + h15Recall)
    console.log("h15Value Recall Type: " + typeof h15Recall)
    $('#h-15-form').children().children().eq(1).attr('value', h15Recall);

    // h-16 Local Storage Recall
    var h16Recall = localStorage.getItem("h16Local")
    $('#h-16-form').children().children().eq(1).attr('value', h16Recall);
 
    // h-17 Local Storage Recall
    var h17Recall = localStorage.getItem("h17Local")
    $('#h-17-form').children().children().eq(1).attr('value', h17Recall);

    // h-18 Local Storage Recall
    var h18Recall = localStorage.getItem("h18Local")
    $('#h-18-form').children().children().eq(1).attr('value', h18Recall);

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

// /// ----- Local Storage Recall ------
// var timeBlocks = ['h5','h6', 'h7', 'h8', 'h14'];
// var recallLi = [];
// for (var i=0; i<timeBlocks.length; i++) {
//     recallLi.push(timeBlocks[i] + "Recall"); 
// }
// console.log(recallLi); 
// console.log(typeof recallLi); // object