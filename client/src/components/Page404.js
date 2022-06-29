import React from 'react'
import Background from './auth/Background'
import { Card } from 'react-bootstrap'


export default function Page404() {
  return (
    <div className="auth-wrapper">
      <div className="auth-content">

        <Background />

        <Card>

          <Card.Body className="text-center p-4">

            <h1 className='display-1 text-muted my-5'>Page <br /> 404</h1>
            <a href="/">Anasayfaya Dön</a>

          </Card.Body>
        </Card>

      </div>
    </div>
  )
}