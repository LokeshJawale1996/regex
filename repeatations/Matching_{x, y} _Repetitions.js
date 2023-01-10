// w{3,5} : It will match the character w 3,4 or 5  times.
// [xyz]{5,} : It will match the character x, y or z 5 or more times.
// \d{1, 4} : It will match any digits 1,2,3 or 4  times.

// Task

// You have a test string S.
// Your task is to write a regex that will match S using the following conditions:

// S should begin with  or  digits.
// After that, S should have 3 or more letters (both lowercase and uppercase).
// Then S should end with up to 3 . symbol(s). You can end with 0 to 3 . symbol(s), inclusively.

var Regex_Pattern = /^\d{1,2}[a-zA-Z]{3,}[.]{0,3}$/; 