import React from 'react'
import { Form, useNavigate } from 'react-router-dom'

const ContactForm = () => {

    const navigation = useNavigate()

    const isSubmitting = navigation.state === "submitting"

    return (
        <div className="form-section">
            <h1>page contact</h1>
            <Form className='form' method='POST'>
                <h4 style={{ textAlign: "center", marginBottom: "2rem" }}>Our contact</h4>
                <div className="form-row">
                    <label htmlFor="name" className='form-label'>name</label>
                    <input type="text"
                        id='name'
                        className='form-input'
                        name='name'
                        required
                        placeholder='John'
                    />
                </div>
                <div className="form-row">
                    <label htmlFor="LastName" className='form-label'>last name</label>
                    <input type="text"
                        id='LastName'
                        className='form-input'
                        name='lastname'
                        required
                        placeholder='Smith'
                    />
                </div>
                <div className="form-row">
                    <label htmlFor="email" className='form-label'>email</label>
                    <input type="email"
                        id='email'
                        className='form-input'
                        name='email'
                        required
                        placeholder='test@test.com'
                    />
                </div>
                <button className='btn btn-block' type='submit' disabled={isSubmitting} style={{ marginTop: "0.5rem" }}>
                    {isSubmitting ? "Submitting" : "Submit"}
                </button>
            </Form>
        </div>

    )
}

export default ContactForm