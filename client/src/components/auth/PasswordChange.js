import React, { useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { FaUnlock } from 'react-icons/fa'
import Background from './Background';
import { changePassword } from '../../store/actions'



const initialState = { oldPassword: "", newPassword: "" }

const initialValid = { valid: false, passwordConfirm: "" }



export default function PasswordChange() {


   const dispatch = useDispatch()

   const [validated, setValidated] = useState(initialValid);

   const [formData, setFormData] = useState(initialState)


   const onInputChange = (e) => { setFormData({ ...formData, [e.target.name]: e.target.value }) }

   const handleSubmit = (e) => {
      e.preventDefault();
      
      if (formData.newPassword === validated.passwordConfirm) {
         // dispatch(changePassword(formData))
      }
      console.log(formData);
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

                  <h3 className="mb-4">Şifreyi Değiştir</h3>


                  <Form onSubmit={handleSubmit}>


                     <Form.Group controlId="regPersonPassword" className="mb-3">
                        <Form.Control name="oldPassword" type="password" minLength="6" maxLength="20" placeholder="Eski Şifre"
                           className={`bg-light py-2` + (validated.valid ? (formData.oldPassword !== "" ? " is-valid" : " is-invalid") : "")}
                           onChange={onInputChange} value={formData.oldPassword} required />
                     </Form.Group>


                     <Form.Group controlId="regPersonNewPassword" className="mb-3">
                        <Form.Control name="newPassword" type="password" minLength="6" maxLength="20" placeholder="Yeni Şifre"
                           className={`bg-light py-2` + (validated.valid ? ((formData.newPassword === validated.passwordConfirm) && formData.newPassword !== "" ? " is-valid" : " is-invalid") : "")}
                           onChange={onInputChange} value={formData.newPassword} required />
                     </Form.Group>

                     <Form.Group controlId="regPersonRePassword" className="mb-3">
                        <Form.Control name="passwordConfirm" type="password" minLength="6" maxLength="20" placeholder="Yeni Şifre (Tekrar)"
                           className={`bg-light py-2` + (validated.valid ? ((formData.newPassword === validated.passwordConfirm) && validated.passwordConfirm !== "" ? " is-valid" : " is-invalid") : "")}
                           onChange={(e) => setValidated({ ...validated, passwordConfirm: e.target.value })} value={validated.passwordConfirm} required />
                     </Form.Group>


                     <Button variant="primary" type='submit' className="mb-4 px-4" onClick={() => setValidated({ ...validated, valid: true })}>Şifreyi Değiştir</Button>

                  </Form>

                  <p className="mb-1"><Link to="/" className="text-muted small">Hesabın var mı?</Link></p>
                  <p className="mb-4"><Link to="/signup" className="text-muted small">Hesabınız yok mu?</Link></p>

               </Card.Body>
            </Card>

         </div>
      </div>
   )
}
