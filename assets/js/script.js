var today = moment().format("dddd, MMMM Do");
var todayHour = moment().format("hha");
$('#currentDay').text(today);
console.log(todayHour.val());

// var fiveAmTxt = moment().hour("5", "hh-mm").format("ka");
$('#5amTxt').text(moment().hour("5", "hh-mm").format("hha"));
$('#6amTxt').text(moment().hour("6", "hh-mm").format("hha"));
$('#7amTxt').text(moment().hour("12", "hh-mm").format("hha"));



// var test = $('#test').val();
// var test = $('input[name="test"]'); 
// var testBtn = $('#test-button'); 

// function testSubmit(event) {
//     event.preventDefault();
//     console.log(test.val());
// }

// testBtn.on('submit', testSubmit);

// var fiveAmSchedule = $("#id").val();
var fiveAmSchedule = $('input[name="5am"]').val();
var sixAmSchedule = $('input[name=6am]').val();
var sixAmSchedule = $('#6am').val();


var fiveAmDelete = $('#button-addon2-5am');

function locallyStoreData() {
    console.log("hello");
    // Console log value
    // console.log(fiveAmSchedule);
    // console.log(sixAmSchedule); 
    // Local Storage
    // localStorage.setItem("5amSch", fiveAmSchedule.val); 
}

// CLICK CODE 1
// Calls function to locally store data if the
$("body").click(function(event) {
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