<<<<<<< HEAD

//step 1 : .js compo banao phir usme createContext() likho ise
//  ek variable me store karo const userContext = createContext(); phir usme export default componame 
// step 2 : phir ed compo banana h ek parentcompo hogha ek childcompo 
//   yato perentcompo vo hogha jaha se data aapko provide karana h childcompo 
//  me phir usme .js wali file or child wali file ko import karana h  ko import karayghe 
  /*phir function Perentscontext() {const user = { name: "Zai", id: 1 };
     return ( <userContext.Provider value={user}> <Childcontext /></userContext.Provider> ); }*/ 
     //jeise code h wese ibject lena h or jo .js file ka name h usko tag me .provide karake P capital likhna h 
     //or jo value deni h vo provide karni h or child compo ko wrap karna h 
//step 3: child compo me useContext(userContext) likheghe or uske parameter me .js ka name denghe
// or use var me store kareghe but var ka name vahi hogha jo perents ke value wale var ki thi ex : const user = useContext(userContext);    // 
//jaha bhi value pass karni h vaha kareghe html me ex :<h1>My name is {user.name }</h1> 
//aab app.js me perents wala compo call karayghe //
import React, { useContext } from 'react';
 import userContext from './userContext';// Correct import

function Childcontext() {
    const user = useContext(userContext); // Accessing context correctly

    return (
        <div>
            {/* Make sure the user object is available */}
            <h1>My name is {user.name }</h1> 
        </div>
    );
}

export default Childcontext;
=======

//step 1 : .js compo banao phir usme createContext() likho ise
//  ek variable me store karo const userContext = createContext(); phir usme export default componame 
// step 2 : phir ed compo banana h ek parentcompo hogha ek childcompo 
//   yato perentcompo vo hogha jaha se data aapko provide karana h childcompo 
//  me phir usme .js wali file or child wali file ko import karana h  ko import karayghe 
  /*phir function Perentscontext() {const user = { name: "Zai", id: 1 };
     return ( <userContext.Provider value={user}> <Childcontext /></userContext.Provider> ); }*/ 
     //jeise code h wese ibject lena h or jo .js file ka name h usko tag me .provide karake P capital likhna h 
     //or jo value deni h vo provide karni h or child compo ko wrap karna h 
//step 3: child compo me useContext(userContext) likheghe or uske parameter me .js ka name denghe
// or use var me store kareghe but var ka name vahi hogha jo perents ke value wale var ki thi ex : const user = useContext(userContext);    // 
//jaha bhi value pass karni h vaha kareghe html me ex :<h1>My name is {user.name }</h1> 
//aab app.js me perents wala compo call karayghe //
import React, { useContext } from 'react';
 import userContext from './userContext';// Correct import

function Childcontext() {
    const user = useContext(userContext); // Accessing context correctly

    return (
        <div>
            {/* Make sure the user object is available */}
            <h1>My name is {user.name }</h1> 
        </div>
    );
}

export default Childcontext;
>>>>>>> c41b63e206e80f023c7d620e23817322de250b06
