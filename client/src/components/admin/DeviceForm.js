import React, { useEffect, useState } from 'react'
import { Row, Col, Form, Button, Modal, ButtonGroup, ToggleButton } from "react-bootstrap";
import { useDispatch } from 'react-redux'
import { putDevices, postDevices, delDevices } from '../../store/actions';
import { brands, storage, color } from "../helpers/data"



const initialState = { company: "Admin", brand: "", model: "", storage: "", color: "", price: "", imei: "", soldPrice: "", buyPrice: "", soldWho: "", status: "", id: null, userId: 1 }


export default function DeviceForm(props) {


   const { devicestate } = props

   const dispatch = useDispatch()

   const [formData, setFormData] = useState(initialState)

   useEffect(() => setFormData(devicestate ? { ...devicestate } : initialState), [devicestate])

   const onInputChange = (e) => { setFormData({ ...formData, [e.target.name]: e.target.value }) }

   const handleSubmit = (e) => {
      e.preventDefault();
      delete formData.company

      if (devicestate) {
         dispatch(putDevices(formData))
      } else {
         dispatch(postDevices(formData))
         setFormData(initialState)
      }
   }


   console.log(devicestate)


   return (
      <Modal {...props} size="md" backdrop="static" aria-labelledby="contained-modal-title-vcenter" centered >

         <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
               {devicestate ? "Cihaz Düzenle" : "Cihaz Ekle"}
            </Modal.Title>
         </Modal.Header>
         <Form onSubmit={handleSubmit}>
            <Modal.Body className="m-3">




               <Row className='align-items-end'>

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


                  <Form.Label>Hafıza</Form.Label>
                  <ButtonGroup className="mb-3">
                     {storage.map((item, i) => (
                        <ToggleButton key={i} name="storage" type="radio" id={`storage-${i}`} variant="outline-secondary"
                           onChange={onInputChange} checked={item === formData.storage} value={item} >
                           {item}
                        </ToggleButton>
                     ))}
                  </ButtonGroup>


                  <Form.Label>Renk</Form.Label>
                  <ButtonGroup className="mb-3">
                     {color.map((item, i) => (
                        <ToggleButton key={i} name="color" type="radio" id={`color-${i}`} variant="outline-secondary"
                           onChange={onInputChange} checked={item === formData.color} value={item} >
                           {item}
                        </ToggleButton>
                     ))}
                  </ButtonGroup>


                  <Form.Group controlId="deviceImei" className="mb-3">
                     <Form.Label>Imei</Form.Label>
                     <Form.Control name="imei" type="string" maxLength="50" onChange={onInputChange} value={formData.imei} />
                  </Form.Group>


                  <Form.Group as={Col} xs="6" controlId="devicePrice" className="mb-3">
                     <Form.Label>Fiyat</Form.Label>
                     <Form.Control name="price" type="number" maxLength="50" onChange={onInputChange} value={formData.price} />
                  </Form.Group>


                  <Form.Group as={Col} xs="6" controlId="deviceSoldPrice" className="mb-3">
                     <Form.Label>Alış Fiyatı</Form.Label>
                     <Form.Control name="soldPrice" type="number" maxLength="50" onChange={onInputChange} value={formData.soldPrice} />
                  </Form.Group>


                  <Form.Group as={Col} xs="6" controlId="deviceBuyPrice" className="mb-3">
                     <Form.Label>Satış Fiyatı</Form.Label>
                     <Form.Control name="buyPrice" type="number" maxLength="50" onChange={onInputChange} value={formData.buyPrice} />
                  </Form.Group>


                  <Form.Group as={Col} xs="6" controlId="deviceSoldWho" className="mb-3">
                     <Form.Label>Kime Satıldı?</Form.Label>
                     <Form.Control name="soldWho" type="type" maxLength="50" onChange={onInputChange} value={formData.soldWho} />
                  </Form.Group>


                  <Form.Group controlId="deviceStatus" className="mb-3">
                     <Form.Check name="status" type="switch" id="custom-switch" label="Satıldı" />
                  </Form.Group>


               </Row>



               {/* -------------------------- Button -------------------------- */}



            </Modal.Body>

            <Modal.Footer>

               <Button variant="outline-danger from-btn" type="button" onClick={() => dispatch(delDevices(devicestate.id), props.onHide())} style={{ display: !devicestate && "none" }}>Sil</Button>

               <Button variant="outline-secondary from-btn" type="button" onClick={() => { setFormData(devicestate ? devicestate : initialState); props.onHide() }}>Vazgeç</Button>

               <Button variant="outline-primary from-btn" type="submit" onClick={() => !devicestate && props.onHide()}>Kaydet</Button>

            </Modal.Footer>

         </Form>

      </Modal >
   )
}