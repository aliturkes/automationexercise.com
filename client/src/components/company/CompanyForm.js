import React, { useEffect, useState } from 'react'
import { Row, Col, Form, Button, Modal } from "react-bootstrap";
import { useDispatch } from 'react-redux'
import { putDevice, postDevice, delDevice } from '../../store/actions';
import { brands } from "../helpers/data"


const initialState = { brand: "", model: "", storage: "", color: "", price: "", id: null }


export default function CompanyForm(props) {


   const { devicestate } = props

   const dispatch = useDispatch()

   const [formData, setFormData] = useState(initialState)

   const onInputChange = (e) => { setFormData({ ...formData, [e.target.name]: e.target.value }) }

   const handleSubmit = (e) => {
      e.preventDefault();

      if (devicestate) {
         dispatch(putDevice(formData))

      } else {
         dispatch(postDevice(formData))
         setFormData(initialState)
      }
   }

   useEffect(() => setFormData(devicestate ? devicestate : initialState), [devicestate])


   console.log(formData)



   return (
      <Modal {...props} size="md" backdrop="static" aria-labelledby="contained-modal-title-vcenter" centered >

         <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
               {devicestate ? "Cihaz Düzenle" : "Cihaz Ekle"}
            </Modal.Title>
         </Modal.Header>

         <Modal.Body className="m-md-3">


            <Form onSubmit={handleSubmit}>


               <Row className='align-items-end'>

                  {/* <Form.Group controlId="deviceBrand" className="mb-3">
                     <Form.Label>Marka</Form.Label>
                     <Form.Control name="brand" type="text" maxLength="50" onChange={onInputChange} value={formData.brand} autoFocus />
                  </Form.Group> */}

                  <Form.Group controlId="deviceBrand" className="mb-3">
                     <Form.Label>Marka</Form.Label>
                     <Form.Select name="brand" onChange={onInputChange} value={formData.brand} autoFocus>
                        <option value="" hidden>Please choose...</option>
                        {brands?.map((item, i) => <option key={i} value={item}>{item}</option>)}
                     </Form.Select>
                  </Form.Group>

                  <Form.Group controlId="deviceModel" className="mb-3">
                     <Form.Label>Model</Form.Label>
                     <Form.Control name="model" type="text" maxLength="50" onChange={onInputChange} value={formData.model} />
                  </Form.Group>

                  {/* <Form.Group controlId="deviceStorage" className="mb-3">
                     <Form.Label>Hafıza</Form.Label>
                     <Form.Control name="storage" type="text" maxLength="50" onChange={onInputChange} value={formData.storage} />
                  </Form.Group> */}

                  <Form.Group className="mb-3">
                     <Form.Label>Hafıza</Form.Label>
                     <Form.Check inline label="32 GB" name="storage" type="radio" onChange={onInputChange} checked={formData.storage === "32 GB"} value="32 GB" id="deviceStorage-1" />
                     <Form.Check inline label="64 GB" name="storage" type="radio" onChange={onInputChange} checked={formData.storage === "64 GB"} value="64 GB" id="deviceStorage-2" />
                     <Form.Check inline label="128 GB" name="storage" type="radio" onChange={onInputChange} checked={formData.storage === "128 GB"} value="128 GB" id="deviceStorage-3" />
                     <Form.Check inline label="512 GB" name="storage" type="radio" onChange={onInputChange} checked={formData.storage === "512 GB"} value="512 GB" id="deviceStorage-4" />
                  </Form.Group>

                  {/* <Form.Group controlId="deviceColor" className="mb-3">
                     <Form.Label>Renk</Form.Label>
                     <Form.Control name="color" type="text" maxLength="50" onChange={onInputChange} value={formData.color} />
                  </Form.Group> */}


                  <Form.Group className="mb-3">
                     <Form.Label>Renk</Form.Label>
                     <Form.Check inline label="Siyah" name="color" type="radio" onChange={onInputChange} checked={formData.color === "Siyah"} value="Siyah" id="deviceColor-1" />
                     <Form.Check inline label="Beyaz" name="color" type="radio" onChange={onInputChange} checked={formData.color === "Beyaz"} value="Beyaz" id="deviceColor-2" />
                     <Form.Check inline label="Kırmızı" name="color" type="radio" onChange={onInputChange} checked={formData.color === "Kırmızı"} value="Kırmızı" id="deviceColor-3" />
                  </Form.Group>

                  <Form.Group controlId="devicePrice" className="mb-3">
                     <Form.Label>Fiyat</Form.Label>
                     <Form.Control name="price" type="text" maxLength="50" onChange={onInputChange} value={formData.price} />
                  </Form.Group>


               </Row>



               {/* -------------------------- Button -------------------------- */}



               <Col className="d-flex justify-content-end mt-2 gap-2">

                  <Button variant="outline-danger from-btn" type="button" onClick={() => dispatch(delDevice(devicestate.id), props.onHide())} style={{ display: !devicestate && "none" }}>Sil</Button>

                  <Button variant="outline-secondary from-btn" type="button" onClick={() => { setFormData(devicestate ? devicestate : initialState); props.onHide() }}>Vazgeç</Button>

                  <Button variant="outline-primary from-btn" type="submit" onClick={() => setTimeout(() => { props.onHide() }, 500)}>Kaydet</Button>

               </Col>


            </Form>

         </Modal.Body>

      </Modal >
   )
}

