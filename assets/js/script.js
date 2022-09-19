var today = moment().format("dddd, MMMM Do");
var todayHour = moment().format("hha");
$('#currentDay').text(today);


var fiveAmTxt = moment().hour("5").format("hha"); 
var sixAmTxt = moment().hour("6").format("hha");
var sevenAmTxt = moment().hour("7").format("hha");
var eightAmTxt = moment().hour("8").format("hha");
var nineAmTxt = moment().hour("9").format("hha");
var ninePmTxt = moment().hour("21").format("hha");

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


function hour () {
    if (todayHour > fiveAmTxt) {
        console.log("5a: The time has passed")
    } else if (todayHour == fiveAmTxt) {
        console.log("It's the current hour")
    } else {
        console.log("The time is in the future")
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