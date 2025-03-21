<<<<<<< HEAD
// step 1 sabse pehle usereduser ki syntax likheghe 
// const [state, dispatch] = useReducer(myaction , mydata) 
// dipatch= button per onclick,mydata = state value ,myaction = if else ,
//const mydata = { number : 0,  name:"zaid" } data banayghe , 
//value jaha shoow karani h waha ese show karayghe <h1>{state.number/name }</h1>
//phir btn per dispatch ki value denghe <button onClick={()=>{dispatch(0)}}>increment</button>
 //myaction name ka function banayghe  jisme do parameter hote h state or action phir uske ander if else banayghe 
 // jisme if ke parameter per action=== k baad vo value likheghe jo button me dispatch me di h 
 // phir {k ander} return({}) likheghe or uske {me ek se jayada state ho to ...state,karke name : "mazu" /  number: state.number+1}
 // ex : return({...state , number: state.number-1}) / return({...state,name : "mazu"})  
 // note :  import React, { useReducer } from 'react' hua h//
import React, { useReducer } from 'react'
function Mytask() {
const mydata = {
    number : 0,
    name:"zaid" 
}

   function myaction(state,action) {
    if(action === 0){
        return({...state , number: state.number+1  })
    }
    if(action === 1){
        return({...state , number: state.number-1})
    }
    if(action === "changename"){
          return({...state,name : "mazu"})
    }
    
   }
    const [state, dispatch] = useReducer(myaction , mydata)

  return (
    <div>
<h1>{state.number}</h1>
<button onClick={()=>{dispatch(0)}}>increment</button>
<button onClick={()=>{dispatch(1)}}>discriment</button>
<br />
<h1>{state.name}</h1>
<button onClick={()=>{dispatch("changename")}}>changename</button>
    </div>
  )
}

=======
// step 1 sabse pehle usereduser ki syntax likheghe 
// const [state, dispatch] = useReducer(myaction , mydata) 
// dipatch= button per onclick,mydata = state value ,myaction = if else ,
//const mydata = { number : 0,  name:"zaid" } data banayghe , 
//value jaha shoow karani h waha ese show karayghe <h1>{state.number/name }</h1>
//phir btn per dispatch ki value denghe <button onClick={()=>{dispatch(0)}}>increment</button>
 //myaction name ka function banayghe  jisme do parameter hote h state or action phir uske ander if else banayghe 
 // jisme if ke parameter per action=== k baad vo value likheghe jo button me dispatch me di h 
 // phir {k ander} return({}) likheghe or uske {me ek se jayada state ho to ...state,karke name : "mazu" /  number: state.number+1}
 // ex : return({...state , number: state.number-1}) / return({...state,name : "mazu"})  
 // note :  import React, { useReducer } from 'react' hua h//
import React, { useReducer } from 'react'
function Mytask() {
const mydata = {
    number : 0,
    name:"zaid" 
}

   function myaction(state,action) {
    if(action === 0){
        return({...state , number: state.number+1  })
    }
    if(action === 1){
        return({...state , number: state.number-1})
    }
    if(action === "changename"){
          return({...state,name : "mazu"})
    }
    
   }
    const [state, dispatch] = useReducer(myaction , mydata)

  return (
    <div>
<h1>{state.number}</h1>
<button onClick={()=>{dispatch(0)}}>increment</button>
<button onClick={()=>{dispatch(1)}}>discriment</button>
<br />
<h1>{state.name}</h1>
<button onClick={()=>{dispatch("changename")}}>changename</button>
    </div>
  )
}

>>>>>>> c41b63e206e80f023c7d620e23817322de250b06
export default Mytask