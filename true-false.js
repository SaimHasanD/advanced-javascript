//  value is 0 than its false or everything true;
const age = 5;
// if (age || age == 0) if i want to add 0 is true
if (age) {
    console.log("Condition  is true");
} else {
    console.log("Condition  is false");
}

// empty string(names = "";), undefined(names;), null(names = null;), NaN(names = Nan;), false(names = false;) is false or everything true
const names = "Saim";
// names , name.length or name.length > 0
if (names) {
    console.log("Condition  is true");
} else {
    console.log("Condition  is false");
}