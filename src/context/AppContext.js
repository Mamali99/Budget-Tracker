import { createContext, useReducer, useEffect  } from "react";
import React from "react";
import axios from "axios";


const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      addExpense(action.payload);
      return {
        ...state,
        expenses: [action.payload, ...state.expenses],
      };
    case "DELETE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
      };
    case "SET_BUDGET":
      updateAmount(action.payload);
      return {
        ...state,
        budget: action.payload,
      };
    case "SET_INITIAL_STATE":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

const updateAmount = (newAmount) => {
  axios
    .patch("http://localhost:8000/budget", { amount: newAmount })
    .then((res) => {
      console.log("Amount updated successfully");
    })
    .catch((err) => console.log(err));
};

// const addExpense = (newExpense) => {
//   var newState;
//   axios
//       .get("http://localhost:8000/budget")
//       .then((res) => {
//         // Store the data in the initial state
//        newState = { ...initialState.expenses, newExpense };
//        console.log('newState', newState)

//       })
//       .catch((err) => console.log(err));

//    axios
//     .patch("http://localhost:8000/budget", { expenses: newState })
//     .then((res) => {
//       console.log('res', res.data)
//     })
//     .catch((err) => console.log(err));
    
// }
const addExpense = (newExpense) => {
  axios
    .get("http://localhost:8000/budget")
    .then((res) => {
      let newExpenses = [...res.data.expenses, newExpense];
      axios
        .patch("http://localhost:8000/budget", { expenses: newExpenses })
        .then((res) => {
          console.log("Expense added successfully");
          // dispatch({ type: "SET_INITIAL_STATE", payload: { ...state, expenses: newExpenses } });
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
};


const initialState = {
  budget: 0,
  expenses: [],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  useEffect(() => {
    axios
      .get("http://localhost:8000/budget")
      .then((res) => {
        // Store the data in the initial state
        let newState = { ...initialState };
        newState.budget = res.data.amount;
        newState.expenses = res.data.expenses;
        dispatch({ type: "SET_INITIAL_STATE", payload: newState });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
