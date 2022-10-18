const displayValue = document.querySelector(".display") 
const buttons  = Array.from(document.querySelectorAll(".button"))

buttons.map(button => {
    button.addEventListener("click", (e) => {
        switch(e.target.innerText){
            case "%":
                const percentageNumber = displayValue.innerText 
                displayValue.innerText = (percentageNumber / 100);
                break;

            case "+/-":
                const plusMinus = displayValue.innerText
                
                if(plusMinus > 0){
                const plusMinusResults = (("-") + plusMinus)
                displayValue.innerText = plusMinusResults
                break;
                }

                if(plusMinus < 0){
                    function reverse(){
                        while(a < 0){
                            console.log(a)
                            a++;
                        }
                        
                    }

                    const plusMinus = displayValue.innerText
                    reverse(plusMinus)
                    break
                }

                displayValue.innerText = plusMinusResults
                break

            case "C": 
                displayValue.innerText ="";
                break;

            case "=":
                const userInput = displayValue.innerText
                const results = Function("return " + userInput)();
                displayValue.innerText = results;
                break;
        
            default:
                displayValue.innerText += e.target.innerText;
        }
    })
})







// function operate(first, second){
//     const operator = prompt("Choose your operator", "add | substract | multiply | divide")

//     if(operator === "add"){
//         console.log(first + second)
//     }

//     if(operator === "substract"){
//         console.log(first - second)
//     }

//     if(operator === "multiply"){
//         console.log(first * second)
//     }

//     if(operator === "divide"){
//         console.log(first / second)
//     }
// }

// const first = prompt("first")
// const second = prompt("second")

// const num1 = parseInt(first)
// const num2 = parseInt(second)

// operate(num1, num2)
