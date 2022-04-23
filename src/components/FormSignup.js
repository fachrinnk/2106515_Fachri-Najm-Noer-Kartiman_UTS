import React from 'react'
import useForm from './useForm'
import validate from './validateInfo';
// import './Form.scss';

function FormSignup({submitForm}) {

  const {handleChange, values, handleSubmit, errors} = useForm(
    submitForm, 
    validate
  );

  return (
    <div className="form-content-right">
      <form  className="form" onSubmit={handleSubmit}>
        <h1>Sign Up Right Here!</h1>
        <div className="form-inputs">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input 
          type="text" 
          className="form-input" 
          name="username"
          id="username"
          placeholder='Enter Your username'
          value={values.username}
          onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input 
          type="email" 
          className="form-input" 
          name="email"
          id="email"
          placeholder='Enter Your email'
          value={values.email}
          onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input 
          type="password" 
          className="form-input" 
          name="password"
          id="password"
          placeholder='Enter Your password'
          value={values.password}
          onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="password2" className="form-label">
            Confirm Password
          </label>
          <input 
          type="password" 
          className="form-input" 
          name="password2"
          id="password2"
          placeholder='Enter Your password'
          value={values.password2}
          onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button 
        className="form-input-btn"
        type='submit'
        >
          Sign Up
        </button>
        <span className='form-input-login'>
          Already have an account? Login <a href="#">here</a>
        </span>
      </form>
    </div>
  )
}

export default FormSignup