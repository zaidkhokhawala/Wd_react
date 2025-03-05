<<<<<<< HEAD
import React, { createContext, useState } from "react";

export const ChecklistContext = createContext();

export function ChecklistProvider({ children }) {
  const [checklist, setChecklist] = useState({
    isCitizen: false,
    isOver21: false,
  });

  const updateChecklist = (e) => {
    setChecklist((prev) => ({
      ...prev,
      [e.target.name]: e.target.checked,
    }));
  };

  return (
    <ChecklistContext.Provider value={{ checklist, updateChecklist }}>
      {children}
    </ChecklistContext.Provider>
  );
}
=======
import React, { createContext, useState } from "react";

export const ChecklistContext = createContext();

export function ChecklistProvider({ children }) {
  const [checklist, setChecklist] = useState({
    isCitizen: false,
    isOver21: false,
  });

  const updateChecklist = (e) => {
    setChecklist((prev) => ({
      ...prev,
      [e.target.name]: e.target.checked,
    }));
  };

  return (
    <ChecklistContext.Provider value={{ checklist, updateChecklist }}>
      {children}
    </ChecklistContext.Provider>
  );
}
>>>>>>> c41b63e206e80f023c7d620e23817322de250b06
    