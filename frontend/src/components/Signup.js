import { Link } from 'react-router-dom';
import { useState } from 'react';
import validations  from '../files/ValidateFile';
import { useEffect } from 'react';
import { useMemo } from 'react';




const TrainerSignup = ({states}) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);


    const allValues = useMemo(() => {
        const values = {firstName, lastName, email, password, city, state};
        return values

    }, [firstName, lastName, email, password, city, state]);
    const [errors, setErrors] = useState({});



    const handleSubmit = e => {
            e.preventDefault();
            if(errors){
                setErrors(validations(allValues));

            }
            setIsSubmitted(true);        
        
    }

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitted){
            setIsSubmitted(true);
            console.log(allValues);
        }
    }, [allValues, errors, isSubmitted])
    
    // const handleBlur = e => {
        
    //     setErrors(validations(values));
    //     console.log(values);
    // }

    

    return ( 
        <div className="signup_page">
            <div className="content">
                <Link to="/"><div className="logo">logo</div></Link>
                <div className="form_container signup_container">
                    <div className="form_header">Create Account</div>
                    <form className="form" onSubmit={handleSubmit}>

                        <div className="form_elements_flex">

                            <div className="form_elements first_element">
                                <label>Enter your first name</label>
                                <input 
                                    type="text" 
                                    name="firstName" 
                                    className={!errors.firstName ? "firstName" : "error" }
                                    placeholder="First Name"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                            
                                />
                                {errors.firstName && <span>*{errors.firstName}</span>}
                            </div>

                            <div className="form_elements last_element">
                                <label>Enter your last name</label>
                                <input 
                                    type="text" 
                                    name="lastName" 
                                    className={!errors.lastName ? "lastName" : "error" } 
                                    placeholder="Last Name"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}

                                />
                                {errors.lastName && <span>*{errors.lastName}</span>}

                            </div>
                        </div>

                        <div className="form_elements">
                            <label>Enter your email</label>
                            <input 
                                type="text" 
                                name="email" 
                                className={!errors.email ? "email" : "error" } 
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                
                            />
                            {errors.email && <span>*{errors.email}</span>}

                        </div>

                        <div className="form_elements">
                            <label>Create password</label>
                            <input 
                                type="password" 
                                name="password" 
                                className={!errors.password ? "password" : "error" } 
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}

                            />
                            {errors.password && <span>*{errors.password}</span>}

                        </div>


                        <div className="form_elements_flex">

                            <div className="form_elements first_element">
                                <label>City</label>
                                <input 
                                    type="text" 
                                    name="city" 
                                    className={!errors.city ? "city" : "error" } 
                                    placeholder="City"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    
                                />
                                {errors.city && <span>*{errors.city}</span>}

                            </div>

                            <div className="form_elements last_element">
                                <label>State</label>
                                <select name="states" className="states" value={state} onChange={(e) => setState(e.target.value)}>

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
 
export default TrainerSignup;