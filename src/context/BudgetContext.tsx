import { useReducer, createContext, type Dispatch, type ReactNode, useMemo } from "react";
import { budgetReducer, initialState, type BudgetActions, type BudgetState } from "../reducers/budget-reducer";

type BudgetContextProps = {
  state: BudgetState
  dispatch: Dispatch<BudgetActions>
  totalExpenses: number
  remaininBudget: number
}

type BudgetProviderProps = {
  children: ReactNode
}

const BudgetContext = createContext<BudgetContextProps>({} as BudgetContextProps)

export const BudgetProvider = ({ children } : BudgetProviderProps) => {
  const [state, dispatch] = useReducer(budgetReducer, initialState)
  
  const totalExpenses = useMemo(() => state.expenses.reduce((total, expense) => expense.amount + total, 0), [state.expenses])

  const remaininBudget = state.budget - totalExpenses


  return (
    <BudgetContext.Provider
      value={{
        state,
        dispatch,
        totalExpenses,
        remaininBudget
      }}
    >
      {children}
    </BudgetContext.Provider>
  )
}

export { BudgetContext }