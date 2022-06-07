
let historyArr = [];
let expressionData = "";
let resultData = "";
const logHistory=document.getElementById("history-tab-left");
const logHistoryRight=document.getElementById("history-tab-right");
function getHistory() {
    return document.getElementById("history-value").innerText;
}

function printHistory(num) {
    document.getElementById("history-value").innerText = num;
}
const getHistoryTest = () => {
    return document.getElementById("test-history").innerText;
}
const printHistoryTest = (num) => {
    document.getElementById("test-history").innerText = num;
}

function getOutput() {
    return document.getElementById("output-value").innerText;
}

function printOutput(num) {
    if (num == "") {
        document.getElementById("output-value").innerHTML = num;
    } else {
        document.getElementById("output-value").innerHTML = num;
    }
}

// function getFormattedNumber(num) {
//     if (num == "-") {
//         return "";
//     }
//     let n = num;
//     let value = n.toLocaleString("en");
//     return value;
// }

function reverseNumberFormat(num) {
    
    return num.replace(/,/g, '');
    
}
const operator = document.getElementsByClassName("operator");
for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function () {
        if (this.id == "clear") {
            printHistory("");
            printOutput("");
            printHistoryTest("");
            localStorage.clear();
            logHistory.innerHTML = "";
            logHistoryRight.innerHTML = "";
            historyArr = [];
        } else if (this.id == "backspace") {
            let output = reverseNumberFormat(getOutput()).toString();
            if (output) {
                output = output.substr(0, output.length - 1);
                printOutput(output);
            }
        } else {
            let output = getOutput();
            let history = getHistory();
            if (output == "" && history != "") {
                if (isNaN(history[history.length - 1])) {
                    history = history.substr(0, history.length - 1);
                }
            }
            if (output != "" || history != "") {
                output = output == "" ? output : reverseNumberFormat(output);
                history = history + output;
                if (this.id == "=") {
                    let result = eval(history);
                    expressionData=history;
                    resultData=result;
                    historyArr.push({expression: expressionData, result: resultData});
                    console.log(historyArr);
                    showHistory();
                    printOutput(result);
                    printHistory("");
                    printHistoryTest(history+"=");    
                    getLocalStorage();
                } 
                else if(this.id == "."){
                    printOutput(output+".")
                }
                else {
                    history = history + this.id;
                    printHistory(history);
                    printOutput("");
                    printHistoryTest(history)
                }
            }
        }

    });
}

function showHistory() {
    let log = "";
    for (let key in historyArr) {
        log += historyArr[key].expression + " = " + historyArr[key].result + "<br>" + "<br>";
        localStorage.setItem(historyArr[key].expression,historyArr[key].result)
    }
    // console.log(Object.values(localStorage));
    logHistory.innerHTML = log;
}
const getLocalStorage=()=>{
    let historyKeys=Object.keys(localStorage);
    let historyValues=Object.values(localStorage);
    let log ="";
    let logRights ="";
    for (let key of historyKeys){
        log += key +"<br>" + "<br>";
    }
    logHistory.innerHTML=log;
    for (let value of historyValues){
        logRights+=`= ${value} <br>  <br>`;
    }
    // console.log(logRights);
    logHistoryRight.innerHTML=logRights;
}

getLocalStorage();
const number = document.getElementsByClassName("number");
for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function () {
        let output = getOutput();
        if ( output != NaN ) {
            output = output + this.id; 
            printOutput(output);
        }
        
    });
}