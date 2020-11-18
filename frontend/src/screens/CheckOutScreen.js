import React from 'react'

export default function CheckOutScreen() {
  return (
    <form>
      <div>
        <h1>Demo Payment Area(Not Functional)</h1>
      </div>
      <div>
        <div>
          <input
            type='radio'
            id='paypal'
            value='PayPal'
            name='paymentMethod'
            required
            checked
          ></input>
          <label htmlFor='paypal'>PayPal</label>
        </div>
      </div>
      <div>
        <label />
        <button className='primary' disabled={true}>
          Continue
        </button>
      </div>
    </form>
  )
}
