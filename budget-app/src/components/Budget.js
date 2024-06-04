/* In Budget.js you will be adding text and value for your budget. 
 * You will be importing app context and the useContext hook, and pass your AppContext to it - 
 * this is how a component connects to the context in order to get values from global state. 
*/
import React, { useContext, useState } from 'react';
import { AppContext  } from '../context/AppContext';

const Budget = () => {
    const { dispatch, remaining ,currency, expenses} = useContext(AppContext);
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const upperLimitValue = 20000

    const handleBudgetChange = (e) => {
        setNewBudget(e.target.value);
    }
    const handleKeyDown = (e) => {
        if ( e.key === 'Enter' && newBudget <= upperLimitValue) {
          dispatch({ type: "SET_BUDGET", payload: newBudget });
        }else if (newBudget > upperLimitValue) {
            alert("The value cannot exceed remaining funds  £"+remaining);   
        }
        else if (newBudget < expenses) {
            alert("You cannot reduce the budget value lower than the spending.")
        }
      };
      

    return (
        <div className="alert alert-secondary ">
            <label>Budget: {currency}</label>
            <input
                className='w-50 ms-1'
                required
                type="number"
                id="cost"
                step={10}
                value={newBudget}
                onChange={handleBudgetChange}
                onKeyDown={handleKeyDown}
            />
    </div>

    );
};
export default Budget;
