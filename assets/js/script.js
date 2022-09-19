var today = moment().format("dddd, MMMM Do");
var todayHour = moment().format("hha");
$('#currentDay').text(today);




// Set the hours for the time column
// .hour lets you get or set the hour
$('#h4Txt').text(moment().hour("0").format("hha"));
$('#h6Txt').text(moment().hour("3").format("hha"));
$('#h7Txt').text(moment().hour("13").format("hha"));
$('#h5Txt').text(moment().hour("1").format("hha"));
// This could be made into a loop

var fiveAmTxt = moment().hour("2").format("hha"); 

var todayHour2 = moment().hour("4").format("hha"); 
console.log("Today's Date: " + today)
console.log("Current Hour: " + todayHour)


console.log("Block Hour: " + fiveAmTxt)
function hour () {
    console.log("Timer Test")
    if (todayHour2 < fiveAmTxt) {
        console.log("The time has passed")
    } else if (todayHour2 == fiveAmTxt) {
        console.log("It's the current hour")
    } else {
        console.log("The time is in the future")
    }
    return;
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