<<<<<<< HEAD
import React, { useEffect, useState } from 'react'

function UseEffect_stat() {

const [first, setfirst] = useState(0)
useEffect(() => {
    window.alert("number update succefull")}, [first])

  return (
    <div className='d-flex justify-content-center mt-5 ' >
        <h1>count number is {first}</h1>
        <button type='button' className='btn btn-primary' onClick={()=>{setfirst(first+1)}}>plus btn</button>

    </div>
  )
}

=======
import React, { useEffect, useState } from 'react'

function UseEffect_stat() {

const [first, setfirst] = useState(0)
useEffect(() => {
    window.alert("number update succefull")}, [first])

  return (
    <div className='d-flex justify-content-center mt-5 ' >
        <h1>count number is {first}</h1>
        <button type='button' className='btn btn-primary' onClick={()=>{setfirst(first+1)}}>plus btn</button>

    </div>
  )
}

>>>>>>> c41b63e206e80f023c7d620e23817322de250b06
export default UseEffect_stat