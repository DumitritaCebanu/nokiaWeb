import './Popup.css';
import React, {useState} from "react";
import Axios from  'axios';

function Popup(props) {

    const [usernameReg, setUsernameReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');
    const [nameReg, setNameReg] = useState('');
    const [surnameReg, setSurnameReg] = useState('');
    const [emailReg, setEmailReg] = useState('');
    const [telephoneReg, setTelephoneReg] = useState('');
    const [addressReg, setAddressReg] = useState('');
    const [birthReg, setBirthReg] = useState('');
    const [genderReg, setGenderReg] = useState('');

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

    function changeDisplay(e) {

        this.props.parentcallback(!this.props.displayProperty);
        e.preventDefault();

    }      

return (
    <React.Fragment>
    {props.displayProperty && <div className="Popup1">
        <div id="overlay"></div>
        <div className="containerPop">
            <button className="closeButton" onClick={()=>{changeDisplay()}}>x</button>
        <h1>Registration</h1>
        
        <input type="text" placeholder="Name" className="box1" onChange={(e)=>{setNameReg(e.target.value);console.log(nameReg)}}></input>
        <input type="text" placeholder="Surname" className="box2" onChange={(e)=>{setSurnameReg(e.target.value);console.log(surnameReg)}}></input>
       
        <input type="text" placeholder="E-mail" onChange={(e)=>{setEmailReg(e.target.value);console.log(emailReg)}}></input>
        <input type="text" placeholder="Phone number" onChange={(e)=>{setTelephoneReg(e.target.value);console.log(telephoneReg)}}></input>
        <input type="text" placeholder="Address" onChange={(e)=>{setAddressReg(e.target.value);console.log(addressReg)}}></input>
        
        <input type="date" placeholder="Name" className="box1" onChange={(e)=>{setBirthReg(e.target.value);console.log(birthReg)}}></input>
        <input type="text" placeholder="Gender" className="box2" onChange={(e)=>{setGenderReg(e.target.value);console.log(genderReg)}}></input>
        
        <input type="text" placeholder="Username" onChange={(e)=>{setUsernameReg(e.target.value);console.log(usernameReg)}}></input>
        <input type="password" placeholder="Password" onChange={(e)=>{setPasswordReg(e.target.value);console.log(passwordReg)}}></input>
        <input type="text" placeholder="Confirm password"></input>
        <button  className="register" onClick={register}>Sign up</button>
        </div>
        
    </div>}
    </React.Fragment>
);
}

export default Popup;