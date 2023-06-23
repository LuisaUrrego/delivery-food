import React, { useState } from 'react'
import plus from "../../assets/plus-lg.svg"
import dash from "../../assets/dash-lg.svg"
import { StyleAmount } from './StyleAmount';


const AmountProduct = ({cantidad}) => {

    const [amount, setAmount] = useState(cantidad);

    const handleplus = () =>{
        let temp = amount;
        setAmount(temp + 1)
      }
    
      const handleless = () => {
        if (amount > 1) {
            let temp = amount;
            setAmount(temp - 1)
          }
      }
  return (
    <StyleAmount>
      <button onClick={handleless}>
        <img className="icon" src={dash} alt="dash"/>
      </button>
      <h3>{amount}</h3>
      <button onClick={handleplus}>
        <img className="icon" src={plus} alt="plus"  />
      </button>
    </StyleAmount>
  )
}

export default AmountProduct
