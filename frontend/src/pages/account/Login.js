import './account.css';
import { Link } from 'react-router-dom';
import {useState, useMemo, useEffect } from 'react';
import validations from '../../files/ValidateLogin';
import { useAuth  } from '../../context/AuthContext';

const Login = () => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState({});
    const { login } = useAuth();




    const allValues = useMemo(() => {
        const values = {email, password};
        return values

    }, [email, password]);



    const handleSubmit = async (e)=> {
            e.preventDefault();
            if(errors){
                setErrors(validations(allValues));

            }
            setIsSubmitted(true);
            try {
                await login(allValues);
            } catch (error) {
                console.log(error);
            }       
        
    }

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitted){
            setIsSubmitted(true);
        }
    }, [allValues, errors, isSubmitted])
    



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
                            {errors.email && <span>*{errors.email}</span>}

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
                            {errors.password && <span>*{errors.password}</span>}

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