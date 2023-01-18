import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import {v4 as uuidv4} from 'uuid';

export default function AddExpenseForm({handleOpen}) {
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const {dispatch} = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const expense = {
        id: uuidv4(),
        name: name,
        cost: parseInt(cost),
    }
    dispatch({
        type: 'ADD_EXPENSE',
        payload: expense
    })
    setName('');
    setCost('');
    handleOpen()

  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-sm">
          <label for="name">Name</label>
          <input
            type="text"
            required="required"
            className="form-control"
            id="name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
        </div>
        <div className="col-sm">
          <label for="cost">Cost</label>
          <input
            type="text"
            required="required"
            className="form-control"
            id="cost"
            value={cost}
            onChange={(e)=>setCost(e.target.value)}
          />
        </div>
        <div className="col-sm mt-3 text-center">
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
      </div>
    </form>
  );
}
