
import React, { useState, useEffect } from 'react'
import { Table, Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BsPlusLg, BsPencilSquare } from 'react-icons/bs'
import { Grid, _ } from "gridjs-react";
// import DealerForm from './DealerForm';
import { getDevices } from '../../store/actions';




export default function DeviceList() {


   const navigate = useNavigate()

   const dispatch = useDispatch()

   const store = useSelector(state => state.adminReducer)

   const { devices, error, loading } = store

   // const token_id = JSON.parse(localStorage.getItem('token')).id;

   useEffect(() => { dispatch(getDevices()) }, [])

   // useEffect(() => { token_id ? dispatch(getDevices()) : navigate("/") }, [token_id])

   const [detailShow, setDetailShow] = useState(false);

   const [deviceState, setDeviceState] = useState(null);

   const data = [...devices]

   data.map(item => item.company = item.user.company)


   const columns = [
      { id: "company", name: "Firma", width: "100%" },
      { id: "brand", name: "Marka", width: "100%" },
      { id: "model", name: "Model", width: "100%" },
      { id: "storage", name: "Hafıza", width: "100%" },
      { id: "color", name: "Renk", width: "100%" },
      { id: "price", name: "Fiyat", width: "100%" },
      { id: "id", name: "id", hidden: true },
      {
         id: "edit", name: _(<Button variant="success" size='sm' onClick={() => { setDetailShow(true); setDeviceState(null) }}><BsPlusLg /></Button>), sort: false,
         formatter: (cell, row) => _(<Button variant="link" className='d-flex p-1 fs-4 text-secondary ' onClick={() => {
            // console.log(row);
            setDetailShow(true);
            setDeviceState({ id: row.cells[5].data, company: row.cells[0].data, brand: row.cells[1].data, model: row.cells[2].data, storage: row.cells[3].data, color: row.cells[4].data, price: row.cells[5].data })
         }}><BsPencilSquare /></Button>)
      },
   ];

   console.log(devices);

   console.log(deviceState);

   return (

      <>
         <h1 className="display-5 text-muted mb-3 text-end">Bayi Telefon Listesi</h1>

         <Grid
            pagination={{ limit: 10, summary: false }}
            search={true}
            sort={true}
            // resizable={true}
            columns={columns}
            data={data}
            fullWidth={true}
            language={
               {
                  'search': {
                     'placeholder': 'Arama...'
                  },
                  'pagination': {
                     'previous': '<',
                     'next': '>',
                  },
                  "loading": 'Bekleniyor...',
                  "noRecordsFound": 'Gösterilecek kayıt yok',
                  "error": 'Veriler alınırken bir hata oluştu',
               }
            }
            className={{
               paginationButtonNext: 'next-button',
               paginationButtonPrev: 'prev-button'
            }}
         />


         {/* <DealerForm show={detailShow} onHide={() => setDetailShow(false)} deviceState={deviceState} /> */}

         {loading && <div className="loading"><div className="spinner"></div></div>}


      </>
   )
}

