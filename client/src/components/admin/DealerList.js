import React, { useState } from 'react'
import { Container, Button, Dropdown, Form } from "react-bootstrap";
import { BsPlusLg, BsPencilSquare } from 'react-icons/bs'

import { Grid, _ } from 'gridjs-react';



const data = [
   { dealer:"Armut", first: 'John', last: 'Murphy', email: 'john@example.com', phoneNumber: '(353) 01 222 3333', },
   { dealer:"Elma", first: 'Mark', last: 'Wiens', email: 'mark@gmail.com', phoneNumber: '(01) 22 888 4444' },
   { dealer:"Öztürkler", first: 'Johnny', last: 'Murphy', email: 'Johnny@example.com', phoneNumber: '(353) 01 222 3333' },
   { dealer:"Kamil İletişim", first: 'Walker', last: 'Wiens', email: 'Walker@gmail.com', phoneNumber: '(01) 22 888 4444' },
   { dealer:"Serhat İletişim", first: 'Anthony', last: 'Murphy', email: 'Anthony@example.com', phoneNumber: '(353) 01 222 3333' },
   { dealer:"Armut", first: 'Hopkins', last: 'Wiens', email: 'Hopkins@gmail.com', phoneNumber: '(01) 22 888 4444' },
   { dealer:"Armut", first: 'Mary', last: 'Murphy', email: 'Mary@example.com', phoneNumber: '(353) 01 222 3333' },
   { dealer:"Can Telefon", first: 'Martin', last: 'Wiens', email: 'Martin@gmail.com', phoneNumber: '(01) 22 888 4444' },
   { dealer:"Armut", first: 'Anthony', last: 'Murphy', email: 'Anthony@example.com', phoneNumber: '(353) 01 222 3333' },
   { dealer:"Elma Firması", first: 'Tommy', last: 'Wiens', email: 'Tommy@gmail.com', phoneNumber: '(01) 22 888 4444' },
   { dealer:"Armut", first: 'Tim', last: 'Murphy', email: 'Tim@example.com', phoneNumber: '(353) 01 222 3333' },
   { dealer:"Armut", first: 'Thomas', last: 'Wiens', email: 'Thomas@gmail.com', phoneNumber: '(01) 22 888 4444' },
   { dealer:"Çilek İletişim", first: 'John', last: 'Murphy', email: 'john@example.com', phoneNumber: '(353) 01 222 3333' },
   { dealer:"Armutlar", first: 'Mark', last: 'Wiens', email: 'mark@gmail.com', phoneNumber: '(01) 22 888 4444' },
   { dealer:"Armut", first: 'Johnny', last: 'Murphy', email: 'Johnny@example.com', phoneNumber: '(353) 01 222 3333' },
   { dealer:"Armut", first: 'Walker', last: 'Wiens', email: 'Walker@gmail.com', phoneNumber: '(01) 22 888 4444' },
   { dealer:"Armut", first: 'Anthony', last: 'Murphy', email: 'Anthony@example.com', phoneNumber: '(353) 01 222 3333' },
   { dealer:"Armut", first: 'Hopkins', last: 'Wiens', email: 'Hopkins@gmail.com', phoneNumber: '(01) 22 888 4444' },
   { dealer:"Armut", first: 'Mary', last: 'Murphy', email: 'Mary@example.com', phoneNumber: '(353) 01 222 3333' },
   { dealer:"Armut", first: 'Martin', last: 'Wiens', email: 'Martin@gmail.com', phoneNumber: '(01) 22 888 4444' },
   { dealer:"Armut", first: 'Anthony', last: 'Murphy', email: 'Anthony@example.com', phoneNumber: '(353) 01 222 3333' },
   { dealer:"Armut", first: 'Tommy', last: 'Wiens', email: 'Tommy@gmail.com', phoneNumber: '(01) 22 888 4444' },
   { dealer:"Armut", first: 'Tim', last: 'Murphy', email: 'Tim@example.com', phoneNumber: '(353) 01 222 3333' },
   { dealer:"Armut", first: 'Thomas', last: 'Wiens', email: 'Thomas@gmail.com', phoneNumber: '(01) 22 888 4444' },
]

const columns = [
   { id: "dealer", name: 'Firma', width: "100%"  },
   { id: "first", name: 'First Name', width: "100%"  },
   { id: "last", name: 'Last Name', width: "100%"  },
   // { id: 'email', name: 'Email', width: "100%"  },
   { id: 'phoneNumber', name: 'Phone Number', width: "100%"  },
   { id: "edit", name: _(<Button variant="success" size='sm' onClick={() => {/* setDetailShow(true); setRequest(null)*/ }}><BsPlusLg /></Button>), sort: false,  },
]



export default function DealerList() {



   const [detailShow, setDetailShow] = useState(false);

   data.map(item => item.edit = _(<Button variant="link" className='d-flex p-1 fs-4 text-secondary ' onClick={() => { /*setDetailShow(true); setRequest(item) */}}><BsPencilSquare /></Button>))



   // console.log(data);

   return (

      <>
         <h1 className="display-5 text-muted mb-3 text-end">Bayi Listesi</h1>
        
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
                     'placeholder': 'Search in requests...'
                  },
                  'pagination': {
                     'previous': '<',
                     'next': '>',
                  }
               }
            }
            className={{
               paginationButtonNext: 'next-button',
               paginationButtonPrev: 'prev-button'
            }}
         />

      </>
   )
}
