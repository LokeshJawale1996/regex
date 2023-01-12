// Task

// You have a test string S.
// Your task is to write a regex which will match S, with following condition(s):

// S consists of 8 digits.
// S  may have "-" separator such that S string  gets divided in 4  parts, with each part having exactly two digits. (Eg. 12-34-56-78)

// Valid S

// 12345678
// 12-34-56-87
// Invalid S

// 1-234-56-78
// 12-45-7810

var Regex_Pattern = /^(\d{2}(\-?))\d{2}\2\d{2}\2\d{2}$/; 