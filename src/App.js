import React, { useState, useEffect } from 'react';


import Container from "./components/container"
import Screen from "./components/screen"
import ButtonBox from "./components/buttonContainer"
import Button from "./components/button"

const App = () => {
  /* Functions */
  const [screen, setScreen] = useState([0])

  function sendToScreen(input) {
    if (screen[0] === 0) {
      setScreen([input])
    } else {
      setScreen([...screen, input])
    }
  }

  function calculate() {
    /* https://medium.com/@stoopidguy1992/how-to-write-a-math-expression-parser-in-javascript-b5147bc9466b */
    setScreen([Function(`'use strict'; return (${screen.join('')})`)()])
    /* Refresh Screen */
  }

  function clearScreen() {
    setScreen([0])
  }

  function deleteFromScreen() {
    setScreen([screen.slice(0, -1).join('')])
  }

  /* Return App */
  return (
    <body>
      <main>
        <Container>
          <Screen value={screen.join('')}>
          </Screen>
          <ButtonBox>
            <Button className="button sign" value="(" onClick={() => sendToScreen('(')}></Button>
            <Button className="button" value="7" onClick={() => sendToScreen('7')}></Button>
            <Button className="button" value="8" onClick={() => sendToScreen('8')}></Button>
            <Button className="button" value="9" onClick={() => sendToScreen('9')}></Button>
            <Button className="button sign" value="÷" onClick={() => sendToScreen('/')}></Button>

            <Button className="button sign" value=")" onClick={() => sendToScreen(')')}></Button>
            <Button className="button" value="4" onClick={() => sendToScreen('4')}></Button>
            <Button className="button" value="5" onClick={() => sendToScreen('5')}></Button>
            <Button className="button" value="6" onClick={() => sendToScreen('6')}></Button>
            <Button className="button sign" value="✖" onClick={() => sendToScreen('*')}></Button>

            <Button className="button sign clear" value="⌫" onClick={() => deleteFromScreen('⌫')}></Button>
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