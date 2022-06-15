import React, { useState, useEffect } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { BsFillPersonPlusFill } from "react-icons/bs";
import Background from './Background';

import "./auth.css";


const initialState = { dealer: "", name: "", email: "", phone: "", password: "" }

const initialValid = { valid: false, password_confirm: "", terms: false, reCap: false }


export default function Register() {

  // const dispatch = useDispatch()

  // const store = useSelector(state => state)

  // const { message } = store.token

  const navigate = useNavigate()


  const [validated, setValidated] = useState(initialValid);

  const [formData, setFormData] = useState(initialState)


  const onInputChange = (e) => { setFormData({ ...formData, [e.target.name]: e.target.value }) }


  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password === validated.password_confirm) {

      // dispatch(register(formData))
      console.log("-----------------------------------------------------------");
      setFormData(initialState)
      setValidated(initialValid)
    }

  };


  console.log(formData);
  console.log(validated);


  return (

    <div className="auth-wrapper">

      <div className="auth-content">

      <Background />

        <Card>
          <Card.Body className="text-center p-4">

            <div className="my-3">
            <BsFillPersonPlusFill className='fs-1 auth-svg' />
            </div>

            <h3 className="mb-4">Kayıt Formu</h3>

            <Form onSubmit={handleSubmit}>

              <Form.Group controlId="regPersonDealer" className="mb-3">
                <Form.Control name="dealer" type="text" maxLength="30" placeholder="Firma Adı"
                  className={`bg-light py-2` + (validated.valid ? (formData.dealer ? " is-valid" : " is-invalid") : "")}
                  onChange={onInputChange} value={formData.dealer} required />
              </Form.Group>

              <Form.Group controlId="regPersonName" className="mb-3">
                <Form.Control name="name" type="text" maxLength="30" placeholder="Ad Soyad"
                  className={`bg-light py-2` + (validated.valid ? (formData.name ? " is-valid" : " is-invalid") : "")}
                  onChange={onInputChange} value={formData.name} required />
              </Form.Group>

              <Form.Group controlId="regPersonEmail" className="mb-3">
                <Form.Control name="email" type="email" maxLength="30" placeholder="Email"
                  className={`bg-light py-2` + (validated.valid ? (formData.email.includes("@") ? " is-valid" : " is-invalid") : "")}
                  onChange={onInputChange} value={formData.email} required />
              </Form.Group>

              <Form.Group controlId="regPersonPhone" className="mb-3">
                <Form.Control name="phone" type="email" maxLength="30" placeholder="Telefon Numarası"
                  className={`bg-light py-2` + (validated.valid ? (formData.phone ? " is-valid" : " is-invalid") : "")}
                  onChange={onInputChange} value={formData.phone} required />
              </Form.Group>

              <Form.Group controlId="regPersonPassword" className="mb-3">
                <Form.Control name="password" type="password" minLength="6" maxLength="20" placeholder="Şifre"
                  className={`bg-light py-2` + (validated.valid ? ((formData.password === validated.password_confirm) && formData.password !== "" ? " is-valid" : " is-invalid") : "")}
                  onChange={onInputChange} value={formData.password} required />
              </Form.Group>

              <Form.Group controlId="regPersonRePassword" className="mb-3">
                <Form.Control name="password_confirm" type="password" minLength="6" maxLength="20" placeholder="Şifre Tekrar"
                  className={`bg-light py-2` + (validated.valid ? ((formData.password === validated.password_confirm) && validated.password_confirm !== "" ? " is-valid" : " is-invalid") : "")}
                  onChange={(e) => setValidated({ ...validated, password_confirm: e.target.value })} value={validated.password_confirm} required />
              </Form.Group>

              <Form.Check type="checkbox" id="regPersonCheckbox" className="text-start mb-4">
                <Form.Check.Input type="checkbox"
                  className={`text-start mb-4` + (validated.valid ? (validated.terms ? " is-valid" : " is-invalid") : "")}
                  onChange={(e) => setValidated({ ...validated, terms: e.target.checked })} checked={validated.terms} required />
                <Form.Check.Label className="fw-normal is-invalid"><Link to="#">Hizmet koşullarını</Link> kabul ediyorum.</Form.Check.Label>
              </Form.Check>

              <Button variant="primary" type="submit" className="mb-4 px-4" onClick={() => setValidated({ ...validated, valid: true })}>Kayıt Ol</Button>

            </Form>

            <p className="mb-2"><Link to="/signin" className="text-muted small">Hesabın var mı?</Link></p>

          </Card.Body>
        </Card>

      </div>
    </div >
  );
}