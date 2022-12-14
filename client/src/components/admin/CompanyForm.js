import React, { useEffect, useState } from 'react'
import { Row, Col, Form, Button, Modal, ButtonGroup, ToggleButton } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux'




const initialState = { company: "", name: "", email: "", phone: "", password: "" }

export default function CompanyForm(props) {

   const { compstate } = props

   const dispatch = useDispatch()

   const [formData, setFormData] = useState(initialState)

   useEffect(() => setFormData(compstate ? compstate : initialState), [compstate])

   const onInputChange = (e) => { setFormData({ ...formData, [e.target.name]: e.target.value }) }

   const handleSubmit = (e) => {
      e.preventDefault();

      if (compstate) {
         // dispatch(putDevice(formData))
      } else {
         // dispatch(postDevice(formData))
         setFormData(initialState)
      }
   }



   return (
      <Modal {...props} size="md" backdrop="static" aria-labelledby="contained-modal-title-vcenter" centered >

         <Form onSubmit={handleSubmit}>

            <Modal.Header closeButton>
               <Modal.Title id="contained-modal-title-vcenter" style={{ paddingLeft: 0 }}>
                  {compstate ? "Cihaz Düzenle" : "Cihaz Ekle"}
               </Modal.Title>
            </Modal.Header>


            <Modal.Body className="m-md-3">

               <Row className='align-items-end'>


                  <Form.Group controlId="personCompany" className="mb-3">
                     <Form.Label>Firma Adı</Form.Label>
                     <Form.Control name="company" type="text" maxLength="30" size='lg' onChange={onInputChange} value={formData.company} required />
                  </Form.Group>

                  <Form.Group controlId="personName" className="mb-3">
                     <Form.Label>Ad Soyad</Form.Label>
                     <Form.Control name="name" type="text" maxLength="30" size='lg' onChange={onInputChange} value={formData.name} required />
                  </Form.Group>

                  <Form.Group controlId="personEmail" className="mb-3">
                     <Form.Label>Email</Form.Label>
                     <Form.Control name="email" type="email" maxLength="30" size='lg' onChange={onInputChange} value={formData.email} required />
                  </Form.Group>

                  <Form.Group controlId="personPhone" className="mb-3">
                     <Form.Label>Telefon Numarası</Form.Label>
                     <Form.Control name="phone" type="number" maxLength="30" size='lg' onChange={onInputChange} value={formData.phone} required />
                  </Form.Group>


               </Row>

            </Modal.Body>


            <Modal.Footer>

               <Button variant="outline-danger from-btn" type="button" onClick={() => dispatch(/* delDevice(compstate.id),*/ props.onHide())} style={{ display: !compstate && "none" }}>Sil</Button>

               <Button variant="outline-secondary from-btn" type="button" onClick={() => { setFormData(compstate ? compstate : initialState); props.onHide() }}>Vazgeç</Button>

               <Button variant="outline-primary from-btn" type="submit" onClick={() => setTimeout(() => { props.onHide() }, 500)}>Kaydet</Button>

            </Modal.Footer>

         </Form>
      </Modal >
   )
}