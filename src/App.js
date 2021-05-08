import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";

import Axios from  'axios';

class App extends Component{
    constructor() {
        super();
    }
}


function App() {

  const [usernameReg, setUsernameReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [loginStatus, setLoginStatus] = useState("");

  const register = () => {
  	let parameters = new FormData();
  		parameters.append('username',usernameReg);
  		parameters.append('password',passwordReg);
      Axios.post('http://localhost/nokia_app/php/register.php',
      		parameters
      	).then((response) => {
          console.log(response);
      });
  };

    const login = () => {
        Axios.post('http://localhost/nokia_app/php/login.php', {
            username: username,
            password: password,
        }).then((response) => {
            if(response.data.message){
                setLoginStatus(response.data.message)
            }else{
                setLoginStatus(response.data[0].username)
            }
        });
    };

  return (
    <div className="App">
        <div className="Registration">
      <label>Username</label>
      <input type="text"
             onChange={(e)=>{
               setUsernameReg(e.target.value);
             }}
             />
      <label>Password</label>
      <input type="password"
             onChange={(e)=>{
               setPasswordReg(e.target.value);
             }}
      />
      <button onClick={register}>Register</button>
        <br/>
        <label>Username..</label>
        <input type="text"
               onChange={(e)=>{
                   setUsername(e.target.value);
               }}
        />
        <label>Password..</label>
        <input type="password"
               onChange={(e)=>{
                   setPassword(e.target.value);
               }}
        />
        <button onClick={login}>Login</button>
        <h2>{loginStatus}</h2>
        </div>
    </div>
  );
}
export default App;
