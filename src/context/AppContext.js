import { Alert } from "bootstrap";
import { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
        return {
            ...state,
            expenses: [action.payload, ...state.expenses]
        };
        
        default: return state;
    }
}


const initialState = {
  budget: 2000,
  expenses: [
    { id: 1, name: "Shopping", cost: 510 },
    { id: 2, name: "Household", cost: 520 },
    { id: 3, name: "Ensurence", cost: 20 },
    { id: 3, name: "car service", cost: 220 },
  ],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <AppContext.Provider value={{
            budget: state.budget,
            expenses: state.expenses,
            dispatch,
        }}>
            {props.children}
        </AppContext.Provider>
    )
}