import './account.css';
import { Link } from 'react-router-dom';
import {useState } from 'react';

const Login = () => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    const handleSubmit = (e) =>{
        e.preventDefault();
        const output = { email, password }
        console.log(output);

    }



    return ( 

        <div className="login_page">
            <div className="content">
                <Link to="/"><div className="logo">logo</div></Link>
                <div className="form_container login_container">
                    <div className="form_header">Login</div>
                    <form className="form" onSubmit={handleSubmit}>

                        <div className="form_elements">
                            <label>Enter your email</label>
                            <input 
                                type="text" 
                                name="email" 
                                className="email" 
                                placeholder="Email Address" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="form_elements">
                            <label>Enter a password</label>
                            <input 
                                type="password" 
                                name="password" 
                                className="password" 
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}

                            />
                        </div>

                        <button className="btn login_btn">Login</button>
                        <div className="no_question">Don't have an account?</div>
                        <Link to="/signup-as-a-client"><div className="btn create_btn">create account</div></Link>

                    </form>
                </div>
            </div>
        </div>


     );
}
 
export default Login;