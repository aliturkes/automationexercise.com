import React, { useEffect, useState } from 'react'
import { Row, Col, Form, Button, Modal, ButtonGroup, ToggleButton } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux'
import { putDevice, postDevice, delDevice, putDevices, postDevices, delDevices } from '../../store/actions';
import { brands, storage, color, status } from "../helpers/data"


const initialState = { brand: "", model: "", storage: "", color: "", price: "", imei: "", soldPrice: "", buyPrice: "", soldWho: "", status: "open", id: null }


export default function DeviceForm(props) {


   const { devicestate, admin, company } = props

   const options = useSelector(state => state?.authReducer?.token?.user?.options)

   const token = useSelector(state => state?.authReducer?.token)

   const dispatch = useDispatch()

   const [formData, setFormData] = useState(initialState)

   useEffect(() => setFormData(devicestate ? devicestate : initialState), [devicestate])

   const onInputChange = (e) => { setFormData({ ...formData, [e.target.name]: e.target.value }) }

   const handleSubmit = (e) => {
      e.preventDefault();

      if (devicestate) {
         admin
            ? dispatch(putDevices(token, formData))
            : dispatch(putDevice(token, formData))
      } else {
         admin
            ? dispatch(postDevices(token, { ...formData, userId: 1 }))
            : dispatch(postDevice(token, formData))
         setFormData(initialState)
      }
   }


   // console.log(options)
   // console.log("props", devicestate)
   // console.log(admin);
   // console.log("formData", formData)




   return (
      <Modal {...props} size="md" backdrop="static" aria-labelledby="contained-modal-title-vcenter" centered >

         <Form onSubmit={handleSubmit}>

            <Modal.Header closeButton>
               <Modal.Title id="contained-modal-title-vcenter" style={{ paddingLeft: 0 }}>
                  {devicestate ? "Cihaz Düzenle" : "Cihaz Ekle"}
               </Modal.Title>
            </Modal.Header>


            <Modal.Body className="m-md-3">

               <Row className='align-items-end'>

                  {admin && <Form.Group controlId="deviceCompany" className="mb-3">
                     <Form.Label>Firma</Form.Label>
                     <Form.Control name="company" type="text" maxLength="50" value={company} disabled />
                  </Form.Group>}

                  <Form.Group controlId="deviceBrand" className="mb-3">
                     <Form.Label>Marka</Form.Label>
                     <Form.Select name="brand" onChange={onInputChange} value={formData.brand} autoFocus>
                        <option value="" hidden>Lütfen seçiniz...</option>
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
                        <ToggleButton key={i} name="storage" type="radio" id={`storage-${i}`} variant="outline-primary"
                           onChange={onInputChange} checked={item === formData.storage} value={item} >
                           {item}
                        </ToggleButton>
                     ))}
                  </ButtonGroup>

                  <Form.Label>Renk</Form.Label>
                  <ButtonGroup className="mb-3">
                     {color.map((item, i) => (
                        <ToggleButton key={i} name="color" type="radio" id={`color-${i}`} variant="outline-primary"
                           onChange={onInputChange} checked={item === formData.color} value={item} >
                           {item}
                        </ToggleButton>
                     ))}
                  </ButtonGroup>

                  <Form.Group as={Col} sm="6" controlId="devicePrice" className="mb-3">
                     <Form.Label>Fiyat</Form.Label>
                     <Form.Control name="price" type="number" maxLength="50" onChange={onInputChange} value={formData.price} />
                  </Form.Group>


                  <Form.Group as={Col} sm="6" className="mb-3">
                     <Form.Label>Cihaz Durumu</Form.Label>
                     <ButtonGroup >
                        {status.map((item, i) => (
                           <ToggleButton key={i} name="status" type="radio" id={`status-${i}`} variant={`outline-${item.class}`}
                              onChange={onInputChange} checked={item.value === formData.status} value={item.value} >
                              {item.name}
                           </ToggleButton>
                        ))}
                     </ButtonGroup>
                  </Form.Group>



                  {options?.isImei && <Form.Group controlId="deviceImei" className="mb-3">
                     <Form.Label>Imei</Form.Label>
                     <Form.Control name="imei" type="string" maxLength="50" onChange={onInputChange} value={formData.imei} />
                  </Form.Group>}

                  {options?.isBuyPrice && <Form.Group as={Col} xs="6" controlId="deviceBuyPrice" className="mb-3">
                     <Form.Label>Alış Fiyatı</Form.Label>
                     <Form.Control name="buyPrice" type="number" maxLength="50" onChange={onInputChange} value={formData.buyPrice} />
                  </Form.Group>}

                  {options?.isSoldPrice && <Form.Group as={Col} xs="6" controlId="deviceSoldPrice" className="mb-3">
                     <Form.Label>Satış Fiyatı</Form.Label>
                     <Form.Control name="soldPrice" type="number" maxLength="50" onChange={onInputChange} value={formData.soldPrice} />
                  </Form.Group>}

                  {(options?.isSoldWho && formData.status === "sold") && <Form.Group as={Col} xs="6" controlId="deviceSoldWho" className="mb-3">
                     <Form.Label>Kime Satıldı?</Form.Label>
                     <Form.Control name="soldWho" type="type" maxLength="50" onChange={onInputChange} value={formData.soldWho} />
                  </Form.Group>}

               </Row>

            </Modal.Body>


            <Modal.Footer>

               <Button variant="outline-danger from-btn" type="button"
                  onClick={() => dispatch(admin ? delDevices(token, devicestate.id) : delDevice(token, devicestate.id), props.onHide())} style={{ display: !devicestate && "none" }}>Sil</Button>

               <Button variant="outline-secondary from-btn" type="button"
                  onClick={() => { setFormData(devicestate ? devicestate : initialState); props.onHide() }}>Vazgeç</Button>

               <Button variant="outline-primary from-btn" type="submit"
                  onClick={() => setTimeout(() => { props.onHide() }, 500)}>Kaydet</Button>

            </Modal.Footer>

         </Form>
      </Modal >
   )
}