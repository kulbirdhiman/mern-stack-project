import React, { useState } from 'react';
import axios from 'axios';
import './Form.css'
function Login({ chnge }) {
    // Define state variables to store name, age, and email

    const [password, setPassword] = useState('');

    const [email, setEmail] = useState('');

    const submit = async (e) => {
        if (!email.includes("@gmail.com" || "yahoo.com")) {
            alert("Please enter a valid gmail or yahoo account")
        }
        if (!password.length >= 8) {
            alert(`your password had to short`)
        }

        e.preventDefault(); // Prevent default form submission behavior

        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        };

        try {
            const response = await axios.post("/api/login", {

                email,
                password
            }, config);
            console.log(response.data);
            alert('you login')
        } catch (error) {
            console.error("Error:", error);
            alert('something wrong')
        }
        setEmail('')
        setPassword('')

    };

    return (
        <div className="hero" >
            <div className='form'>
                <h1>Login</h1>
                <form onSubmit={submit}>

                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder='enter your emailID'
                        />
                    </div>
                    <div>
                        <label htmlFor="age">Password</label>
                        <input
                            type="password"
                            id="age"
                            name="age"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder='enter Password'
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>
                <p>Or</p>

                <button className='signup' onClick={chnge} >Sigin up</button>
            </div>
        </div>
    );
}

export default Login;
