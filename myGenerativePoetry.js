// this is a string, it has quotation marks at the start and end
let opening = "Once upon a time "

// these are arrays of strings
let article = ["I ", "he ", "she ", "they ", "we "]

let verbs = ["ate ", "talked ", "walked ", "forgot ", "reminisced "]

let adjectives = ["tirelessly", "slowly", "directly", "softly"]

// .length returns a number which is the number of elements in the array
let lengthOfArray = adjectives.length

// push adds new elements to the array
article.push("dog ")

console.log(opening + randomStringFromArray(article) + randomStringFromArray(verbs) + randomStringFromArray(adjectives))

// this is a for loop, it will run the code in curly brackets 10 times
// for (let i = 0; i < 10; i++) {
//     console.log(opening + randomStringFromArray(article) + randomStringFromArray(verbs) + randomStringFromArray(adjectives))
// }


// this creates a variable that contains the poem
let output = opening + randomStringFromArray(article) + randomStringFromArray(verbs) + randomStringFromArray(adjectives)
// this pushes the poem back out to the HTML of the site
//document.getElementById("para").innerHTML = output







// let numberArray = [1,2,4,78,24568]

// console.log displays content in the console

// displaying the 3rd element in the numberArray variable - indexing starts at 0
// console.log(numberArray[3])

// // changing the second element in the array from 2 to 213
// numberArray[1] = 213

// // changing the last element in the array to the sum of an addition of two other elements from the array
// numberArray[4] = numberArray[0] + numberArray[1]


// "let i = 0" - start the loop at the first element
// "i < adjectives.length" - for as long as i is less than the total number of elements in the array...
// "i++" - ...run the loop through the elements
for (let i = 0; i < adjectives.length; i++) {
    // console.log(adjectives[i] += " tired")
}

function myFirstFunction(a, b) {
    // let a = 10
    // let b = 20
    return (a * b)
}

// how to call a function
// console.log(myFirstFunction(7, 67))

let answer = myFirstFunction(10, 20)

// console.log(answer)

// will print coordinates for a 3D space
// for(let x = 0; x < 4; x++){
//     for(let y = 0; y < 4; y++){
//         for(let z = 0; z< 4; z++){
//             console.log("The Coordinates are " + x + " " + y + " " + z)
//         }
//     }
// }

// console.log(opening + randomStringFromArray(article) + randomStringFromArray(verbs) + randomStringFromArray(adjectives))

// this is a function to return a random string from an array of strings

// math.random is a random decimal number, and array.length is the length of the array. multiplied togther, this creates a decimal

//math.floor rounds down the decimal so that one of the elements in the array can be output

function randomStringFromArray(inputArray) {
    let randomNumber = Math.floor(Math.random() * inputArray.length)
    return inputArray[randomNumber]
}

