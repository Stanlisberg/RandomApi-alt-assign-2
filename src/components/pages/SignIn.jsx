import React from "react";
import { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom'

function SignIn() {
  const [disabledState, setDisabledState] = useState(true);
  const buttonRef = useRef();
  const inputRef = useRef();

  const navigate = useNavigate();

  const buttonDisabled = () => {
    if (inputRef.current.value < 6) {
      console('i like you');
      //  setDisabledState(true)
    } else {
      // setDisabledState(false)
    }
  };

  return (
    <div className="sign-container">
      <form className='form'>
        <div className="sign-welcome">Nested route</div>
        <p className="sign-p">Please sign in.</p>
        <div className="info-container">
          <label htmlFor="username">Username</label>
          <div className="input-div">
            <input
              type="text"
              ref={inputRef}
              placeholder="John Doe"
              className="input"
              // onChange={inputValidate}
            />
          </div>
          <button
            type="submit"
            ref={buttonRef}
            className="submit"
            onClick={() => {
                navigate('/nested')
            }}
             
            // disabled={disabledState}
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignIn

