import React, { useState } from "react"

import Container from "./components/container"
import Screen from "./components/screen"
import ButtonBox from "./components/buttonContainer"
import Button from "./components/button"

const App = () => {



  /* Functions */
  let screen = ["2","/","3"]

  function sendToScreen(input) {
    console.log(`you clicked the ${input} button`)
    screen.push(input)
    console.log(screen)
    /* Refresh Screen */
  }

  function calculate() {
    /* https://medium.com/@stoopidguy1992/how-to-write-a-math-expression-parser-in-javascript-b5147bc9466b */
    console.log("you clicked equals")
    console.log(Function(`'use strict'; return (${screen.join('')})`)())
    screen = Function(`'use strict'; return (${screen.join('')})`)()
    /* Refresh Screen */
  }

  function clearScreen() {
    screen = []
    console.log(screen)
  }

  function deleteFromScreen() {
    screen = screen.slice(0, -1)
    console.log(screen)
  }


  /* Return App */
  return (
    <body>
      <main>
        <Container>
          <Screen value={screen}>
          </Screen>
          <ButtonBox>
            <Button className="button sign" value="%" onClick={() => sendToScreen('%')}></Button>
            <Button className="button" value="7" onClick={() => sendToScreen('7')}></Button>
            <Button className="button" value="8" onClick={() => sendToScreen('8')}></Button>
            <Button className="button" value="9" onClick={() => sendToScreen('9')}></Button>
            <Button className="button sign" value="÷" onClick={() => sendToScreen('/')}></Button>

            <Button className="button sign" value="√" onClick={() => sendToScreen('√')}></Button>
            <Button className="button" value="4" onClick={() => sendToScreen('4')}></Button>
            <Button className="button" value="5" onClick={() => sendToScreen('5')}></Button>
            <Button className="button" value="6" onClick={() => sendToScreen('6')}></Button>
            <Button className="button sign" value="✖" onClick={() => sendToScreen('*')}></Button>

            <Button className="button sign clear" value="CE" onClick={() => deleteFromScreen('CE')}></Button>
            <Button className="button" value="1" onClick={() => sendToScreen('1')}></Button>
            <Button className="button" value="2" onClick={() => sendToScreen('2')}></Button>
            <Button className="button" value="3" onClick={() => sendToScreen('3')}></Button>
            <Button className="button sign" value="-" onClick={() => sendToScreen('-')}></Button>

            <Button className="button sign clear" value="C" onClick={() => clearScreen('C')}></Button>
            <Button className="button" value="0" onClick={() => sendToScreen('0')}></Button>
            <Button className="button" value="." onClick={() => sendToScreen('.')}></Button>
            <Button className="button" value="+/-" onClick={() => sendToScreen('+/-')}></Button>
            <Button className="button sign" value="+" onClick={() => sendToScreen('+')}></Button>

            <Button className="button equals" value="=" onClick={() => calculate()}></Button>
          </ButtonBox>
        </Container>
      </main>
    </body>
  )
}





export default App;





// const squaredBtn = `x^2`

// const btnValues = [
//   ["√", "x²", "x!", "⌫"],
//   ["C", "(+ -)", "%", "/"],
//   [7, 8, 9, "X"],
//   [4, 5, 6, "-"],
//   [1, 2, 3, "+"],
//   [0, ".", "="],
// ]

// /* Takes a number, formats into string and creates space separators for the 1000 mark */
// const toLocaleString = (num) =>
//   String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ")

// /* remove spaces so it can be converted to a number */
// const removeSpaces = (num) => num.toString().replace(/\s/g, "")

// const App = () => {

//   /* Object to set all states at once */
//   let [calc, setCalc] = useState({
//     sign: "", /* the selected operator */
//     num: 0, /* the selected integer */
//     res: 0, /* the calcualted value */
//   })


//   /* Button Functions */
//   /* numClickHandler: runs if a number button is pressed. Gets value of the button and adds to the current num value. */
//   const numClickHandler = (e) => {
//     e.preventDefault() /* if the event does not get explicitly handled, its default action should not be taken as it normally would be. */
//     const value = e.target.innerHTML /* assigns the value of the button to "value" */

//     /* Numbers entered less than 16 integers long */
//     if (removeSpaces(calc.num).length < 16) {
//       setCalc({
//         ...calc,
//         num:
//           calc.num === 0 && value === "0"
//             ? "0"
//             : removeSpaces(calc.num % 1 === 0)
//             ? toLocaleString(Number(removeSpaces(calc.num + value)))
//             : toLocaleString(calc.num + value),
//         res: !calc.sign ? 0 : calc.res,
//       })
//     }
//   }

//   /* Runs if the decimal point is pressed. Adds a decimal to "num". Many countries use "," instead of "." to separate integers and decimals */
//   const commaClickHandler = (e) => {
//     e.preventDefault()
//     const value = e.target.innerHTML

//     setCalc({
//       ...calc,
//       /*  */
//       num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
//     })
//   }

//   /* Runs if user clicks "+", "-", "*" or "/" */
//   const signClickHandler = (e) => {
//     e.preventDefault()
//     const value = e.target.innerHTML

//     setCalc({
//       ...calc,
//       /*  */
//       sign: value,
//       res: !calc.res && calc.num ? calc.num : calc.res,
//       num: 0,
//     })
//   }

//   /* Runs if user clicks "=". Uses the current num, res and sign values. returned value is set as the new res for future calculations */
//   const equalsClickHandler = () => {
//     if (calc.sign && calc.num) {
//       const math = (a, b, sign) =>
//         sign === "+"
//           ? a + b
//           : sign === "-"
//           ? a - b
//           : sign === "X"
//           ? a * b
//           : a / b /* else, divide */
      
//       setCalc({ /* Ensures user cannot divide by "0" */
//       ...calc,
//       res: 
//         calc.num === "0" && calc.sign === "/"
//           ? "Can't divide with 0"
//           : toLocaleString(
//             math(
//               Number(removeSpaces(calc.res)), 
//               Number(removeSpaces(calc.num)), 
//               calc.sign
//             )
//           ),
//         sign: "",
//         num: 0,
//       })
//     }
//   }

//   /* Checks if there’s any entered value (num) or calculated value (res) and then inverts them by multiplying with -1 */
//   const invertClickHandler = () => {
//     setCalc({
//       ...calc,
//       num: calc.num ? toLocaleString(removeSpaces(calc.num) * -1) : 0,
//       res: calc.res ? toLocaleString(removeSpaces(calc.num) * -1) : 0,
//       sign: "",
//     })
//   }


//   /* Checks if there’s any entered value (num) or calculated value (res) and then calculates the percentage using the built-in Math.pow function, which returns the base to the exponent power */
//   const percentClickHandler = () => {
//     /* parseFloat parses a string argument and returns a floating point number */
//     let num = calc.num ? parseFloat(removeSpaces(calc.num)) : 0
//     let res = calc.res ? parseFloat(removeSpaces(calc.res)) : 0

//     setCalc({
//       ...calc,
//       num: (num /= Math.pow(100, 1)),
//       res: (res /= Math.pow(100, 1)),
//       sign: "",
//     })
//   }

//   /* Defaults all the initial values of calc, returning the calc state as it was when the Calculator app was first rendered */
//   const resetClickHandler = () => {
//     setCalc({
//       ...calc,
//       sign: "",
//       num: 0,
//       res: 0,
//     })
//   }

//   const sqrtClickHandler = () => {

//   }
//   const exponentClickHandler = () => {

//   }
//   const factorialClickHandler = () => {

//   }

//   /* Add a backspace button for incorrect numbers typed. Deletes 1 number at a time by replacing the number on the screen with a slice of everything except the last digit. */
//   const backspaceClickHandler = () => {
//     setCalc({
//       ...calc,
//       num: calc.num ? toLocaleString(removeSpaces(calc.num).slice(0, calc.num.length-1)) : 0,
//       res: calc.res ? toLocaleString(removeSpaces(calc.res).slice(0, calc.res.length-1)) : 0,
//       sign: "",
//     })
//   }

//   return (
//     <body>
//       <main>
//         <Wrapper>
//           <Screen value={calc.num ? calc.num : calc.res} />
//           <ButtonBox>
//             {
//               btnValues.flat().map((btn, i) => {
//                 return (
//                   <Button 
//                     /* Assign different button types so that different functions can be ran */
//                     key={i}
//                     className={btn === "=" ? "equals" : ""}
//                     value={btn}
//                     onClick={
//                       btn === "C"
//                       ? resetClickHandler
//                       : btn === "(+ -)"
//                       ? invertClickHandler
//                       : btn === "%"
//                       ? percentClickHandler
//                       : btn === "="
//                       ? equalsClickHandler
//                       : btn === "/" || btn === "X" || btn === "-" || btn === "+"
//                       ? signClickHandler
//                       : btn === "."
//                       ? commaClickHandler
//                       : btn === "√"
//                       ? sqrtClickHandler
//                       : btn === "x²"
//                       ? exponentClickHandler
//                       : btn === "x!"
//                       ? factorialClickHandler
//                       : btn === "⌫"
//                       ? backspaceClickHandler
//                       : numClickHandler
//                     }
//                   />
//                 )
//               })
//             }
//           </ButtonBox>
//         </Wrapper>
//       </main>
      
//     </body>
    
//   )
// }

