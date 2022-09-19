var today = moment().format("dddd, MMMM Do");
var todayHour = moment().format("hha");
$('#currentDay').text(today);

// Set the hours for the time column
// .hour lets you get or set the hour
console.log(moment().format("hha"));
var fiveAmTxt = $('#h4Txt').text(moment().hour("8").format("hha"));
var fiveAmTxt = $('#h5Txt').text(moment().hour("8").format("hha"));
var sixAmTxt = $('#h6Txt').text(moment().hour("6").format("hha"));
var sevenAmTxt = $('#h7Txt').text(moment().hour("13").format("hha"));





// var test = $('#test').val();
var test = $('input[name="test"]'); 
var testBtn = $('#test-form'); 

function testSubmit(event) {
    event.preventDefault();
    console.log(test.val());
    // $('input[name="test"]').val("");
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