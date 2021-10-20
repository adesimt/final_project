import { states } from './states';
import { Link } from 'react-router-dom';




const ClientSignup = () => {
    return ( 
        <div className="signup_page">
            <div className="content">
                <Link to="/"><div className="logo">logo</div></Link>
                <div className="form_container signup_container">
                    <div className="form_header">Create Account</div>
                    <form className="form">

                        <div className="form_elements_flex">

                            <div className="form_elements first_element">
                                <label>Enter your first name</label>
                                <input type="text" name="firstName" className="firstName" placeholder="First Name"/>
                            </div>

                            <div className="form_elements last_element">
                                <label>Enter your last name</label>
                                <input type="text" name="lastName" className="lastName" placeholder="Last Name"/>
                            </div>
                        </div>

                        <div className="form_elements">
                            <label>Enter your email</label>
                            <input type="text" name="email" className="email" placeholder="Email Address"/>
                        </div>

                        <div className="form_elements">
                            <label>Create password</label>
                            <input type="password" name="password" className="password" placeholder="Password"/>
                        </div>


                        <div className="form_elements_flex">

                            <div className="form_elements first_element">
                                <label>City</label>
                                <input type="text" name="city" className="city" placeholder="City"/>
                            </div>

                            <div className="form_elements last_element">
                                <label>State</label>
                                <select name="states" className="states">

                                    { states.map((state, index) => <option value={state} key={index}>{state}</option>

                                    )};
                                    
                                </select>
                            </div>
                        </div>
                        

                        <button className="btn login_btn">Create Account</button>

                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default ClientSignup;