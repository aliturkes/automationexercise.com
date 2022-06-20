import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import Footer from '../Footer'
import DealerDevice from './CompanyDevice'
import DealerHeader from './CompanyHeader'
import "gridjs/dist/theme/mermaid.css";
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


export default function Company() {


   const navigate = useNavigate()

   const store = useSelector(state => state.authReducer)

   useEffect(() => { !store.isAuthenticated && navigate("/") }, [store])

   console.log(store);
   return (
      <div>
         <DealerHeader />
         <Container className="card p-3 p-md-4 p-lg-5 my-2">
            <h1 className="display-5 text-muted mb-3 text-end">Telefon Listesi</h1>

            <DealerDevice />

         </Container>
         <Footer />
      </div>
   )
}
