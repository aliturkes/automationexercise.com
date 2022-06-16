
import React, { useEffect, useState } from 'react'
import { Row, Col, Form, Button, Modal } from "react-bootstrap";
import { useDispatch } from 'react-redux'

const initialState = { _id: "", brand: "", model: "", storage: "", color: "", price: "" }


export default function DealerForm(props) {


   const { device } = props

   const dispatch = useDispatch()

   const [formData, setFormData] = useState(initialState)

   // const token_id = JSON.parse(localStorage.getItem('token')).id;

   const onInputChange = (e) => { setFormData({ ...formData, [e.target.name]: e.target.value }) }

   const handleSubmit = (e) => {
      e.preventDefault();



      // if (request) {
      //    dispatch(putRequest(formData))
      //    setFormData(initialState)

      // } else {
      //    dispatch(postRequest(formData))
      // }

      // dispatch(request ? putRequest(formData) : postRequest(formData))

      setFormData(initialState)

   }

   useEffect(() => setFormData(device ? device : initialState), [props])




   console.log(initialState);
   console.log(formData);


   return (
      <Modal {...props} size="md" backdrop="static" aria-labelledby="contained-modal-title-vcenter" centered >

         <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
               {device ? "Cihaz Düzenle" : "Cihaz Ekle"}
            </Modal.Title>
         </Modal.Header>

         <Modal.Body className="m-3">

            <Form onSubmit={handleSubmit}>


               <Row className='align-items-end'>

                  <Form.Group controlId="dealerBrand" className="mb-3">
                     <Form.Label>Marka</Form.Label>
                     <Form.Control name="other_service_type" type="text" maxLength="50" size='lg' onChange={onInputChange} value={formData.brand} />
                  </Form.Group>

                  <Form.Group controlId="dealerModel" className="mb-3">
                     <Form.Label>Model</Form.Label>
                     <Form.Control name="other_service_type" type="text" maxLength="50" size='lg' onChange={onInputChange} value={formData.model} />
                  </Form.Group>

                  <Form.Group controlId="dealerStorage" className="mb-3">
                     <Form.Label>Hafıza</Form.Label>
                     <Form.Control name="other_service_type" type="text" maxLength="50" size='lg' onChange={onInputChange} value={formData.storage} />
                  </Form.Group>

                  <Form.Group controlId="dealerColor" className="mb-3">
                     <Form.Label>Renk</Form.Label>
                     <Form.Control name="other_service_type" type="text" maxLength="50" size='lg' onChange={onInputChange} value={formData.color} />
                  </Form.Group>

                  <Form.Group controlId="dealerPrice" className="mb-3">
                     <Form.Label>Fiyat</Form.Label>
                     <Form.Control name="other_service_type" type="text" maxLength="50" size='lg' onChange={onInputChange} value={formData.price} />
                  </Form.Group>





               </Row>





               {/* -------------------------- Button -------------------------- */}



               <Col className="d-flex justify-content-end mt-2 gap-2">
                  
                  <Button variant="outline-danger from-btn" type="button" /*onClick={() => dispatch(delRequest(device._id), props.onHide())}*/ style={{ display: !device && "none" }}>Sil</Button>

                  <Button variant="outline-secondary from-btn" type="button" >Vazgeç</Button>

                  <Button variant="outline-primary from-btn" type="submit" onClick={() => !device && props.onHide()}>Kaydet</Button>

               </Col>



            </Form>

         </Modal.Body>

      </Modal >
   )
}

