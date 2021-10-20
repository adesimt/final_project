import './account.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return ( 

        <div className="login_page">
            <div className="content">
                <Link to="/"><div className="logo">logo</div></Link>
                <div className="form_container login_container">
                    <div className="form_header">Login</div>
                    <form className="form">

                        <div className="form_elements">
                            <label>Enter your email</label>
                            <input type="text" name="email" className="email" placeholder="Email Address"/>
                        </div>

                        <div className="form_elements">
                            <label>Enter a password</label>
                            <input type="password" name="password" className="password" placeholder="Password"/>
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