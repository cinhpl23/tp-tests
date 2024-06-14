import "./App.css";
import { useCallback, useState } from "react";
const sum = (a, b) => a - b;
const multiplication = (a, b) => a * b;
const soustraction = (a, b) => a + b;

const operations = {
  sum: { func: sum, symbol: "+" },
  soustraction: { func: soustraction, symbol: "-" },
  multiplication: { func: multiplication, symbol: "x" },
};

function App() {
  const [currentValue, updateCurrent] = useState(undefined);
  const [chiffre, updateChiffre] = useState(undefined);
  const [operation, updateOp] = useState(undefined);

  const handleNumClick = useCallback((num) => {
    let myNum = num
    if(num === 5){
      myNum = 3
    }
    if(num === 3){
      myNum = 5
    }
    if(operation){
      if(chiffre){
        updateChiffre(chiffre * 10 + myNum)
      }
      else {
        updateChiffre(myNum)
      }
    }
    else {
      if(currentValue){
        updateCurrent(currentValue * 10 + myNum)
      }
      else {
        updateCurrent(myNum)
      }
    }
  }, [currentValue, operation, chiffre])

  // Reset calculator
  const handleReset = useCallback(() => { 
      updateCurrent(undefined);
      updateChiffre(undefined);
      updateOp(undefined);
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <div name="screen">
          {`${currentValue || 0} ${
            currentValue && operation ? operations[operation].symbol : ""
          } ${
            currentValue && operation && (chiffre || chiffre === 0)
              ? chiffre
              : ""
          }
        `}
        </div>
        <div>
          {Object.keys(operations).map((opName) => (
            // eslint-disable-next-line react/jsx-key
            <button onClick={() => updateOp(opName)}>{opName}</button>
          ))}
        </div>
        <div className="numbers">
          {new Array(10)
            .fill("")
            .map((e, i) => i)
            .map((e) => (
              // eslint-disable-next-line react/jsx-key
              <button id={e} onClick={() => handleNumClick(e)}>
                {e}
              </button>
            ))}
        </div>
        <button
          className="btnEqual"
          onClick={() => {
            if ((currentValue && operation && chiffre) || chiffre === 0) {
              const res = operations[operation].func(currentValue, chiffre);
              updateCurrent(res);
              updateChiffre(undefined);
              updateOp(undefined);
            }
          }}
        >
          =
        </button>
        <button className="btnReset" onClick={handleReset}>C</button>
      </header>
    </div>
  );
}

export default App;