import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Remaining() {
  const { budget, expenses } = useContext(AppContext);

  const totalCost = expenses.reduce((acc, expense) => acc + expense.cost, 0);

  return (
    <div className={`alert ${totalCost > budget ? 'alert-danger' : 'alert-success'}`}>
      <span>Remaining: €{budget - totalCost}</span>
    </div>
  );
}
