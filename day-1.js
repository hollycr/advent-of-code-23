const fs = require('fs');
const array = fs.readFileSync('./day-1.txt').toString().split("\n");

const regex = /\d/g

const replacements = [
    { regex: /oneight/g, value: 18 },
    { regex: /twone/g, value: 21 },
    { regex: /threeight/g, value: 38 },
    { regex: /fiveight/g, value: 58 },
    { regex: /sevenine/g, value: 79 },
    { regex: /nineight/g, value: 98 },
    { regex: /eightwo/g, value: 82 },
  ];

function replaceEdgeCases(line){
    for (const { regex, value } of replacements){
        line = line.replace(regex, value)
    }
    return line
}

const toNums = [
    { regex: /one/g, value: 1 },
    { regex: /two/g, value: 2 },
    { regex: /three/g, value: 3 },
    { regex: /four/g, value: 4 },
    { regex: /five/g, value: 5 },
    { regex: /six/g, value: 6 },
    { regex: /seven/g, value: 7 },
    { regex: /eight/g, value: 8 },
    { regex: /nine/g, value: 9 },
  ];

function replaceWordswithNums(line){
    for (let {regex, value} of toNums){
        line = line.replace(regex, value)
    }
    return line
}

let total = 0

for (let line of array){
    // replace edge cases eg oneight with 18
    const lineWithoutEdges = replaceEdgeCases(line)
  
    // replace normal words with digits
    let cleanLine = replaceWordswithNums(lineWithoutEdges)
    
    // match all numbers
    const allNumsInLine = cleanLine.match(regex)

    total += Number(allNumsInLine[0]+allNumsInLine[allNumsInLine.length-1])
}

console.log(total) // 55358

