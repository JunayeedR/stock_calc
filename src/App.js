import React, {useState, useRef, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import Calculate from './Calculate'
import { v4 as uuidv4 } from 'uuid';

//const LOCAL_STORAGE_KEY = 'stockCalc.stonks'

function App() {
  //{id: 1, price: 12, expected: 15, made: 20}
  const [indiv_stock, setCalc] = useState([])
  
  const curr_amount_ref = useRef()
  const curr_price_ref = useRef()
  const curr_expected_ref = useRef()

  // useEffect(() => {
  //   const storedCalc = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  //   if (storedCalc) setCalc(storedCalc)
  // }, [])

  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(stonks))
  // }, [stonks])

  function handleCalculate(e) {
    const curr_amount = curr_amount_ref.current.value
    const curr_price = curr_price_ref.current.value
    const curr_expected = curr_expected_ref.current.value
    
    //if (curr_price === '') return 
    setCalc([])

    setCalc(prevCalc => {
      return [... prevCalc, {id: uuidv4(), amount: curr_amount, price: curr_price, expected: curr_expected}]
    })
    //curr_amount_ref.current.value = null
  }

  function handleReset(e) {
    curr_amount_ref.current.value = null
    curr_price_ref.current.value = null
    curr_expected_ref.current.value = null

    setCalc([])
  }
 
  return (
    <>
        
      <label> Stock Calculator </label> <br />

      <label> Amount Invested ($): </label>
      <input ref = {curr_amount_ref} type="text" /> <br />

      <label> Stock Price per Share ($): </label>
      <input ref = {curr_price_ref} type="text" /> <br />

      <label> Expected Stocks Value ($): </label>
      <input ref = {curr_expected_ref} type="text" /> <br />

      <button onClick={handleCalculate}> Calculate </button>
      <button onClick={handleReset}> Reset </button>

      {<Calculate calcs = {indiv_stock}/>}
    </>
  )
}

export default App;
