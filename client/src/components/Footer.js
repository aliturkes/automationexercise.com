import React from 'react'
import { Container } from 'react-bootstrap'
import { FaTwitter, FaYoutube, FaEnvelope } from 'react-icons/fa'


export default function Footer() {

   const today = new Date();
   const year = today.getFullYear();

   return (
      <Container>

         <footer className="d-flex flex-wrap justify-content-between">

            <div className=" m-2">
               <span className="text-muted">&copy; {year} asil gsm</span>
            </div>

            <div className="d-flex gap-3 m-2">

               <a href="#"><FaTwitter className='fs-4' /></a>

               <a href="#"><FaYoutube className='fs-3' /></a>

               <a href="#"><FaEnvelope className='fs-4' /></a>

            </div>

         </footer>

      </Container>
   )
}