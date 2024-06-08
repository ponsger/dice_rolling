import React from 'react'
import '../css/button.css'

export default function Button({timeout}) {
  return (
    <>
        <button onClick={timeout} className='button-rolling'>Rolling</button>
    </>
  )
}
