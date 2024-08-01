import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import FormComponent from '../components/FormComponent';
import Form from 'react-bootstrap/Form';
import { createNewNote } from '../action/addnewNoteAction';

const AddBooks = () => {

  const [formdata, setFormData] = useState({ title: '', content: '', category: '' })
  const newNoteState = useSelector(state => state.notes?.createNote);
  const dispatch = useDispatch()
  console.log(newNoteState)
  console.log(formdata)

  const handleChange = (e) => {
    setFormData({
      ...formdata,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = () => {
    dispatch(createNewNote({
      title: formdata.title,
      category: formdata.category,
      content: formdata.content
    }))
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <FormComponent
        onSubmit={handleSubmit}
        submitButtonText="Add New Book"
        elements={() => (
          <>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>TITLE</Form.Label>
              <Form.Control
                type="title"
                name="title"
                placeholder="title"
                onChange={handleChange}
                value={formdata.title}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formText">
              <Form.Label>Content</Form.Label>
              <Form.Control
                type='content'
                name="content"
                onChange={handleChange}
                value={formdata.content}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formText">
              <Form.Label>Content</Form.Label>
              <Form.Control
                type='category'
                name="category"
                onChange={handleChange}
                value={formdata.category}
              />
            </Form.Group>
          </>
        )}
      />
      {/* {formdata} */}
    </div>
  )
}

export default AddBooks