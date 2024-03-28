import React from 'react';
import Form from "./Form";



var userIsRegistered = true;

const App = () => {
  return (
    <div className="container">
    <Form isLogin = {userIsRegistered}/> 
    </div>
  );
}

export default App;

