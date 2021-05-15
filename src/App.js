import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import Axios from  'axios';
import Popup from './Popup.js';


class App extends React.Component{
    
    state={

     usernameReg:'',
     passwordReg:'',
     nameReg:'',
     surnameReg:'',
     emailReg:'',
     telephoneReg:'',
     addressReg:'',
     birthReg:'',
     genderReg:'',
     showPopup:false,
     username:'',
     password:'',
     loginStatus:''

    }

    constructor() {
        super();
    }

     login = () => {
      let parameters = new FormData();
          parameters.append('username', this.state.username);
          parameters.append('password', this.state.password);
      Axios.post('http://localhost/nokia_app/php/login.php', {
          parameters
      }).then((response) => {
          if(response.data.message){
              this.setState({loginStatus:response.data.message})
          }else{
              this.setState({loginStatus:response.data[0].username})
          }
      });
  };

   handlePopup = (childData) => {

    this.setState({showPopup:childData});

   }

  

    render() {

      const {data} = this.state;

      return (

        <div className="App">
        <div className="header"></div>
                <div className="container">
                <div className="logoAndCreateContainer">
                <div><img src="Nokia-Logo.png" className="logoNokia"></img></div>
                  <a onClick={()=>this.setState({showPopup:true})}>Create new account</a>
                </div>
                <div className="signInDiv">
                <div className="borderLeft">
                <h1>Sign In</h1>
                  <input type="text" placeholder="Username" className="textbox"
                       onChange={(e)=>{
                           this.setState({username:e.target.value});
                       }}
                />
                  <input type="password" placeholder="Password" className="textbox1"
                       onChange={(e)=>{
                        this.setState({password:e.target.value});
                       }}
                />
                <a href="/">Forgot password?</a>
                <button onClick={()=>this.login()} className="login">Login</button>
                <h2>{this.state.loginStatus}</h2>
                </div>
                </div>
                </div>
                <div className="footer"></div>
                <Popup parentcallback={this.handlePopup} displayProperty={this.state.showPopup}></Popup>
            </div>
          );

    }
}


/*function App() {

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
    const [showPopup,setShowPopup] = useState(false);
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
        <div><img src="Nokia-Logo.png" className="logoNokia"></img></div>
          <a href="/" onClick={()=>setShowPopup(true)}>Create new account</a>
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
        <Popup displayProperty={showPopup}></Popup>
    </body>
  );
} */
export default App;
