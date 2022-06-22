import React from 'react'

export default function SelecDogs({num, change}) {
  return (
    <div>
        <input type="text" value = {num} onChange ={change} />
    </div>
  )
}
