
import React, { useState, useEffect } from 'react'
import { Table, Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BsPlusLg, BsPencilSquare } from 'react-icons/bs'
import { Grid, _ } from "gridjs-react";
// import DealerForm from './DealerForm';

export default function DeviceList() {


   const navigate = useNavigate()

   // const dispatch = useDispatch()

   // const store = useSelector(state => state.institutionReducer)

   // const token_id = JSON.parse(localStorage.getItem('token')).id;

   // useEffect(() => { dispatch(getRequest(token_id)) }, [token_id])

   // useEffect(() => { token_id ? dispatch(getRequest(token_id)) : navigate("/") }, [token_id])

   // const { relationships, error, loading } = store

   const [detailShow, setDetailShow] = useState(false);

   const [device, setDevice] = useState(null);

   const data = [
      { dealer: "Elma", brand: 'Apple', model: 'Iphone 13 Pro', storage: '256GB', color: 'Siyah', price: '25.000₺' },
      { dealer: "Armut", brand: 'Huawei', model: 'P20 Lite', storage: '128GB', color: 'Siyah', price: '5.000₺' },
      { dealer: "Çilek", brand: 'Samsung', model: 'Galaxy M12', storage: '128GB', color: 'Beyaz', price: '10.000₺' },
      { dealer: "Armut", brand: 'Oppo', model: 'A74', storage: '128GB', color: 'Beyaz', price: '5.000₺' },
      { dealer: "Armut", brand: 'Samsung', model: 'Galaxy S21', storage: '128GB', color: 'Beyaz', price: '5.000₺' },
      { dealer: "Armut", brand: 'Apple', model: 'Iphone 11', storage: '256GB', color: 'Siyah', price: '15.000₺' },
      { dealer: "Armut", brand: 'Huawei', model: 'Nova 9', storage: '128GB', color: 'Siyah', price: '5.000₺' },
      { dealer: "Armut", brand: 'Apple', model: 'Iphone SE', storage: '512GB', color: 'Siyah', price: '15.000₺' },
      { dealer: "Armut", brand: 'Samsung', model: 'Galaxy A23', storage: '128GB', color: 'Beyaz', price: '15.000₺' },
      { dealer: "Armut", brand: 'Xiaomi', model: 'Redmi 9c', storage: '128GB', color: 'Siyah', price: '5.000₺' },
      { dealer: "Armut", brand: 'Apple', model: 'Iphone 12', storage: '128GB', color: 'Beyaz', price: '20.000₺' },
      { dealer: "Armut", brand: 'Apple', model: 'Iphone 11', storage: '256GB', color: 'Siyah', price: '15.000₺' },
      { dealer: "Armut", brand: 'Samsung', model: 'Galaxy S20', storage: '256GB', color: 'Beyaz', price: '25.000₺' },
      { dealer: "Armut", brand: 'Huawei', model: 'Nova 9', storage: '128GB', color: 'Siyah', price: '5.000₺' },
      { dealer: "Armut", brand: 'Samsung', model: 'Galaxy S21', storage: '128GB', color: 'Beyaz', price: '5.000₺' },
      { dealer: "Armut", brand: 'Samsung', model: 'Galaxy A23', storage: '128GB', color: 'Beyaz', price: '15.000₺' },
      { dealer: "Armut", brand: 'Apple', model: 'Iphone SE', storage: '512GB', color: 'Siyah', price: '15.000₺' },
      { dealer: "Armut", brand: 'Samsung', model: 'Galaxy M12', storage: '128GB', color: 'Beyaz', price: '10.000₺' },
      { dealer: "Armut", brand: 'Huawei', model: 'P20 Lite', storage: '128GB', color: 'Siyah', price: '5.000₺' },
      { dealer: "Armut", brand: 'Huawei', model: 'Nova 9', storage: '128GB', color: 'Siyah', price: '5.000₺' },
      { dealer: "Armut", brand: 'Samsung', model: 'Galaxy S21', storage: '128GB', color: 'Beyaz', price: '5.000₺' },
      { dealer: "Armut", brand: 'Huawei', model: 'Nova 9', storage: '128GB', color: 'Siyah', price: '5.000₺' },
      { dealer: "Armut", brand: 'Samsung', model: 'Galaxy S21', storage: '128GB', color: 'Beyaz', price: '5.000₺' },
      { dealer: "Armut", brand: 'Apple', model: 'Iphone SE', storage: '512GB', color: 'Siyah', price: '15.000₺' },
      { dealer: "Armut", brand: 'Samsung', model: 'Galaxy A23', storage: '128GB', color: 'Beyaz', price: '15.000₺' },
      { dealer: "Armut", brand: 'Apple', model: 'Iphone 12', storage: '128GB', color: 'Beyaz', price: '20.000₺' },

   ]




   const columns = [
      { id: "dealer", name: "Firma", width: "100%" },
      { id: "brand", name: "Marka", width: "100%" },
      { id: "model", name: "Model", width: "100%" },
      { id: "storage", name: "Hafıza", width: "100%" },
      { id: "color", name: "Renk", width: "100%" },
      { id: "price", name: "Fiyat", width: "100%" },
      { id: "edit", name: _(<Button variant="success" size='sm' onClick={() => { setDetailShow(true); setDevice(null) }}><BsPlusLg /></Button>), sort: false, },
   ];

   data.map(item => item.edit = _(<Button variant="link" className='d-flex p-1 fs-4 text-secondary ' onClick={() => { setDetailShow(true); setDevice(item) }}><BsPencilSquare /></Button>))






   return (

      <>
         <h1 className="display-5 text-muted mb-3 text-end">Bayi Telefon Listesi</h1>


         <Grid
            pagination={{ limit: 10 }}
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


         {/* <DealerForm show={detailShow} onHide={() => setDetailShow(false)} device={device} /> */}

         {/* {loading && <div className="loading"><div className="spinner"></div></div>} */}


      </>
   )
}

