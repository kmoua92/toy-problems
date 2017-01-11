/*
package com.cj.interview.prep;

## Goal
- During the coding screen, the goal is for us to experience what it is like to code with you.
- In preparation for the screen, we want you to have an idea of the type of coding we do.
- If you feel you are rusty, or this sample takes you more than an hour, you are probably not ready to interview with us.
## Recommendations
- Do this in the language you are most comfortable with, anything https://coderpad.io/ supports will be fine
- Test drive your code, we do test driven design here, so you will want to make sure this is a style you can tolerate
- Standard libraries only
- Write your own test functions (no need for a whole test framework, focus on the parts you need for this exercise)
## Practice requirements
- no one is going to look at your results here, this is so you can have an idea of what the coding exercise might be like
- Prove that you can correctly implement a function where
    - Input: a bunch of times, minutes and seconds, formatted as a single string like: "12:32 34:01 15:23 9:27 55:22 25:56"
    - Output: the sum of the times, hours, minutes, and seconds, formatted as a single string like: "2:32:41"
## For More Information
- Do some research on "test driven development," focusing on how this style of testing can change your design

*/

var timeString = function timeString(input) {
  // Declare variables and calculate total seconds
  var inputArray = input.split(' ');
  var seconds = inputArray.reduce(function(sum, fullTimeString) {
    var numberArray = fullTimeString.split(':').map(function(partialTimeString) {
      return +partialTimeString;
    });

    return sum + numberArray[0] * 60 + numberArray[1];
  }, 0);
  var resultArray = [0, 0, 0];

  // Populate resultArray with proper quantities
  if (seconds > 3600) {
    var hours = Math.floor(seconds / 3600);
    resultArray[0] = hours;
    seconds -= hours * 3600;
  }
  if (seconds > 60) {
    var minutes = Math.floor(seconds / 60);
    resultArray[1] = minutes;
    seconds -= minutes * 60;
  }
  resultArray[2] = seconds;

  // Convert resultArray into string
  return resultArray.map(function(timeNumber, index) {
    if (index === 0) { return '' + timeNumber; }
    if (index === 1) { return timeNumber < 10 ? '0' + timeNumber : '' + timeNumber; }
    if (index === 2) { return timeNumber < 10 ? '0' + timeNumber : '' + timeNumber; }
  }).join(':');
};
