import React, { useState, useContext, useRef, useEffect} from "react";
import { ContextLogin } from "./ContextLogin";
import ModalEmptyLogin from "./ModalEmptyLogin";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //using modal to output an error when username or password is not entered
  const [show, setShow] = useState(false);

  //using context API to get loggedIn State in the login component
  const { loggedIn, setLoggedIn } = useContext(ContextLogin);

  //using useRef to focus the loginbox when users does not insert any text
  const inputRef = useRef()
 
  //saving login data
  useEffect(() => {
    const storeLogInData = localStorage.getItem('isLoggedIn')
    if(storeLogInData === '1') {
      setLoggedIn(true) 
    }
  }, [setLoggedIn])

  //handling what happens when you click the submit button
  const onLoginHandle = (event) => {
    event.preventDefault();
    if ((username && password) === "") {
      setShow(true) || inputRef.current.focus() 
      
    } else if ((username.length < 4 && password.length < 4)) {
      alert('username or password field must be more that 4 characters')
    } else {
      localStorage.setItem('isLoggedIn', '1')
      setLoggedIn(true);
    }
   
  };

  return (
    <>
      {show && <ModalEmptyLogin show={show} setShow={setShow} />}

 
        <>testing commit
        {  !loggedIn &&  
          <div className="login-container">
            <form onSubmit={onLoginHandle}>
              <div>
                <label htmlFor="text">Username </label>
              </div>
              <input
              id="text"
              placeholder='username'
              ref={inputRef}
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <div>
                <label htmlFor="password">Enter Password</label>
              </div>
              <input
              ref={(inputRef)}
              id= "password"
              placeholder='******'
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div>
                <button className="btn-vanilla"> Login </button>
              </div>
            </form>
          </div>
}
        </>
      
        
    </> 
  );
};

export default LoginForm;
