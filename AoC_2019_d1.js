////////////
// Advent of Code day 1 working set
//
///////////

var inputs = [82406, 83106, 120258, 142695, 50629, 117793, 81165, 83442, 70666, 94355, 64069, 72830, 88813, 148762, 90723, 121206, 57713, 116892, 82470, 101686, 83768, 92160, 91532, 136997, 142382, 120050, 81062, 106227, 112071, 102275, 54033, 109059, 91772, 63320, 81872, 52925, 92225, 60053, 110402, 97125, 87404, 54970, 66662, 83979, 88474, 91361, 69272, 61559, 56603, 96324, 66226, 95278, 105643, 139141, 116838, 130717, 97708, 108371, 73652, 100518, 98295, 63127, 50486, 121157, 109721, 110874, 124791, 147116, 127335, 65889, 76769, 100596, 79740, 125860, 120185, 73861, 97700, 147169, 106781, 71891, 64744, 107113, 59274, 77680, 101891, 69848, 98922, 147825, 128315, 55221, 119892, 87492, 75814, 80350, 131504, 81095, 57344, 63765, 143915, 126768]

function doIt(item) {
    return (Math.floor(item / 3) - 2);
}

var total = 0;

for (var i = 0; i < inputs.length; i++) {
    total += doIt(inputs[i]);
}

var day1output1 = 3147032;
var total2 = day1output1;

function recursed1(sumadd, newtotal) {
    var newnum = doIt(sumadd);
    if (newnum < 0) {
        return newtotal;
    } else {
        return recursed1(newnum, newtotal + newnum);
    }
}

function doIt2(item) {
    return (recursed1(item, 0));
}

var total2 = 0;

for (var i = 0; i < inputs.length; i++) {
    total2 += doIt2(inputs[i]);
}

// Lessons Learned:
// - Read the question properly. 
// - The recursed total of fuel is not the same as the 
// total of all fuel recursed, but I don't 100% understand why. 
// It's probably to do with rounding.