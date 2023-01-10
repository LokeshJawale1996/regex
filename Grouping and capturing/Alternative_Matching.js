// For example:

// (Bob|Kevin|Stuart) will match either Bob or Kevin or Stuart.
// ([a-f]|[A-F]) will match any of the following characters: a, b, c, d, e, f, A, B, C, D, E, or F.
// Task

// Given a test string, S , write a RegEx that matches S  under the following conditions:

//  S must start with Mr., Mrs., Ms., Dr. or Er..
// The rest of the string must contain only one or more English alphabetic letters (upper and lowercase).

var Regex_Pattern = /^(Mr|Mrs|Ms|Dr|Er)\.[a-zA-Z]+$/ 