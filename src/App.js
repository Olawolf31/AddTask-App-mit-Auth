import React, { useState } from 'react'
import Header from './components/Header'
import LoginForm from './components/LoginForm'
import {ContextLogin }from './components/ContextLogin';
import AddTask from './components/AddTask';



function App() {

  const [loggedIn, setLoggedIn] = useState(false)

//login Handler

  
  return (
    <ContextLogin.Provider value={{loggedIn, setLoggedIn}}>
      <Header />
      <LoginForm />
      {loggedIn && <AddTask />}
      
    </ContextLogin.Provider>
  );
}

export default App;
