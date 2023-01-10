
// Task

// You have a test string S.
// Your task is to write a regex that will match S using the following conditions:

// S should begin with 1 or 2   digits.
// After that, S should have 3 or more letters (both lowercase and uppercase).
// Then S should end with up to 3 . symbol(s). You can end with  0 to 3 . symbol(s), inclusively.

var Regex_Pattern = /^\d{2,}[a-z]*[A-Z]*$/; 
// var Regex_Pattern = /^\d{2,}[a-z]{0,}[A-Z]{0,}$/; 
