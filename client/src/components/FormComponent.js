import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const FormComponent = ({ elements, submitButtonText, onSubmit, }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
    };

    return (
        <Form onSubmit={handleSubmit}>
            {elements()}
            <Button type="submit" variant="primary">{submitButtonText}</Button>
        </Form>
    );
};

export default FormComponent;