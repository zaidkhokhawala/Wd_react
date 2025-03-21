<<<<<<< HEAD
import React from 'react';
import Promps from './Promps';

function Prompsparents() {

    const cardData = [
        { id: 1, name: "Zaid", city: "Ahmedabad" },
        { id: 2, name: "Ali", city: "Surat" },
        { id: 3, name: "Sara", city: "Rajkot" },
        { id: 4, name: "John", city: "Ahmedabad" },
        { id: 5, name: "Arjun", city: "Vadodara" },
        { id: 6, name: "Mina", city: "Ahmedabad" }
    ];

    return (
          // <><Promps id="1" name="Zaid "city="ahmedabad"/>
          //    Promps id="1" name="Zaid "city="ahmedabad"/></>
        <div className="row">
            {cardData.map((person) => (
                <Promps 
                    id={person.id} 
                    name={person.name} 
                    city={person.city} 
                />
            ))}
        </div>
    );
}

export default Prompsparents;
=======
import React from 'react';
import Promps from './Promps';

function Prompsparents() {

    const cardData = [
        { id: 1, name: "Zaid", city: "Ahmedabad" },
        { id: 2, name: "Ali", city: "Surat" },
        { id: 3, name: "Sara", city: "Rajkot" },
        { id: 4, name: "John", city: "Ahmedabad" },
        { id: 5, name: "Arjun", city: "Vadodara" },
        { id: 6, name: "Mina", city: "Ahmedabad" }
    ];

    return (
          // <><Promps id="1" name="Zaid "city="ahmedabad"/>
          //    Promps id="1" name="Zaid "city="ahmedabad"/></>
        <div className="row">
            {cardData.map((person) => (
                <Promps 
                    id={person.id} 
                    name={person.name} 
                    city={person.city} 
                />
            ))}
        </div>
    );
}

export default Prompsparents;
>>>>>>> c41b63e206e80f023c7d620e23817322de250b06
