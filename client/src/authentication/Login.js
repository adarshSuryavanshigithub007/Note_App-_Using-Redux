import React, { useState } from 'react';
import FormComponent from '../components/FormComponent';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../action/userLoginAction';
const Login = () => {

    const dispatch = useDispatch()
    const { loading, error } = useSelector(state => state.userLogin);
    // const {loading, error, userInfo} = userLogin
    console.log(loading)
    const [formValues, setFormValues] = useState({
        email: '',
        password: ''
    });


    const handleSubmit = (e) => {
        // e.preventDefault();
        console.log("Form submitted with values:", formValues);
        dispatch(login(formValues.email, formValues.password)).then((result) => {
            console.log(result)
            localStorage.setItem('token', result.token);
            if (result.success) {
                window.location.href = '/'
                alert(result.message)
            }
        }).catch((error) => {
            console.log("Full error object:", error);
            alert(error.response.data.message)
            console.log("Error response:", error.response);
        });
    };



    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    };
    return (
        <div>
            <FormComponent
                onSubmit={handleSubmit}
                submitButtonText="Login"
                elements={() => (
                    <>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder="name@example.com"
                                onChange={handleChange}
                                value={formValues.email}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formText">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type='password'
                                name="password"
                                onChange={handleChange}
                                value={formValues.text}
                            />
                        </Form.Group>
                    </>
                )}
            />
            {loading ? 'Logging in...' : 'Login'}
            {error && <div className="error">{error}</div>}
        </div>
    )
}

export default Login
