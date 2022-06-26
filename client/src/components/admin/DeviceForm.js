import React, { useEffect, useState } from 'react'
import { Row, Col, Form, Button, Modal } from "react-bootstrap";
import { useDispatch } from 'react-redux'
import { putDevices, postDevices, delDevices } from '../../store/actions';



const initialState = { company: "", brand: "", model: "", storage: "", color: "", price: "", id: null, userId: 1 }


export default function DeviceForm(props) {


   const { devicestate } = props

   const dispatch = useDispatch()

   const [formData, setFormData] = useState(initialState)

   const onInputChange = (e) => { setFormData({ ...formData, [e.target.name]: e.target.value }) }

   const handleSubmit = (e) => {
      e.preventDefault();

      if (devicestate) {
         delete formData.company
         dispatch(putDevices(formData))

      } else {
         dispatch(postDevices(formData))
         setFormData(initialState)
      }
      console.log(formData)
   }

   useEffect(() => setFormData(devicestate ? { ...devicestate } : initialState), [devicestate])



   return (
      <Modal {...props} size="md" backdrop="static" aria-labelledby="contained-modal-title-vcenter" centered >

         <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
               {devicestate ? "Cihaz Düzenle" : "Cihaz Ekle"}
            </Modal.Title>
         </Modal.Header>

         <Modal.Body className="m-3">


            <Form onSubmit={handleSubmit}>

               <Row className='align-items-end'>

                  <Form.Group controlId="deviceCompany" className="mb-3">
                     <Form.Label>Firma</Form.Label>
                     <Form.Control name="company" type="text" maxLength="50" onChange={onInputChange} value={formData.company} readOnly />
                  </Form.Group>

                  <Form.Group controlId="deviceBrand" className="mb-3">
                     <Form.Label>Marka</Form.Label>
                     <Form.Control name="brand" type="text" maxLength="50" onChange={onInputChange} value={formData.brand} />
                  </Form.Group>

                  <Form.Group controlId="deviceModel" className="mb-3">
                     <Form.Label>Model</Form.Label>
                     <Form.Control name="model" type="text" maxLength="50" onChange={onInputChange} value={formData.model} />
                  </Form.Group>

                  <Form.Group controlId="deviceStorage" className="mb-3">
                     <Form.Label>Hafıza</Form.Label>
                     <Form.Control name="storage" type="text" maxLength="50" onChange={onInputChange} value={formData.storage} />
                  </Form.Group>

                  <Form.Group controlId="deviceColor" className="mb-3">
                     <Form.Label>Renk</Form.Label>
                     <Form.Control name="color" type="text" maxLength="50" onChange={onInputChange} value={formData.color} />
                  </Form.Group>

                  <Form.Group controlId="devicePrice" className="mb-3">
                     <Form.Label>Fiyat</Form.Label>
                     <Form.Control name="price" type="text" maxLength="50" onChange={onInputChange} value={formData.price} />
                  </Form.Group>


               </Row>



               {/* -------------------------- Button -------------------------- */}



               <Col className="d-flex justify-content-end mt-2 gap-2">

                  <Button variant="outline-danger from-btn" type="button" onClick={() => dispatch(delDevices(devicestate.id), props.onHide())} style={{ display: !devicestate && "none" }}>Sil</Button>

                  <Button variant="outline-secondary from-btn" type="button" onClick={() => { setFormData(devicestate ? devicestate : initialState); props.onHide() }}>Vazgeç</Button>

                  <Button variant="outline-primary from-btn" type="submit" onClick={() => !devicestate && props.onHide()}>Kaydet</Button>

               </Col>


            </Form>

         </Modal.Body>

      </Modal >
   )
}

