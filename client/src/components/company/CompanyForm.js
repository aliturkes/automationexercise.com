
import React, { useEffect, useState } from 'react'
import { Row, Col, Form, Button, Modal } from "react-bootstrap";
import { useDispatch } from 'react-redux'
import { putDevice, postDevice } from '../../store/actions';

const initialState = { brand: "", model: "", storage: "", color: "", price: "" }




export default function CompanyForm(props) {


   const { deviceState } = props

   const dispatch = useDispatch()

   const [formData, setFormData] = useState(initialState)

   // const token_id = JSON.parse(localStorage.getItem('token')).id;

   const onInputChange = (e) => { setFormData({ ...formData, [e.target.name]: e.target.value }) }

   const handleSubmit = (e) => {
      e.preventDefault();

      if (deviceState) {
         //    dispatch(putDevice(formData))
         //    setFormData(initialState)

         console.log("put", formData);

      } else {
         dispatch(postDevice(formData))
         setFormData(initialState)
         console.log("post", formData);

      }
   }

   useEffect(() => setFormData(deviceState ? deviceState : initialState), [deviceState])


   console.log(formData);
   console.log(deviceState);


   return (
      <Modal {...props} size="md" backdrop="static" aria-labelledby="contained-modal-title-vcenter" centered >

         <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
               {deviceState ? "Cihaz Düzenle" : "Cihaz Ekle"}
            </Modal.Title>
         </Modal.Header>

         <Modal.Body className="m-3">


            <Form onSubmit={handleSubmit}>


               <Row className='align-items-end'>

                  <Form.Group controlId="deviceBrand" className="mb-3">
                     <Form.Label>Marka</Form.Label>
                     <Form.Control name="brand" type="text" maxLength="50" size='lg' onChange={onInputChange} value={formData.brand} />
                  </Form.Group>

                  <Form.Group controlId="deviceModel" className="mb-3">
                     <Form.Label>Model</Form.Label>
                     <Form.Control name="model" type="text" maxLength="50" size='lg' onChange={onInputChange} value={formData.model} />
                  </Form.Group>

                  <Form.Group controlId="deviceStorage" className="mb-3">
                     <Form.Label>Hafıza</Form.Label>
                     <Form.Control name="storage" type="text" maxLength="50" size='lg' onChange={onInputChange} value={formData.storage} />
                  </Form.Group>

                  <Form.Group controlId="deviceColor" className="mb-3">
                     <Form.Label>Renk</Form.Label>
                     <Form.Control name="color" type="text" maxLength="50" size='lg' onChange={onInputChange} value={formData.color} />
                  </Form.Group>

                  <Form.Group controlId="devicePrice" className="mb-3">
                     <Form.Label>Fiyat</Form.Label>
                     <Form.Control name="price" type="text" maxLength="50" size='lg' onChange={onInputChange} value={formData.price} />
                  </Form.Group>


               </Row>



               {/* -------------------------- Button -------------------------- */}



               <Col className="d-flex justify-content-end mt-2 gap-2">

                  <Button variant="outline-danger from-btn" type="button" /*onClick={() => dispatch(delRequest(device._id), props.onHide())}*/ style={{ display: !deviceState && "none" }}>Sil</Button>

                  <Button variant="outline-secondary from-btn" type="button" >Vazgeç</Button>

                  <Button variant="outline-primary from-btn" type="submit" onClick={() => !deviceState && props.onHide()}>Kaydet</Button>

               </Col>


            </Form>

         </Modal.Body>

      </Modal >
   )
}

