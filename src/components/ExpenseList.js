import React from "react";
import ExpenseItem from "./ExpenseItem";

export default function ExpenseList() {
  const expences = [
    { id: 1, name: "Shopping", cost: 50 },
    { id: 2, name: "Household", cost: 520 },
    { id: 3, name: "Ensurence", cost: 20 },
  ];

  return (
    <ul className="list-group">
      {expences.map((expence) => (
        <ExpenseItem id={expence.id} name={expence.name} cost={expence.cost}/>
      )
        )}
    </ul>
  );
}
