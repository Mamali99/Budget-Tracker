import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Button } from "react-bootstrap";

export default function Budget() {
  const { budget, dispatch } = useContext(AppContext);

  const handleEdit = () => {
    const newBudget = window.prompt("Enter new budget: ");
    if(newBudget){
        dispatch({
            type: 'SET_BUDGET',
            payload: newBudget
        })
    }
  }

  return (
    <div className="alert alert-secondary">
      <div className="d-flex justify-content-between">
        <span>Budget: €{budget}</span>
        <Button variant="outline-primary" onClick={handleEdit}>Edit</Button>
      </div>
    </div>
  );
}
