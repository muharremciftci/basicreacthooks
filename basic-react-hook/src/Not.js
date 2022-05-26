import React from 'react'
import "./App.css"

export default function Not(props) {
  return (
    <div className='not'>
    <h3>{props.ad}</h3>
    <p>{props.aciklama}</p>
    <hr/>
    <p>{props.tarih}</p>
    </div>
  )
}
