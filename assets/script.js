
var currentDate = moment().format("LLLL");
//console.log(rightNow);
var hourNow = moment().format("LT");
//console.log(hourNow);
var times = ["12 AM","1 AM","2 AM","3 AM","4 AM","5 AM","6 AM","7 AM","8 AM","9 AM","10 AM","11 AM", "12 pM","1 PM","2 PM","3 PM","4 PM","5 PM","6 PM","7 PM","8 PM","9 PM","11 PM"];

$("#currentDay").text(currentDate);
var table = $(".table");
var tbodyEL = $(".tbody")
//creating elements for the table
var tableRow = $("tr");
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

       
var currentHour = date.getHours(); // Return index 0 through 23
console.log(currentHour);

// If/Else Statement - conditions for the hours
