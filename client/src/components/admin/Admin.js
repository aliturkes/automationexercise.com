import React,{useEffect} from 'react'
import { Container } from 'react-bootstrap'
import Footer from '../Footer'
import AdminHeader from './AdminHeader'
import CompanyList from './CompanyList'
import "gridjs/dist/theme/mermaid.css";
import { Route, Routes } from 'react-router-dom'
import DeviceList from './DeviceList'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Admin() {

   const navigate = useNavigate()

   const store = useSelector(state => state.authReducer)

   useEffect(() => { !store.isAuthenticated && navigate("/") }, [store])

   return (
      <>
         <AdminHeader />
         <Container className="card p-3 p-md-4 p-lg-5 my-2">

         <Routes>
					<Route path="/" element={<DeviceList />} />
					<Route path="/company" element={<CompanyList/>} />
				</Routes>

            

         </Container>
         <Footer />
      </>
   )
}
