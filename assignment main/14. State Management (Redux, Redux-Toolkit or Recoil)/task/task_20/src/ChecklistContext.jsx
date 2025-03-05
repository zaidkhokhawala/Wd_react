<<<<<<< HEAD
import React, { createContext, useState } from 'react';

// Create a context for the checklist state
const ChecklistContext = createContext();

const ChecklistProvider = ({ children }) => {
  // React state to track checkbox values
  const [checkedItems, setCheckedItems] = useState({
    citizen: false,
    over21: false,
  });

  // Function to update checkbox value
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  return (
    <ChecklistContext.Provider value={{ checkedItems, handleCheckboxChange }}>
      {children}
    </ChecklistContext.Provider>
  );
};

export { ChecklistContext };
export default ChecklistProvider;
=======
import React, { createContext, useState } from 'react';

// Create a context for the checklist state
const ChecklistContext = createContext();

const ChecklistProvider = ({ children }) => {
  // React state to track checkbox values
  const [checkedItems, setCheckedItems] = useState({
    citizen: false,
    over21: false,
  });

  // Function to update checkbox value
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  return (
    <ChecklistContext.Provider value={{ checkedItems, handleCheckboxChange }}>
      {children}
    </ChecklistContext.Provider>
  );
};

export { ChecklistContext };
export default ChecklistProvider;
>>>>>>> c41b63e206e80f023c7d620e23817322de250b06
