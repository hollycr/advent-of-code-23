const fs = require('fs');
const { default: test } = require('node:test');
const array = fs.readFileSync('./day-1.txt').toString().split("\n");

const arr = ["two1nine",
"eightwothree",
"abcone2threexyz",
"xtwone3four",
"4nineeightseven2",
"zoneight234",
"7pqrstsixteen",
"9963onefourthree6oneightq"]

const regex = /\d/g

const oneight = /oneight/
const twone = /twone/
const threeight = /threeight/
const fiveight = /fiveight/
const eightwo = /eightwo/
const sevenine = /sevenine/
const nineight = /nineight/

let total = 0

for (let line of array){
    // replace edge cases eg oneight with 18
    const firstReplace = line.replace(oneight, 18)
    const secondReplace = firstReplace.replace(twone, 21)
    const thirdReplace = secondReplace.replace(threeight, 38)
    const fourthReplace = thirdReplace.replace(fiveight, 58)
    const fifthReplace = fourthReplace.replace(sevenine, 79)
    const sixthReplace = fifthReplace.replace(nineight, 98)
    const seventhReplace = sixthReplace.replace(eightwo, 82)
    // replace normal words with digits
    const replaceOnes = seventhReplace.replaceAll("one",1)
    const replaceTwos = replaceOnes.replaceAll("two",2)
    const replaceThrees = replaceTwos.replaceAll("three",3)
    const replaceFours = replaceThrees.replaceAll("four",4)
    const replaceFives = replaceFours.replaceAll("five", 5)
    const replaceSixs = replaceFives.replaceAll("six", 6)
    const replaceSevens = replaceSixs.replaceAll("seven",7)
    const replaceEights = replaceSevens.replaceAll("eight",8)
    const replaceNines = replaceEights.replaceAll("nine",9)

    let eachLine = replaceNines.match(regex)

    total += Number(eachLine[0]+eachLine[eachLine.length-1])
}

console.log(total)

