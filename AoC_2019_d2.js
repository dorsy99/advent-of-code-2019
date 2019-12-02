////////////
// Advent of Code day 2 working set
//
///////////

console.log("AoC Day 2!\n\n");

var puzzleInput = [1, 12, 2, 3, 1, 1, 2, 3, 1, 3, 4, 3, 1, 5, 0, 3, 2, 13, 1, 19, 1, 6, 19, 23, 2, 23, 6, 27, 1, 5, 27, 31, 1, 10, 31, 35, 2, 6, 35, 39, 1, 39, 13, 43, 1, 43, 9, 47, 2, 47, 10, 51, 1, 5, 51, 55, 1, 55, 10, 59, 2, 59, 6, 63, 2, 6, 63, 67, 1, 5, 67, 71, 2, 9, 71, 75, 1, 75, 6, 79, 1, 6, 79, 83, 2, 83, 9, 87, 2, 87, 13, 91, 1, 10, 91, 95, 1, 95, 13, 99, 2, 13, 99, 103, 1, 103, 10, 107, 2, 107, 10, 111, 1, 111, 9, 115, 1, 115, 2, 119, 1, 9, 119, 0, 99, 2, 0, 14, 0];
var puzzleOutput = [1, 2, 0, 3, 1, 1, 2, 3, 1, 3, 4, 3, 1, 5, 0, 3, 2, 13, 1, 19, 1, 6, 19, 23, 2, 23, 6, 27, 1, 5, 27, 31, 1, 10, 31, 35, 2, 6, 35, 39, 1, 39, 13, 43, 1, 43, 9, 47, 2, 47, 10, 51, 1, 5, 51, 55, 1, 55, 10, 59, 2, 59, 6, 63, 2, 6, 63, 67, 1, 5, 67, 71, 2, 9, 71, 75, 1, 75, 6, 79, 1, 6, 79, 83, 2, 83, 9, 87, 2, 87, 13, 91, 1, 10, 91, 95, 1, 95, 13, 99, 2, 13, 99, 103, 1, 103, 10, 107, 2, 107, 10, 111, 1, 111, 9, 115, 1, 115, 2, 119, 1, 9, 119, 0, 99, 2, 0, 14, 0];

//1, 0, 0, 0, 99 //becomes 2,0,0,0,99 (1 + 1 = 2).
//2, 3, 0, 3, 99 //becomes 2,3,0,6,99 (3 * 2 = 6).
//2, 4, 4, 5, 99, 0 //becomes 2,4,4,5,99,9801 (99 * 99 = 9801).
var test1 = [1, 1, 1, 4, 99, 5, 6, 0, 99]; //becomes 30,1,1,4,2,5,6,0,99.


function intCode(input) {
    var output = input;

    for (var i = 0; i < output.length; i = i + 4) {
        if (output[i] === 1) {
            output[output[i + 3]] = output[output[i + 1]] + output[output[i + 2]];
        }
        if (output[i] === 2) {
            output[output[i + 3]] = output[output[i + 1]] * output[output[i + 2]];
        }
        if (output[i] === 99) {

            //console.log("Finished!");
            return output;
            //console.log(output.toString());
        }
    }


}

//intCode(puzzleInput);


for (var j = 0; j < 100; j++) {
    for (var k = 0; k < 100; k++) {
        for (i = 0; i < puzzleInput.length; i++) {
            puzzleOutput[i] = puzzleInput[i];
        }
        //puzzleOutput = puzzleInput;
        puzzleOutput[1] = j;
        puzzleOutput[2] = k;
        //console.log("DOING INPUT WITH:" + puzzleOutput[1] + " & " + puzzleOutput[2]);
        var x = intCode(puzzleOutput);
        //console.log(puzzleOutput);
        //console.log(intCode(puzzleOutput));
        //puzzleOutput = puzzleInput;
        console.log(x);
        if (x[0] == 19690720) {
            console.log("FOUND IT: " + j + "  " + k);
            break;
        }
    }
}

/*
console.log(intCode(puzzleOutput));

console.log(puzzleOutput.toString());
*/





///bad lol
/*
puzzleInput.forEach(function(i) {
    if (i % 4 === 0 && i != 0) {
        console.log(i);
    }
})
*/

/*
for (var i = 0; i < puzzleInput.length; i = i + 5) {
    if (puzzleInput[i] === 1) {
        puzzleInput[puzzleInput[i + 3]] = puzzleInput[puzzleInput[i + 1]] + puzzleInput[puzzleInput[i + 2]];
    }
    if (puzzleInput[i] === 2) {
        puzzleInput[puzzleInput[i + 3]] = puzzleInput[puzzleInput[i + 1]] * puzzleInput[puzzleInput[i + 2]];
    }
    if (puzzleInput[i] === 99) {

        console.log("Finished!");
        console.log(puzzleInput.toString());
    }
}
*/