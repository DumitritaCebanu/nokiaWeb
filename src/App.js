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

<body className="App">
<div className="header"></div>
        <div className="container">
        <div class="logoAndCreateContainer">
        <div><img src="Nokia-Logo.png" class="logoNokia"></img></div>
          <a href="/">Create new account</a>
        </div>
        <div class="signInDiv">
        <div class="borderLeft">
        <h1>Sign In</h1>
          <input type="text" placeholder="Username" className="textbox"
               onChange={(e)=>{
                   setUsername(e.target.value);
               }}
        />
          <input type="password" placeholder="Password" className="textbox1"
               onChange={(e)=>{
                   setPassword(e.target.value);
               }}
        />
        <a href="/">Forgot password?</a>
        <button onClick={login} className="login">Login</button>
        <h2>{loginStatus}</h2>
        </div>
        </div>
        </div>
        <div className="footer"></div>
    </body>
  );
}
export default App;
