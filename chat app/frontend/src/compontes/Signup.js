import React, { useState } from 'react';
import axios from 'axios';
import './Form.css'


function Signup({ chnge }) {

    // Define state variables to store name, age, and email
    const [name, setName] = useState("");
    const [password, setPassword] = useState('');
    let [confpass, setConfpass] = useState('')
    const [email, setEmail] = useState('');


    const submit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        // Validate email
        if (!email.includes("@gmail.com") && !email.includes("@yahoo.com")) {
            alert("Please enter a valid gmail or yahoo account");
            return; // Exit function if email is invalid
        }

        // Validate password length
        if (password.length < 8) {
            alert("Your password is too short");
            return; // Exit function if password is too short
        }

        // Validate password confirmation
        if (password !== confpass) {
            alert("Passwords do not match");
            return; // Exit function if passwords do not match
        }

        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        };

        try {
            const response = await axios.post("/api/all", {
                name,
                password,
                email
            }, config);
            console.log(response.data);
            // Reset form fields only if the submission is successful
            setConfpass('');
            setEmail('');
            setName('');
            setPassword('');
        } catch (error) {
            console.error("Error:", error);
        }
        chnge()
    };


    return (
        <div className="hero" >
            <div className='form'>
                <h1>SignUp</h1>
                <form onSubmit={submit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            placeholder='Enter your name '
                        />
                    </div>
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
                    <div>
                        <label htmlFor="age">confirm Password</label>
                        <input
                            type="password"
                            id="age"
                            name="age"
                            value={confpass}
                            onChange={(e) => setConfpass(e.target.value)}
                            required
                            placeholder='enter Password'
                        />
                    </div>

                    <button className='signup' >Sigin up</button>
                </form>
                <p>Or</p>
                <button type="submit" onClick={chnge}>Login</button>
            </div>
        </div>
    );
}

export default Signup;
