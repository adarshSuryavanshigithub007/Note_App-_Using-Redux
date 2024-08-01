import React, { useState } from 'react';
import FormComponent from '../components/FormComponent';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../action/userRegisterAction';
const Register = () => {
    const dispatch = useDispatch()
    const {loading,error} = useSelector((state) => state.userRegister)
    // console.log(userRegister)
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleSubmit = (e) => {
        // e.preventDefault();
        console.log("Form submitted with values:", formValues);
        dispatch(register(formValues.name, formValues.email, formValues.password)).then((result) => {
            console.log(result)
        }).catch((error) => {
            console.log("Full error object:", error);
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
                submitButtonText="Register"
                elements={() => (
                    <>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>name</Form.Label>
                            <Form.Control
                                type="name"
                                name="name"
                                placeholder="name"
                                onChange={handleChange}
                                value={formValues.name}
                            />
                        </Form.Group>
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
                                value={formValues.password}
                            />
                        </Form.Group>
                    </>
                )}
            />
            {loading ? "loading...":"loading faile"}
            {error && <div className="error">{error}</div>}
        </div>
    )
}

export default Register
