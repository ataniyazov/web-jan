var answer = prompt("Are we there yet?")

// while (answer !== "yes" && answer !== "yeah") {
//     var answer = prompt("Are we there yet?")
// }

while (answer.indexOf("yes") && answer.indexOf("yeah")) {
    var answer = prompt("Are we there yet?")
}

alert("YAY, WE FINALLY MADE IT!")