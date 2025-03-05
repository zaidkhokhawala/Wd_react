<<<<<<< HEAD



import React, { useState } from 'react'

function State() {
    const [count, setcount] = useState(0)

  return (
    <div>
        <h1>this is count {count}</h1>
        <button type="button" onClick={()=>{setcount(count+1)}} class="btn btn-primary">Primary</button>

    </div>
  )
}

=======



import React, { useState } from 'react'

function State() {
    const [count, setcount] = useState(0)

  return (
    <div>
        <h1>this is count {count}</h1>
        <button type="button" onClick={()=>{setcount(count+1)}} class="btn btn-primary">Primary</button>

    </div>
  )
}

>>>>>>> c41b63e206e80f023c7d620e23817322de250b06
export default State