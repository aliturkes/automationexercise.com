import React from 'react'
import { Container } from 'react-bootstrap'


export default function Footer() {

   const today = new Date();
   const year = today.getFullYear();

   return (
      <Container>

         <footer className="d-flex flex-wrap justify-content-center">

            <div className="me-sm-auto m-2">
               <span className="text-muted">&copy; {year} Company</span>
            </div>

            <div className="align-items-center d-flex gap-3 m-2">

               <a href="#" target="_blank" rel="noreferrer">
                  <svg width="24" height="24"><use xlinkHref="/img/icons.svg#twitter" /></svg>
               </a>

               <a href="#" target="_blank" rel="noreferrer">
                  <svg width="26" height="26"><use xlinkHref="/img/icons.svg#youtube" /></svg>
               </a>

               <a href="#" target="_blank" rel="noreferrer">
                  <svg width="24" height="24"><use xlinkHref="/img/icons.svg#envelope" /></svg>
               </a>

               <a href="#" target="_blank" rel="noreferrer">
                  <svg width="22" height="22"><use xlinkHref="/img/icons.svg#linkedin" /></svg>
               </a>

            </div>
         </footer>

      </Container>
   )
}