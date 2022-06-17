
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

   const store = useSelector(state => state.companyReducer)

   const { device, error, loading } = store

   useEffect(() => { dispatch(getDevice()) }, [])

   // useEffect(() => { token_id ? dispatch(getRequest(token_id)) : navigate("/") }, [token_id])


   const [detailShow, setDetailShow] = useState(false);

   const [deviceState, setDeviceState] = useState(null);


   const columns = [
      { id: "brand", name: "Marka", width: "100%" },
      { id: "model", name: "Model", width: "100%" },
      { id: "storage", name: "Hafıza", width: "100%" },
      { id: "color", name: "Renk", width: "100%" },
      { id: "price", name: "Fiyat", width: "100%", formatter: (cell) => _(cell + "₺") },
      { id: "id", name: "id", hidden: true },
      {
         id: "edit", name: _(<Button variant="success" size='sm' onClick={() => { setDetailShow(true); setDeviceState(null) }}><BsPlusLg /></Button>), sort: false,
         formatter: (cell, row) => _(<Button variant="link" className='d-flex p-1 fs-4 text-secondary ' onClick={() => {
            console.log(row);
            setDetailShow(true);
            setDeviceState({ id: row.cells[5].data, brand: row.cells[0].data, model: row.cells[1].data, storage: row.cells[2].data, color: row.cells[3].data, price: row.cells[4].data })
         }}><BsPencilSquare /></Button>)
      },
   ];

   // data.map(item => item.edit = _()

   console.log(deviceState);


   return (

      <>

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


         <CompanyForm show={detailShow} onHide={() => setDetailShow(false)} deviceState={deviceState} />

         {/* {loading && <div className="loading"><div className="spinner"></div></div>} */}

      </>

   )
}