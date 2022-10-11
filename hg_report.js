"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 2

   Author: Mohamed Mohamed
   Date:   09/24/2022
   
   Filename: hg_report.js
	
*/
// write information about the game using HTML for the game summary
var gameReport;
gameReport = "<h1>Dance Off VII</h1>";
gameReport += "<h2>By: Anasta Games</h2>";
gameReport += "<img src='hg_10551.png' alt='10551' id='gameImg' />";
gameReport += "<table>";
gameReport += "<tr><th>Product ID</th><td>" + itemID + "</td></tr>";
gameReport += "<tr><th>List Price</th><td>" + itemPrice + "</td></tr>";
gameReport += "<tr><th>Platform</th><td>" + itemPlatform + "</td></tr>";
gameReport += "<tr><th>ESRB Rating</th><td>" + itemESRB + "</td></tr>";
gameReport += "<tr><th>Condition</th><td>" + itemCondition + "</td></tr>";
gameReport += "<tr><th>Release</th><td>" + itemRelease + "</td></tr>";
gameReport += "</table>";
gameReport += itemSummary;

// display gameReport 
document.getElementsByTagName("article")[0].innerHTML = gameReport;

//declare ratingsSum and ratingsCount
var ratingsSum = 0;
var ratingsCount = ratings.length;

//adding ratings together
for (var i = 0; i < ratings.length; i++) {
    ratingsSum += ratings[i];
}

//getting the average
var ratingsAvg = ratingsSum / ratingsCount;

//Heading 
var ratingReport = "<h1>Customer Reviews</h1> <h2>" + ratingsAvg + " out of 5 stars (" + ratingsCount + " reviews)</h2>";

//making the reviews and star ratings
for (var i = 0; i <= 2; i++) {
    ratingReport += "<div class='review'>";
    ratingReport += "<h1>" + ratingTitles[i] + "</h1>";
    ratingReport += "<table> <tr><th>By</th><td>" + ratingAuthors[i] + "</td></tr>";
    ratingReport += "<tr><th>Review Date</th><td>" + ratingDates[i] + "</td></tr>";
    ratingReport += "<tr><th>Rating</th><td>";
    for (var j = 0; j < ratings[i]; j++) {
        ratingReport += "<img src='hg_star.png'/>";
    }
    ratingReport += "</td></tr></table>" + ratingSummaries[i] + "</div>";
}

document.getElementsByTagName("aside")[0].innerHTML = ratingReport;
