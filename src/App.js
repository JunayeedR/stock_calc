import React from 'react'
import logo from './logo.svg';
import './App.css';
import Calculate from './Calculate'

function App() {
  //const [stonks, setCalc] = useState(['a', 'b'])
  //const initStock = useRef()

  /* function handleCalculation(e) {
    let user_stock = initStock.current.value
    console.log(user_stock) 
  }
 */
  return (
    <>
        
      <label> Stock Calculator </label> <br />

      <label> Current Stock Price: </label>
      <input type="text" /> <br />

      <label> Expected Stock Price: </label>
      <input type="text" /> <br />

      <label> Number of Stocks Purchased: </label>
      <input type="text" /> <br />

      <button> Calculate </button>

      {/* <Calculate testy = {stonks}/> */}
    </>
  )
}

export default App;
