let toDecrypt = () => {
    let cipherText = document.querySelector('#cipher-text').value;
    let decryptedTextParagraph = document.querySelector('#decipher-text');
    let startWorkFunctionTime = performance.now();
    decryptedTextParagraph.innerHTML = messageDecrypt(cipherText);
    let endWorkFunctionTime = performance.now();
    calculationPerformanceFunction(startWorkFunctionTime, endWorkFunctionTime);
};

let messageDecrypt = cipherText => {

    let lettersArray = Array.from(cipherText);

    for (let i = 0, j = 1; j < lettersArray.length; i++, j++) {
        if (lettersArray[i] === lettersArray[j]) {
            lettersArray.splice(i, 2);
            i = i - 2;
            j = j - 2;
        };
    };

    return lettersArray.join('');
};

let calculationPerformanceFunction = (startTime, endTime) => {
    let functionTimeParagraph = document.querySelector('#function-time');
    functionTimeParagraph.innerHTML = (startTime - endTime) + " milliseconds.";
};