
var currentDate = moment().format("LLLL");
//console.log(rightNow);
var hourNow = moment().format("h");
console.log(hourNow);
var times = ["12 AM","1 AM","2 AM","3 AM","4 AM","5 AM","6 AM","7 AM","8 AM","9 AM","10 AM","11 AM", "12 pM","1 PM","2 PM","3 PM","4 PM","5 PM","6 PM","7 PM","8 PM","9 PM","11 PM"];

$("#currentDay").text(currentDate);
var table = $(".table");
var tbodyEL = $(".tbody")
//creating elements for the table

 var tableHeaderTimes = $("th");
var tableData = $("td")
// creating the headings
var headingT = $("h2");
var headingN = $("h2");



//headingT.text("Times");
//headingN.text("Notes");
//appending the headings

//tableHeaderTimes.append(headingT);
//append(headingN);
//tableHeaderRow.append(tableHeaderTimes);
//tableHeaderRow.append(tableHeaderNotes);
//.append(tableHeaderRow);

// create a funtion showing the table of numbers

       




// If/Else Statement - conditions for the hours
if (hourNow > 7) {
    // All textboxes will be green
    var textBx = $("#first");
    textBx.addClass("future");
}else if (hourNow == 7){
    var textBx = $("#first");
    textBx.addClass("present");
}else{
    var textBx = $("#first");
    textBx.addClass("past");
}

function LocalStorageSetUp() {
      
       var storedData = localStorage.getItem("storingData");

       var tableRow = $("<tr>");
       var tableData = $("<td>").append(storedData);
       tableRow.append(tableData);
       tbodyEL.append(tableRow);

 
};
