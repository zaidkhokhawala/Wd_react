<<<<<<< HEAD
import React, { useContext } from 'react';
import { ChecklistContext } from './ChecklistContext'; 

const Checklist = () => {
  // Use the useContext Hook to access state and handler from ChecklistContext
  const { checkedItems, handleCheckboxChange } = useContext(ChecklistContext);

  return (
    <div className="container py-5">
      <div className="card shadow-lg p-4">
        <h2 className="text-center mb-4">Checklist</h2>

        {/* Checkbox options with Bootstrap 5 classes */}
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            name="citizen"
            checked={checkedItems.citizen}
            onChange={handleCheckboxChange}
          />
          <label className="form-check-label" htmlFor="citizen">
            Are you a citizen?
          </label>
        </div>

        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            name="over21"
            checked={checkedItems.over21}
            onChange={handleCheckboxChange}
          />
          <label className="form-check-label" htmlFor="over21">
            Are you over 21?
          </label>
        </div>

        {/* Display the selected answers with Yes/No */}
        <div className="mt-4">
          <h1 className="mb-3">
            Are you a citizen? : {checkedItems.citizen ? 'Yes' : 'No'}
          </h1>
          <h1>
            Are you over 21? : {checkedItems.over21 ? 'Yes' : 'No'}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Checklist;
=======
import React, { useContext } from 'react';
import { ChecklistContext } from './ChecklistContext'; 

const Checklist = () => {
  // Use the useContext Hook to access state and handler from ChecklistContext
  const { checkedItems, handleCheckboxChange } = useContext(ChecklistContext);

  return (
    <div className="container py-5">
      <div className="card shadow-lg p-4">
        <h2 className="text-center mb-4">Checklist</h2>

        {/* Checkbox options with Bootstrap 5 classes */}
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            name="citizen"
            checked={checkedItems.citizen}
            onChange={handleCheckboxChange}
          />
          <label className="form-check-label" htmlFor="citizen">
            Are you a citizen?
          </label>
        </div>

        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            name="over21"
            checked={checkedItems.over21}
            onChange={handleCheckboxChange}
          />
          <label className="form-check-label" htmlFor="over21">
            Are you over 21?
          </label>
        </div>

        {/* Display the selected answers with Yes/No */}
        <div className="mt-4">
          <h1 className="mb-3">
            Are you a citizen? : {checkedItems.citizen ? 'Yes' : 'No'}
          </h1>
          <h1>
            Are you over 21? : {checkedItems.over21 ? 'Yes' : 'No'}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Checklist;
>>>>>>> c41b63e206e80f023c7d620e23817322de250b06
