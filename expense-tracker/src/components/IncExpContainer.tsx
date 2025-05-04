import './IncExpContainer.css'
import React from 'react'

export const IncExpContainer = () => {
  return (
    <div className='inc-exp-container'>
        <div>
            <h3>Income</h3>
            <p id="money-plus" className="money-plus">+ $400</p>
        </div>
        <div>
            <h3>Expense</h3>
            <p id="money-minus" className="money-minus">- $100</p>
        </div>
    </div>
  )
}
