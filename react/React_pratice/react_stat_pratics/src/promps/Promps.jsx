<<<<<<< HEAD
import React from 'react'

/* Step 1: Ek React functional component banaiye.ye child component hogha 
Iske parameter me curly braces ke andar props define karein. ex : ({id, name,city})
step 2 : <h4 className="card-title">{name}</h4> ese call karvaye  
step 3 : ek  nayi file m ek component banake parameter pass karayghe jo child component h 
uska component ka Name dekar return ke ander ex : <Promps id="1" name="Zaid" city="Ahmedabad" />
                                                   <Promps id="2" name="Aman" city="Mumbai" />
agar multiple h to ese likheghe phir isee map filter se bhi kar sakte h 
const cardData = [
        { id: 1, name: "Zaid", city: "Ahmedabad" },
        { id: 2, name: "Ali", city: "Surat" }  ]; ye array return ke uper likheghe 
phir return me map function use kareghe 
 {cardData.map((person) => ( <Promps  id={person.id}  name={person.name}  city={person.city} /> ))}


step 4 :  app.js me parents component yani jis me hum value pass karni ho use call karayghe 
        ex : <Prompsparents/> yaha ye parents componenet h  */


function Promps({ id, name, city }) {
    return (
        <>
            <div className="col-md-4 mt-5">
                <h1 className="card-title">{id}</h1>
                <h1 className="card-title">{name}</h1>
                <h1 className="card-text">{city}</h1>
            </div>
        </>
    )
}

=======
import React from 'react'

/* Step 1: Ek React functional component banaiye.ye child component hogha 
Iske parameter me curly braces ke andar props define karein. ex : ({id, name,city})
step 2 : <h4 className="card-title">{name}</h4> ese call karvaye  
step 3 : ek  nayi file m ek component banake parameter pass karayghe jo child component h 
uska component ka Name dekar return ke ander ex : <Promps id="1" name="Zaid" city="Ahmedabad" />
                                                   <Promps id="2" name="Aman" city="Mumbai" />
agar multiple h to ese likheghe phir isee map filter se bhi kar sakte h 
const cardData = [
        { id: 1, name: "Zaid", city: "Ahmedabad" },
        { id: 2, name: "Ali", city: "Surat" }  ]; ye array return ke uper likheghe 
phir return me map function use kareghe 
 {cardData.map((person) => ( <Promps  id={person.id}  name={person.name}  city={person.city} /> ))}


step 4 :  app.js me parents component yani jis me hum value pass karni ho use call karayghe 
        ex : <Prompsparents/> yaha ye parents componenet h  */


function Promps({ id, name, city }) {
    return (
        <>
            <div className="col-md-4 mt-5">
                <h1 className="card-title">{id}</h1>
                <h1 className="card-title">{name}</h1>
                <h1 className="card-text">{city}</h1>
            </div>
        </>
    )
}

>>>>>>> c41b63e206e80f023c7d620e23817322de250b06
export default Promps