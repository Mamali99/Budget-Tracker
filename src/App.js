import "bootstrap/dist/css/bootstrap.min.css";
import Budget from "./components/Budget";
import ExpenseList from "./components/ExpenseList";
import ExpenseTotal from "./components/ExpenseTotal";
import Remaining from "./components/Remaining";
function App() {
  return (
    <div className="container">
      <h1 className="mt-3">
        My Budget Tracker
      </h1>
      <div className="row mt-3">
        <div className="col-sm">
          <Budget />
        </div>
        <div className="col-sm">
          <Remaining />
        </div>
        <div className="col-sm">
          <ExpenseTotal />
        </div>
      </div>
      <h3 className="mt-3">Expenses</h3>
      <div className="row mt3">
        <ExpenseList />
      </div>
    </div>
  );
}

export default App;
