import React, { useState } from 'react'
import FormSignup from './FormSignup'
import FormSuccess from './FormSuccess'

function Form() {

  const [isSubmitted, setIsSubmitted] = useState(false)

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        {isSubmitted && <span onClick={() => setIsSubmitted(false)} className="close-btn">x</span>}
        <div className="form-content-left">
          <img src="/images/img/img-4.svg" alt="spaceship" className="form-img" />
        </div>
        {!isSubmitted ? <FormSignup submitForm={submitForm} /> : <FormSuccess />}
      </div>
    </>
  )
}

export default Form