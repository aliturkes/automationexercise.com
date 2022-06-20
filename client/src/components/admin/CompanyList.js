import React, { useState, useEffect } from 'react'
import { Container, Button, Dropdown, Form } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BsPlusLg, BsPencilSquare } from 'react-icons/bs'
import { Grid, _ } from 'gridjs-react';
import { getUsers } from '../../store/actions';





export default function CompanyList() {


   const dispatch = useDispatch()

   const store = useSelector(state => state.adminReducer)

   const { users, error, loading } = store

   // console.log(users);

   useEffect(() => { dispatch(getUsers()) }, [])

   const [detailShow, setDetailShow] = useState(false);

   const [deviceState, setDeviceState] = useState(null);

   const data = [...users]

   const columns = [
      { id: "company", name: 'Firma', width: "100%" },
      { id: "name", name: 'Adı', width: "100%" },
      { id: 'email', name: 'Email', width: "100%" },
      { id: 'phone', name: 'Telefon No', width: "100%" },
      { id: "id", name: "id", hidden: true },
      {
         id: "edit", name: _(<Button variant="success" size='sm' onClick={() => { setDetailShow(true); setDeviceState(null) }}><BsPlusLg /></Button>), sort: false,
         formatter: (cell, row) => _(<Button variant="link" className='d-flex p-1 fs-4 text-secondary ' onClick={() => {
            console.log(row);
            setDetailShow(true);
            setDeviceState({ id: row.cells[4].data, company: row.cells[0].data, name: row.cells[1].data, email: row.cells[2].data, phone: row.cells[3].data })
         }}><BsPencilSquare /></Button>)
      },
   ]


   // data.map(item => item.edit = _(<Button variant="link" className='d-flex p-1 fs-4 text-secondary ' onClick={() => { /*setDetailShow(true); setRequest(item) */ }}><BsPencilSquare /></Button>))

   // console.log(deviceState);

   return (

      <>
         <h1 className="display-5 text-muted mb-3 text-end">Bayi Listesi</h1>

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
