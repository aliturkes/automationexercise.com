import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { Form, Button, Card } from 'react-bootstrap';
import { FaRegEye, FaRegEyeSlash, FaUnlock } from "react-icons/fa";
import { login, clear } from '../../store/actions'
import Background from './Background';




export default function Login() {

   const dispatch = useDispatch()

   const navigate = useNavigate();

   const store = useSelector(state => state)

   const { isAuthenticated, token, error, sending } = store.authReducer

   const [showPassword, setShowPassword] = useState(false);

   const [formData, setFormData] = useState({ email: "", password: "" })

   useEffect(() => { dispatch(clear()) }, [])

   useEffect(() => { isAuthenticated ? (token?.userId === 1 || token?.userId === 2) ? navigate("/admin/device") : navigate("/company") : navigate("/") }, [isAuthenticated])

   const onInputChange = (e) => { setFormData({ ...formData, [e.target.name]: e.target.value }) }

   const handleSubmit = (e) => { e.preventDefault(); dispatch(login(formData)) };

   

   return (

      <div className="auth-wrapper">
         <div className="auth-content">

            <Background />

            <Card>

               <Card.Body className="text-center p-4">

                  <div className="my-4">
                     <FaUnlock className='fs-1 auth-svg' />
                  </div>

                  <h3 className="mb-4">Giriş</h3>

                  <Form onSubmit={handleSubmit}>

                     <Form.Group className="mb-3" controlId="email">
                        <Form.Control name="email" type="email" placeholder="Email" className="bg-light py-2" size='lg' onChange={onInputChange} value={formData.email} disabled={sending} required />
                     </Form.Group>

                     <Form.Group className="mb-4 show-relative" controlId="password">
                        <span className='show-password text-muted' onClick={() => setShowPassword(!showPassword)} >{showPassword ? <FaRegEyeSlash /> : <FaRegEye />}</span>
                        <Form.Control name="password" type={showPassword ? "text" : "password"} placeholder="Şifre" className="bg-light py-2" size='lg' onChange={onInputChange} value={formData.password} disabled={sending} required />
                     </Form.Group>

                     {error && <div className="text-danger mb-1">{error}</div>}

                     <Button variant="primary" type='submit' className="mb-4 px-4" disabled={sending} >Giriş Yap</Button>

                  </Form>

                  {/* <p className="mb-1"><Link to="/reset-password" className="text-muted small">Şifremi unuttum</Link></p> */}
                  <p className="mb-4"><Link to="/signup" className="text-muted small">Hesabınız yok mu?</Link></p>

               </Card.Body>
            </Card>

         </div>
      </div>
   )
}