import { Link } from 'react-router-dom';
//import { useState, useMemo, useEffect } from 'react';




const Signup = ({ states, errors, formData, setFormData}) => {

    
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
                    <div className="form">

                        <div className="form_elements_flex">

                            <div className="form_elements first_element">
                                <label>Enter your first name</label>
                                <input 
                                    type="text" 
                                    name="firstName" 
                                    className={!errors.firstName ? "firstName" : "error" }
                                    placeholder="First Name"
                                    value={formData.firstName}
                                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                            
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
                                    value={formData.lastName}
                                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}

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
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                
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
                                value={formData.password}
                                onChange={(e) => setFormData({...formData, password: e.target.value})}

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
                                    value={formData.city}
                                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                                    
                                />
                                {errors.city && <span>*{errors.city}</span>}

                            </div>

                            <div className="form_elements last_element">
                                <label>State</label>
                                <select name="states" className="states" value={formData.state} onChange={(e) => setFormData({...formData, state: e.target.value})}>

                                    { states.map((state, index) => <option value={state} key={index}>{state}</option>

                                    )};
                                    
                                </select>
                            </div>
                        </div>
                        

                        

                    </div>
                </div>
            </div>
        </div>
     );

}
 
export default Signup;