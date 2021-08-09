
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





       




// If/Else Statement - conditions for the hours
if (hourNow > 7) {
    // All textboxes will be green
    let textBx = $("#first");
    textBx.addClass("future");
}else if (hourNow == 7){
    let textBx = $("#first");
    textBx.addClass("present");
}else{
    var textBx = $("#first");
    textBx.addClass("past");
}
if (hourNow > 8) {
    // All textboxes will be green
    let textBx = $("#second");
    textBx.addClass("future");
}else if (hourNow == 8){
    let textBx = $("#second");
    textBx.addClass("present");
}else{
    let textBx = $("#second");
    textBx.addClass("past");
}
if (hourNow > 9) {
    // All textboxes will be green
    let textBx = $("#third");
    textBx.addClass("future");
}else if (hourNow == 9){
    let textBx = $("#third");
    textBx.addClass("present");
}else{
    let textBx = $("third");
    textBx.addClass("past");
}
if (hourNow > 10) {
    // All textboxes will be green
    let textBx = $("#fourth");
    textBx.addClass("future");
}else if (hourNow == 10){
    let textBx = $("#fourth");
    textBx.addClass("present");
}else{
    let textBx = $("#fourth");
    textBx.addClass("past");
}
if (hourNow > 11) {
    // All textboxes will be green
    let textBx = $("#fith");
    textBx.addClass("future");
}else if (hourNow == 11){
    let textBx = $("#fith");
    textBx.addClass("present");
}else{
    let textBx = $("#fith");
    textBx.addClass("past");
}
if (hourNow > 12) {
    // All textboxes will be green
    let textBx = $("#sixth");
    textBx.addClass("future");
}else if (hourNow == 12){
    let textBx = $("#sixth");
    textBx.addClass("present");
}else{
    let textBx = $("#xixth");
    textBx.addClass("past");
}
if (hourNow > 1) {
    // All textboxes will be green
    let textBx = $("#seventh");
    textBx.addClass("future");
}else if (hourNow == 1){
    let textBx = $("#seventh");
    textBx.addClass("present");
}else{
    let textBx = $("#seventh");
    textBx.addClass("past");
}
if (hourNow > 2) {
    // All textboxes will be green
    let textBx = $("#eight");
    textBx.addClass("future");
}else if (hourNow == 2){
    let textBx = $("#eight");
    textBx.addClass("present");
}else{
    let textBx = $("#eight");
    textBx.addClass("past");
}

function LocalStorageSetUp() {
      
       var storedData = localStorage.getItem("storingData");

       var tableRow = $("<tr>");
       var tableData = $("<td>").append(storedData);
       tableRow.append(tableData);
       tbodyEL.append(tableRow);

 
};
