import React from 'react'
import { Container } from 'react-bootstrap'


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

               <a href="#" target="_blank" rel="noreferrer">
                  <svg width="24" height="24"><use xlinkHref="/img/icons.svg#twitter" /></svg>
               </a>

               <a href="#" target="_blank" rel="noreferrer">
                  <svg width="26" height="26"><use xlinkHref="/img/icons.svg#youtube" /></svg>
               </a>

               <a href="#" target="_blank" rel="noreferrer">
                  <svg width="24" height="24"><use xlinkHref="/img/icons.svg#envelope" /></svg>
               </a>

            </div>
         </footer>

      </Container>
   )
}