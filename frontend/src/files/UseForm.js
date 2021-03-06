import { useState, useEffect } from 'react';

const useForm = () => {
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        city: ''
    })

    const [errors, setErrors] = useState({});

    const handleChange = e => {
        const { name, value} = e.target
        setValues({
            ...values, [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(values);
    }

    return { handleChange, values, handleSubmit}
}

//export default useForm;