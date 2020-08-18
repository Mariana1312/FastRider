function sliceString(str) {
    let firstStr = str.slice(3, 7)
    let secondStr = str.slice(8, 12)
    console.log(firstStr)
    console.log(secondStr);
    findPin(firstStr)
    findPin(secondStr)
}


function findPin(str) {
    let numArr = []
    for (let i = 0; i < str.length; i++) {
        if ((i % 2) === 0) {
            numArr[i] = parseInt(str.charAt(i))
        }
        else {
            numArr[i] = parseInt(str.charAt(i)) * 2
        }
    }
    console.log(numArr);
    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] > 9) {
            let strNum = numArr[i].toString()
            numArr[i] = parseInt(strNum.slice(0, 1))
            numArr[numArr.length] = parseInt(strNum.slice(1, 2))
        }
    }
    console.log(numArr);
    let sum = numArr.reduce((a, b) => a + b, 0)
    console.log(sum);
    let letter = String.fromCharCode((sum % 26) + 65)
    console.log(letter);
}

sliceString("JN-1235-5679-xx")