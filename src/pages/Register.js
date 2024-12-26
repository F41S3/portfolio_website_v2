import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import '../element/css/styles.css'
import Header from "../element/Header";
import Footer from "../element/Footer";



let firstNameRegEx = /^[a-zA-Z\s]+$/;
let lastNameRegEx = /^[a-zA-Z\s'-]+$/;
let emailRegEx = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-.]+\.[a-zA-Z0-9-.]{2,6}$/;
let passwordRegEx = /((?=(.*[a-z])+)(?=(.*[A-Z])+)(?=(.*[0-9])+)(?=(.*[!@#$%^&*(),.?":{}|<>])+))[a-zA-Z0-9!@#$%^&*(),.?":{}|<>_-]{12,}$/;


/***
 URLS:
 https://www.w3schools.com/react/react_forms.asp - cited
 https://www.youtube.com/watch?v=TWz4TjSssbg - cited
 https://stackoverflow.com/questions/69714423/how-do-you-pass-data-when-using-the-navigate-function-in-react-router-v6 - cited
 https://stackoverflow.com/questions/53295883/how-to-style-error-messages-validated-by-yup-in-a-react-formik-app - cited
 https://react.dev/reference/react/useState - cited
 ***/
export default function RegistrationForm() {
    const [fname, setFirstName] = useState('');
    const [lname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [pword, setPassword] = useState('');
    const [season, setSeason] = useState('');
    const [errorMessages, setErrorMessages] = useState({});

    const navigate = useNavigate();
    const errors = {};

    // submission
    function handleSubmit(event) {
        event.preventDefault();

        if (!firstNameRegEx.test(fname)) {
            errors.fname = 'Please enter a valid first name';
        }
        if (!lastNameRegEx.test(lname)) {
            errors.lname = 'Please enter a valid last name';
        }
        if (!emailRegEx.test(email)) {
            errors.email = 'Please enter a valid email';
        }
        if (!passwordRegEx.test(pword)) {
            errors.pword = 'Password must use at least: '+
                '\n- One number'+
                '\n- One uppercase letter'+
                '\n- One lowercase letter'+
                '\n- One special character'+
                '\n- Be at least 12 characters long';
        }

        setErrorMessages(errors);

        // if no errors, nav to Profile page with the user input data
        if (Object.keys(errors).length === 0) {
            navigate("/Profile", {
                state: {
                    fname: fname,
                    lname: lname,
                    email: email,
                    season: season
                }
            });
        }
    }

    return (
        <div>
            <Header></Header>
            <form onSubmit={handleSubmit} className="register">
                <h2>Registration Form</h2>
                {<div style={{color: 'red'}}>{errorMessages.fname}</div>}
                <input type="text" value={fname} onChange={(event) => setFirstName(event.target.value)}
                       placeholder="First Name"/>
                <br/>
                {<div style={{color: 'red'}}>{errorMessages.lname}</div>}
                <input type="text" value={lname} onChange={(event) => setLastName(event.target.value)}
                       placeholder="Last Name"/>
                <br/>
                {<div style={{color: 'red'}}>{errorMessages.email}</div>}
                <input type="email" value={email} onChange={(event) => setEmail(event.target.value)}
                       placeholder="Email"/>
                <br/>
                {<div style={{color: 'red'}}>{errorMessages.pword}</div>}
                <input type="password" value={pword} onChange={(event) => setPassword(event.target.value)}
                       placeholder="Password"/>
                <br/>
                <select value={season} onChange={(event) => setSeason(event.target.value)}>
                    <option value="">Select your favorite season</option>
                    <option value="Spring">Spring</option>
                    <option value="Summer">Summer</option>
                    <option value="Fall">Fall</option>
                    <option value="Winter">Winter</option>
                </select>
                <br/>
                <button type="submit">Submit</button>
            </form>
            <Footer></Footer>
        </div>

    );
}
