import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import "gridjs/dist/theme/mermaid.css";
import Footer from '../Footer'
import Device from './Device'
import Header from './Header'



export default function Company() {

   const dispatch = useDispatch()

   const navigate = useNavigate()

   const isAuthenticated = useSelector(state => state?.authReducer?.isAuthenticated)

   useEffect(() => { !isAuthenticated && navigate("/") }, [isAuthenticated])


   return (
      <div>
         <Header />
         <Container className="card p-3 p-md-4 p-lg-5 my-2">

            <Device />

         </Container>
         <Footer />
      </div>
   )
}
