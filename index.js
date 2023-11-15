// code your solution here
function saturdayFun (saturday = "roller-skate") {
    return (`This Saturday, I want to ${saturday}!`);
}

function mondayWork (monday = "go to the office") {
    return (`This Monday, I will ${monday}.`);
}

function wrapAdjective (visualFlair = "*") {
    return function (description = "spcial") {
        return `You are ${visualFlair}${description}${visualFlair}!`;
    }
}