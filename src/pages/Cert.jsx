import React from 'react'
import '../style/Cert.css'
import Cert_part from '../components/Cert_part'

const Cert = () => {
  return (
    <div className='Cert-container'>
        <p className='cert'>Certificates</p>
        <Cert_part/>
    </div>
  )
}

export default Cert