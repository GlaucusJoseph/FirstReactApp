import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = () => {
    return <form>
        <div className="new-expense">
            <ExpenseForm/>
        </div>
    </form>
};

export default NewExpense;
