
import React, { useState, useEffect } from 'react'
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BsPlusLg, BsPencilSquare } from 'react-icons/bs'
import { Grid, _ } from "gridjs-react";
import CompanyForm from './CompanyForm';
import { getDevice } from '../../store/actions';




export default function CompanyDevice() {


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
      { id: "price", name: "Fiyat", width: "100%", formatter: (cell) => _("₺ " + cell.toLocaleString()) },
      { id: "id", name: "id", hidden: true },
      {
         id: "edit", name: "", sort: false,
         formatter: (cell, row) => _(<Button variant="link" className='d-flex p-1 fs-4 text-secondary ' onClick={() => {
            // console.log(row);
            setDetailShow(true);
            setDeviceState({ brand: row.cells[0].data, model: row.cells[1].data, storage: row.cells[2].data, color: row.cells[3].data, price: row.cells[4].data, id: row.cells[5].data })
         }}><BsPencilSquare /></Button>)
      },
   ];



   // console.log(deviceState);


   return (

      <>
         <div className='d-flex align-items-center justify-content-between mb-3'>
            <Button variant="success" onClick={() => { setDetailShow(true); setDeviceState(null) }}><BsPlusLg /></Button>
            <span className="display-5 text-muted">Telefon Listesi</span>
         </div>

         <Grid
            pagination={{ limit: 10, summary: false }}
            search={true}
            sort={true}
            // resizable={true}
            columns={columns}
            data={device}
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


         <CompanyForm show={detailShow} onHide={() => setDetailShow(false)} devicestate={deviceState} />

         {loading && <div className="loading"><div className="spinner"></div></div>}

      </>

   )
}