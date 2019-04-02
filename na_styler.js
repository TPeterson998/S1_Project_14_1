"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 1

   Author: Trent Peterson
   Date:   4.2.19

   Filename: na_styler.js

   Functions
   =========
   
   setStyles()
      Sets up the style sheets and the style sheet switcher.
      
   randInt(size)
      Returns a random integer from 0 up to size-1.

*/
//this loads the function on load
window.addEventListener("load", setStyles)
//This is the function that is called in above
function setStyles() {
      //This is call in the premade function random load a function
      var styleNum = randInt(5);
      //This creates a link to the to the specific stylesheet that is random because of the random number above then appending it ito the head
      var link = document.createElement("link");
      link.setAttribute("rel", "stylesheet");
      link.setAttribute("id", "fancySheet");
      link.setAttribute("href", "na_style_" + styleNum + ".css");
      document.head.appendChild(link);
      //This creates a figure and it is then appended tot the div with the Id box
      var figBox = document.createElement("figure");
      figBox.setAttribute("id", "styleThumbs");
      document.getElementById("box").appendChild(figBox);
      //This is a for loop to get the different img in the figure 
      for (var i = 0; i <= 4; i++) {
            //THis is the img and the scr and alt change for each index
            var sheetImg = document.createElement("img");
            sheetImg.setAttribute("src", "na_small_" + [i] + ".png");
            sheetImg.setAttribute("alt", "na_style_" + [i] + ".css");
            //This makes it so when you click on one of the pictures it changes the href of the style sheet to the alt that changes above
            sheetImg.addEventListener("click", function (e) {
                  document.getElementById("fancySheet").setAttribute("href", e.target.alt);
            })
            //This appends the figure
            figBox.appendChild(sheetImg);
      }
      //This creates a style in the head
      var thumbStyles = document.createElement("style");
      document.head.appendChild(thumbStyles);
      //This is all of the code NOTE TO SELF DO NOT COPY AND PASTE THE SPACING IS WRONG
      document.styleSheets[document.styleSheets.length - 1].insertRule(
            "figure#styleThumbs {\
                  position: absolute;\
                  left: 0px;\
                  bottom: 0px;\
            }", 0);
      document.styleSheets[document.styleSheets.length - 1].insertRule(
            "figure#styleThumbs img {\
                  outline: 1px solid black;\
                  cursor: pointer;\
                  opacity: 0.75;\
            }", 1);
      document.styleSheets[document.styleSheets.length - 1].insertRule(
            "figure#styleThumbs img:hover {\
                  outline: 1px solid red;\
                  opacity: 1.0;\
            }", 2);
};


function randInt(size) {
      return Math.floor(size * Math.random());
}