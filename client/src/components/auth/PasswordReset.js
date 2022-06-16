import React, { useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { FaUnlock } from 'react-icons/fa'
import Background from './Background';




const initialState = { user_id: "", token: "", new_password: "" }

const initialValid = { valid: false, password_confirm: "" }


export default function PasswordReset() {

   const dispatch = useDispatch()


   const [validated, setValidated] = useState(initialValid);

   const [formData, setFormData] = useState(initialState)


   const onInputChange = (e) => { setFormData({ [e.target.name]: e.target.value }) }



   const handleSubmit = (e) => {
      e.preventDefault();

      if (formData.password === validated.password_confirm) {
         // dispatch(login(login, "signin"))
      }
   };




   return (

      <div className="auth-wrapper">
         <div className="auth-content">

            <Background />

            <Card>

               <Card.Body className="text-center p-4">

                  <div className="my-4">
                     <FaUnlock className='fs-1 auth-svg' />
                  </div>

                  <h3 className="mb-4">Password Reset</h3>


                  <Form onSubmit={handleSubmit}>


                     <Form.Group controlId="regPersonPassword" className="mb-3">
                        <Form.Control name="new_password" type="password" minLength="6" maxLength="20" placeholder="Password" size='lg' 
                           className={`bg-light py-2` + (validated.valid ? ((formData.new_password === validated.password_confirm) && formData.new_password !== "" ? " is-valid" : " is-invalid") : "")}
                           onChange={onInputChange} value={formData.new_password} required />
                     </Form.Group>

                     <Form.Group controlId="regPersonRePassword" className="mb-3">
                        <Form.Control name="password_confirm" type="password" minLength="6" maxLength="20" placeholder="Confirm Password" size='lg' 
                           className={`bg-light py-2` + (validated.valid ? ((formData.new_password === validated.password_confirm) && validated.password_confirm !== "" ? " is-valid" : " is-invalid") : "")}
                           onChange={(e) => setValidated({ ...validated, password_confirm: e.target.value })} value={validated.password_confirm} required />
                     </Form.Group>


                     <Button variant="primary" type='submit' className="mb-4 px-4" onClick={() => setValidated({ ...validated, valid: true })}>Change Password</Button>

                  </Form>

                  <p className="mb-1"><Link to="/" className="text-muted small">Already have an account?</Link></p>
                  <p className="mb-4"><Link to="/signup" className="text-muted small">Don’t have an account?</Link></p>

               </Card.Body>
            </Card>

         </div>
      </div>
   )
}

