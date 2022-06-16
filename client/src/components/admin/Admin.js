import React from 'react'
import { Container } from 'react-bootstrap'
import Footer from '../Footer'
import AdminHeader from './AdminHeader'
import DealerList from './DealerList'
import "gridjs/dist/theme/mermaid.css";
import { Route, Routes } from 'react-router-dom'
import DeviceList from './DeviceList'

export default function Admin() {

   return (
      <>
         <AdminHeader />
         <Container className="card p-3 p-md-4 p-lg-5 my-2">

         <Routes>
					<Route path="/" element={<DeviceList />} />
					<Route path="/dealers" element={<DealerList/>} />
				</Routes>

            

         </Container>
         <Footer />
      </>
   )
}
