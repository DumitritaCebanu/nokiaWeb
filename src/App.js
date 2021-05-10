import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";

import Axios from  'axios';
/*
class App extends Component{
    constructor() {
        super();
    }
}*/


function App() {

    //for register
  const [usernameReg, setUsernameReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');
  const [nameReg, setNameReg] = useState('');
  const [surnameReg, setSurnameReg] = useState('');
  const [emailReg, setEmailReg] = useState('');
  const [telephoneReg, setTelephoneReg] = useState('');
  const [addressReg, setAddressReg] = useState('');
  const [birthReg, setBirthReg] = useState('');
  const [genderReg, setGenderReg] = useState('');

  //for login
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [loginStatus, setLoginStatus] = useState("");


  const register = () => {
  	let parameters = new FormData();
  		parameters.append('name',nameReg);
  		parameters.append('surname',surnameReg);
        parameters.append('email',emailReg);
        parameters.append('telephone',telephoneReg);
        parameters.append('address',addressReg);
        parameters.append('username',usernameReg);
        parameters.append('password',passwordReg);
        parameters.append('birth',birthReg);
        parameters.append('gender',genderReg);
      Axios.post('http://localhost/nokia_app/php/register.php',
      		parameters
      	).then((response) => {
          console.log(response);
      });
  };


    const login = () => {
        let parameters = new FormData();
            parameters.append('username', username);
            parameters.append('password', password);
        Axios.post('http://localhost/nokia_app/php/login.php', {
            parameters
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
