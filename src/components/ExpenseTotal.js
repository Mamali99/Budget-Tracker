import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function ExpenseTotal() {
  const { budget, expenses } = useContext(AppContext);

  const totalCost = expenses.reduce((acc, expense) => acc + expense.cost, 0);

  return (
    <div className={`alert ${totalCost > budget ? 'alert-danger' : 'alert-primary'}`}>
        <span>Spent so far: €{totalCost}</span>
    </div>
  )
}
