import React, {useState, useRef, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import Calculate from './Calculate'

//const LOCAL_STORAGE_KEY = 'stockCalc.stonks'

function App() {
  //{id: 1, price: 12, expected: 15, made: 20}
  const [indiv_stock, setCalc] = useState([])
  
  const curr_price_ref = useRef()
  const curr_expect_ref = useRef()
  const curr_numb_ref = useRef()

  // useEffect(() => {
  //   const storedCalc = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  //   if (storedCalc) setCalc(storedCalc)
  // }, [])

  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(stonks))
  // }, [stonks])

  function handleCalculate(e) {
    const curr_price = curr_price_ref.current.value
    console.log(curr_price)

    curr_price_ref.current.value = null
  }
 
  return (
    <>
        
      <label> Stock Calculator </label> <br />

      <label> Amount Invested ($): </label>
      <input ref = {curr_price_ref} type="text" /> <br />

      <label> Stock Price per Share ($): </label>
      <input ref = {curr_expect_ref} type="text" /> <br />

      <label> Expected Stocks Value ($): </label>
      <input ref = {curr_numb_ref} type="text" /> <br />

      <button onClick={handleCalculate}> Calculate </button>

      {<Calculate calcs = {indiv_stock}/>}
    </>
  )
}

export default App;
