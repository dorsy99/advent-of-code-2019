/////////////
// Day 4!
/////////////

var input = "128392 - 643281";
var range = [];

for (var i = 128392; i < 643282; i++) {
    range.push(i);
}

function hasConsecutiveNums(input) {
    //var inputSplit = input.split("");

    //'/\d{4}/'

    /*inputSplit.filter(function(value, index){
        if (inputSplit[index+1] == value) {
            return true;
        } else {
            return false;
        }
    })*/

    return (!!(input.toString().match(/.*(?:(\d)\1{1})/)));
}

function onlyIncreases(input) {
    var inputSplit = input.toString();
    var output = true;
    for (i = 0; i < 6; i++) {
        if (inputSplit[i] > inputSplit[i + 1]) {
            output = false;
        }
    }
    return output;
}

/*
console.log(onlyIncreases("12344"));

console.log();
*/
var answer = 0;
var listOfAnswers = [];
range.forEach(function(item) {
    if (onlyIncreases(item) && hasConsecutiveNums(item)) {
        answer++;
        listOfAnswers.push(item);
    }
})

console.log(listOfAnswers.toString());


/* WRONG WRONG WRONG WRONG
WRONG WRONG WRONG WRONG
WRONG
WRONG
LOL
function twoOrFour(input) {
    var out = false;

    if (!!(input.toString().match(/(?:^|[^0])((?:0{2})+)(?!0)/))) {
        out = true;
    }
    if (!!(input.toString().match(/(?:^|[^1])((?:1{2})+)(?!1)/))) {
        out = true;
    }
    if (!!(input.toString().match(/(?:^|[^2])((?:2{2})+)(?!2)/))) {
        out = true;
    }
    if (!!(input.toString().match(/(?:^|[^3])((?:3{2})+)(?!3)/))) {
        out = true;
    }
    if (!!(input.toString().match(/(?:^|[^4])((?:4{2})+)(?!4)/))) {
        out = true;
    }
    if (!!(input.toString().match(/(?:^|[^5])((?:5{2})+)(?!5)/))) {
        out = true;
    }
    if (!!(input.toString().match(/(?:^|[^6])((?:6{2})+)(?!6)/))) {
        out = true;
    }
    if (!!(input.toString().match(/(?:^|[^7])((?:7{2})+)(?!7)/))) {
        out = true;
    }
    if (!!(input.toString().match(/(?:^|[^8])((?:8{2})+)(?!8)/))) {
        out = true;
    }
    if (!!(input.toString().match(/(?:^|[^9])((?:9{2})+)(?!9)/))) {
        out = true;
    }
    return out;
}
*/
//console.log("ANSWER IS: " + answer);
//console.log(range);



/* 
var arr = ['a', 'b', 'a', 'c', 'a', 'd'];
arr = arr.filter(
    function (value, index, self) {
        return self.indexOf(value) === index;
    }
)
console.log(arr);
outputs:
[ 'a', 'b', 'c', 'd' ]
*/