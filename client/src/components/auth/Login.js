import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { Form, Button, Card } from 'react-bootstrap';
import { FaRegEye, FaRegEyeSlash, FaUnlock } from "react-icons/fa";
import Background from './Background';
import { login } from '../../store/actions'


const initialState = { email: "", password: "" }


export default function Login() {

   const dispatch = useDispatch()

   const navigate = useNavigate();

   const store = useSelector(state => state.authReducer)

   const { user, error, loading } = store

   const [showPassword, setShowPassword] = useState(false);

   const [formData, setFormData] = useState({ email: "", password: "" })

   const onInputChange = (e) => { setFormData({ ...formData, [e.target.name]: e.target.value }) }

   const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(login(formData))
      setFormData(initialState)
   };

   useEffect(() => { user?.userId === 1 ? navigate("/admin") : navigate("/company") }, [user])

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
                        <Form.Control name="email" type="email" placeholder="Email" className="bg-light py-2" size='lg' onChange={onInputChange} value={formData.email} required />
                     </Form.Group>

                     <Form.Group className="mb-4 show-relative" controlId="password">
                        <span className='show-password text-muted' onClick={() => setShowPassword(!showPassword)} >{showPassword ? <FaRegEyeSlash /> : <FaRegEye />}</span>
                        <Form.Control name="password" type={showPassword ? "text" : "password"} placeholder="Şifre" className="bg-light py-2" size='lg' onChange={onInputChange} value={formData.password} required />
                     </Form.Group>

                     <Button variant="primary" type='submit' className="mb-4 px-4">Giriş Yap</Button>

                  </Form>

                  {/* <p className="mb-1"><Link to="/password-forgot" className="text-muted small">Şifre mi unuttum</Link></p> */}
                  <p className="mb-4"><Link to="/signup" className="text-muted small">Hesabınız yok mu?</Link></p>

               </Card.Body>
            </Card>

         </div>
      </div>
   )
}