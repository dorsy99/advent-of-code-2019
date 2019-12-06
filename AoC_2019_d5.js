/// Day 5
var input = '3,225,1,225,6,6,1100,1,238,225,104,0,1002,148,28,224,1001,224,-672,224,4,224,1002,223,8,223,101,3,224,224,1,224,223,223,1102,8,21,225,1102,13,10,225,1102,21,10,225,1102,6,14,225,1102,94,17,225,1,40,173,224,1001,224,-90,224,4,224,102,8,223,223,1001,224,4,224,1,224,223,223,2,35,44,224,101,-80,224,224,4,224,102,8,223,223,101,6,224,224,1,223,224,223,1101,26,94,224,101,-120,224,224,4,224,102,8,223,223,1001,224,7,224,1,224,223,223,1001,52,70,224,101,-87,224,224,4,224,1002,223,8,223,1001,224,2,224,1,223,224,223,1101,16,92,225,1101,59,24,225,102,83,48,224,101,-1162,224,224,4,224,102,8,223,223,101,4,224,224,1,223,224,223,1101,80,10,225,101,5,143,224,1001,224,-21,224,4,224,1002,223,8,223,1001,224,6,224,1,223,224,223,1102,94,67,224,101,-6298,224,224,4,224,102,8,223,223,1001,224,3,224,1,224,223,223,4,223,99,0,0,0,677,0,0,0,0,0,0,0,0,0,0,0,1105,0,99999,1105,227,247,1105,1,99999,1005,227,99999,1005,0,256,1105,1,99999,1106,227,99999,1106,0,265,1105,1,99999,1006,0,99999,1006,227,274,1105,1,99999,1105,1,280,1105,1,99999,1,225,225,225,1101,294,0,0,105,1,0,1105,1,99999,1106,0,300,1105,1,99999,1,225,225,225,1101,314,0,0,106,0,0,1105,1,99999,108,677,677,224,102,2,223,223,1005,224,329,101,1,223,223,1107,677,226,224,102,2,223,223,1006,224,344,101,1,223,223,1107,226,226,224,102,2,223,223,1006,224,359,101,1,223,223,1108,677,677,224,102,2,223,223,1005,224,374,101,1,223,223,8,677,226,224,1002,223,2,223,1005,224,389,101,1,223,223,108,226,677,224,1002,223,2,223,1006,224,404,1001,223,1,223,107,677,677,224,102,2,223,223,1006,224,419,101,1,223,223,1007,226,226,224,102,2,223,223,1005,224,434,101,1,223,223,1007,677,677,224,102,2,223,223,1005,224,449,1001,223,1,223,8,677,677,224,1002,223,2,223,1006,224,464,101,1,223,223,1108,677,226,224,1002,223,2,223,1005,224,479,101,1,223,223,7,677,226,224,1002,223,2,223,1005,224,494,101,1,223,223,1008,677,677,224,1002,223,2,223,1006,224,509,1001,223,1,223,1007,226,677,224,1002,223,2,223,1006,224,524,1001,223,1,223,107,226,226,224,1002,223,2,223,1006,224,539,1001,223,1,223,1107,226,677,224,102,2,223,223,1005,224,554,101,1,223,223,1108,226,677,224,102,2,223,223,1006,224,569,101,1,223,223,108,226,226,224,1002,223,2,223,1006,224,584,1001,223,1,223,7,226,226,224,1002,223,2,223,1006,224,599,101,1,223,223,8,226,677,224,102,2,223,223,1005,224,614,101,1,223,223,7,226,677,224,1002,223,2,223,1005,224,629,101,1,223,223,1008,226,677,224,1002,223,2,223,1006,224,644,101,1,223,223,107,226,677,224,1002,223,2,223,1005,224,659,1001,223,1,223,1008,226,226,224,1002,223,2,223,1006,224,674,1001,223,1,223,4,223,99,226';
var inputArray = input.split(",");

var codeInput = "1";

String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

function findNextSplit(curIndex, string) {
    if (string[curIndex] == ',') {
        return curIndex;
    } else {
        return findNextSplit(curIndex + 1, string);
    }
}

function getParam(curIndex, string) {
    return string.substr[curIndex, findNextSplit(curIndex, string)];
}

function fixOpCode(input) {
    input = input.toString();
    if (input.length == 5) {
        return input
    } else if (input.length == 4) {
        return ("0" + input);
    } else if (input.length == 3) {
        return ("00" + input);
    } else if (input.length == 2) {
        return ("000" + input);
    } else if (input.length == 1) {
        return ("0000" + input);
    }
}
//console.log(findNextSplit(5,"Hello,world,lol"));

/*
for (var i = 0; i < 100;) {
    console.log(i);
    i = i + 2;
    if (i == 50) {
        break;
    }
}
*/

//console.log(fixOpCode(1002));

function intCode(input) {
    //var output = input;
    var output = input.split(",");
    var curParam = fixOpCode(output[0]);
    var nextInstruction = 0;


    while (curParam.substr(3, 4) != "99") {
        //need to set length of instruction, and calculate hte six digit opcode
        console.log("next instruction: " + nextInstruction);
        console.log("OpCode: " + curParam.substr(3, 4));
        // ADDITION
        if (curParam.substr(3, 4) == "01") {
            console.log("addition");
            var parm1;
            var parm2;
            var loc;
            if (curParam[2] == "0") {
                parm1 = output[output[nextInstruction + 1]];
            } else if (curParam[2] == "1") {
                parm1 = output[nextInstruction + 1]
            }

            if (curParam[1] == "0") {
                parm2 = output[output[nextInstruction + 2]];
            } else if (curParam[1] == "1") {
                parm2 = output[nextInstruction + 2]
            }

            if (curParam[0] == "0") {
                loc = output[nextInstruction + 3];
            } else if (curParam[0] == "1") {
                console.log("NEVER HIT HERE!");
            }
            output[loc] = (parseInt(parm1) + parseInt(parm2)).toString();
            //output[i + 3] = output[output[i + 1]] + output[output[i + 2]];

            nextInstruction = nextInstruction + 5;
        }

        //MULTIPLICATION 
        else if (curParam.substr(3, 4) == "02") {
            console.log("multiplication");
            /*output[output[i + 3]] = output[output[i + 1]] * output[output[i + 2]];

            nextInstruction = 4*/
            var parm1;
            var parm2;
            var loc;
            if (curParam[2] == "0") {
                parm1 = output[output[nextInstruction + 1]];
            } else if (curParam[2] == "1") {
                parm1 = output[nextInstruction + 1]
            }

            if (curParam[1] == "0") {
                parm2 = output[output[nextInstruction + 2]];
            } else if (curParam[1] == "1") {
                parm2 = output[nextInstruction + 2]
            }

            if (curParam[0] == "0") {
                loc = output[nextInstruction + 3];
            } else if (curParam[0] == "1") {
                console.log("NEVER HIT HERE!");
            }
            output[loc] = (parseInt(parm1) * parseInt(parm2)).toString();
            //output[i + 3] = output[output[i + 1]] + output[output[i + 2]];

            nextInstruction = nextInstruction + 5;
        }

        //(USER) Input
        else if (curParam.substr(3, 4) === "03") {
            //output = output.replaceAt(output[nextInstruction + 1], codeInput);
            output[nextInstruction + 1] = codeInput;
            nextInstruction = nextInstruction + 2;
        }

        //OUTPUT
        else if (curParam.substr(3, 4) === "04") {
            console.log(output[nextInstruction + 1]);
            nextInstruction = nextInstruction + 2;
        }

        //END
        else if (curParam.substr(3, 4) === "99") {

            console.log("Finished!");
            break;
            //return output;
            //console.log(output.toString());
        } else {
            console.log("Something went wrong!\n" + "Next Instruction: " + nextInstruction + "\nCurrent Param: " + curParam);
            break
        }


        var curParam = fixOpCode(output[nextInstruction]);
    }


}

//intCode("1002,4,3,4,33");
intCode(input);
//intCode("4,50,99");

//console.log(intCode('1101,100,-1,4,0,99'));