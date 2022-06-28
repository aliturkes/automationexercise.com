import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Button } from "react-bootstrap";
import { BsPlusLg, BsPencilSquare } from 'react-icons/bs'
import { Grid, _ } from 'gridjs-react';
import { getUsers } from '../../store/actions';





export default function CompanyList() {


   const dispatch = useDispatch()

   const store = useSelector(state => state)

   const { users, error, loading } = store.adminReducer

   const { isAuthenticated, token } = store.authReducer

   useEffect(() => { isAuthenticated && dispatch(getUsers(token)) }, [])

   const [detailShow, setDetailShow] = useState(false);

   const [deviceState, setDeviceState] = useState(null);

   const data = [...users]

   // console.log(users);

   const columns = [
      { id: "company", name: 'Firma', width: "100%" },
      { id: "name", name: 'Adı', width: "100%" },
      { id: 'email', name: 'Email', width: "100%" },
      { id: 'phone', name: 'Telefon No', width: "100%", formatter: (cell) => _(<a href={`tel:${cell}`} className="phone">{cell}</a>) },
      { id: "id", name: "id", hidden: true },
      {
         id: "edit", name: "", sort: false,
         formatter: (cell, row) => _(<Button variant="link" className='d-flex p-1 fs-4 text-secondary ' onClick={() => {
            console.log(row);
            setDetailShow(true);
            setDeviceState({ id: row.cells[4].data, company: row.cells[0].data, name: row.cells[1].data, email: row.cells[2].data, phone: row.cells[3].data })
         }}><BsPencilSquare /></Button>)
      },
   ]



   // console.log(deviceState);

   return (

      <>

         <h1 className="display-5 text-muted mb-3 text-end">Bayi Listesi</h1>

         {/* <div className='d-flex align-items-center justify-content-between mb-3'>
            <Button variant="success" onClick={() => { setDetailShow(true); setDeviceState(null) }}><BsPlusLg /></Button>
            <span className="display-5 text-muted">Bayi Listesi</span>
         </div> */}

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

         {loading && <div className="loading"><div className="spinner"></div></div>}

      </>
   )
}
