import React, { useContext } from "react";
import { ChecklistContext } from "./ChecklistContext"; // Import Context

function App() {
  const { checklist, updateChecklist } = useContext(ChecklistContext);

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Checklist</h1>

      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="citizen"
          name="isCitizen"
          checked={checklist.isCitizen}
          onChange={updateChecklist}
        />
        <label className="form-check-label" htmlFor="citizen">
          Are you a Citizen?
        </label>
      </div>

      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="over21"
          name="isOver21"
          checked={checklist.isOver21}
          onChange={updateChecklist}
        />
        <label className="form-check-label" htmlFor="over21">
          Are you over 21?
        </label>
      </div>

      <div className="mt-4">
        <p>Are you a Citizen: {checklist.isCitizen ? "Yes" : "No"}</p>
        <p>Are you over 21: {checklist.isOver21 ? "Yes" : "No"}</p>
      </div>
    </div>
  );
}

export default App;
