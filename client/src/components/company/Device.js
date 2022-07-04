
import React, { useState, useEffect } from 'react'
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BsPlusLg, BsPencilSquare, BsFillCircleFill } from 'react-icons/bs'
import { Grid, _ } from "gridjs-react";
import DeviceForm from './DeviceForm';
import { getDevice } from '../../store/actions';
import Spinner from "../Spinner";
import { className, language } from '../gridjsConfig';


export default function Device() {


   const navigate = useNavigate()

   const dispatch = useDispatch()

   const store = useSelector(state => state)

   const { device, error, loading } = store.companyReducer

   const { isAuthenticated, token } = store.authReducer

   useEffect(() => { isAuthenticated && dispatch(getDevice(token)) }, [])

   const [detailShow, setDetailShow] = useState(false);

   const [deviceState, setDeviceState] = useState(null);


   const columns = [
      { id: "brand", name: "Marka", width: "100%" },
      { id: "model", name: "Model", width: "100%" },
      { id: "storage", name: "Hafıza", width: "100%" },
      { id: "color", name: "Renk", width: "100%" },
      { id: "price", name: "Fiyat", width: "100%", formatter: (cell) => _("₺" + cell.toLocaleString()) },
      { id: "id", name: "id", hidden: true },
      { id: "buyPrice", name: "buyPrice", hidden: true },
      { id: "imei", name: "imei", hidden: true },
      { id: "soldPrice", name: "soldPrice", hidden: true },
      { id: "soldWho", name: "soldWho", hidden: true },
      {
         id: "status", name: "", formatter: (cell) => _(<BsFillCircleFill
            title={cell === "open" ? "Satışta" : cell === "sold" ? "Satıldı" : "Reserve"}
            className={cell === "open" ? "text-success" : cell === "sold" ? "text-danger" : "text-warning"} />)
      },
      {
         id: "edit", name: "", sort: false,
         formatter: (cell, row) => _(<Button variant="link" className='d-flex p-1 fs-4 text-secondary'
            onClick={() => { // console.log(row)
               setDetailShow(true)
               setDeviceState({
                  brand: row.cells[0].data,
                  model: row.cells[1].data,
                  storage: row.cells[2].data,
                  color: row.cells[3].data,
                  price: row.cells[4].data,
                  id: row.cells[5].data,
                  buyPrice: row?.cells[6]?.data,
                  imei: row?.cells[7]?.data,
                  soldPrice: row?.cells[8]?.data,
                  soldWho: row?.cells[9]?.data,
                  status: row?.cells[10]?.data,
               })
            }}><BsPencilSquare /></Button>)
      }
   ]


   // console.log(deviceState);


   return (

      <>
         <div className='d-flex align-items-center justify-content-between mb-3'>
            <span className="display-5 text-muted">Telefon Listesi</span>
            <Button variant="success" onClick={() => { setDetailShow(true); setDeviceState(null) }}><BsPlusLg /></Button>
         </div>

         <Grid pagination={{ limit: 10, summary: false }} search={true} sort={true} fullWidth={true}
            columns={columns} data={device} className={className} language={language} />


         <DeviceForm show={detailShow} onHide={() => setDetailShow(false)} devicestate={deviceState} />

         {loading && <Spinner />}

      </>

   )
}