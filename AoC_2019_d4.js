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
range.forEach(function(item) {
    if (onlyIncreases(item) && hasConsecutiveNums(item)) {
        answer++;
    }
})

console.log("ANSWER IS: " + answer);
console.log(range);

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