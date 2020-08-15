alert("CONNECTED!");

function printReverse(arr) {
    for (let index = arr.length - 1; index >= 0; index--) {
        console.log(arr[index]);        
    }
}

function isUniform(arr) {
    var first = arr[0];
    for (let index = 1; index < arr.length; index++) {
        if (first != arr[index]) {
            return false;
        }
        return true;
    }
}

function sumArray(arr) {
    var sum = 0;

    // arr.forEach(function(element) {
    //     sum += element;
    // });

    for (let index = 0; index < arr.length; index++) {
        sum += arr[index];
    }
    return sum;
}

function max(arr) {
    var max = arr[0];    
    for (let index = 1; index < arr.length; index++) {
        if (arr[index] > max) {
            max = arr[index];
        }
    }
    return max;
}