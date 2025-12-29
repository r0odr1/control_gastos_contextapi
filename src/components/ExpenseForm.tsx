import { useState } from "react";
import type { DrafExpense } from "../types";
import { categories } from "../data/categories";
import DatePicker from 'react-date-picker';
import 'react-calendar/dist/Calendar.css'
import 'react-date-picker/dist/DatePicker.css'

export default function ExpenseForm() {
  const [expense, setExpense] = useState<DrafExpense>({
    amount: 0,
    expenseName: '',
    category: '',
    date: new Date()
  })


  return (
    <form className="space-y-5">
      <legend
        className="upercase text-center text-2xl font-black border-b-4 border-blue-500"
      >
        Nuevo Gasto
      </legend>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="expenseName"
          className="text-xl"
        >
          Nombre Gasto:
        </label>
        <input
          type="text"
          id="expenseName"
          placeholder="Añade el Nombre del gasto"
          className="bg-slate-100 p-2 rounded-lg"
          name="expenseName"
          value={expense.expenseName}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="amount"
          className="text-xl"
        >
          Cantidad:
        </label>
        <input
          type="number"
          id="amount"
          placeholder="Añade la cantidad del gasto: Ej. 300"
          className="bg-slate-100 p-2 rounded-lg"
          name="amount"
          value={expense.amount}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="category"
          className="text-xl"
        >
          Categoria:
        </label>
        <select
          id="category"
          className="bg-slate-100 p-2 rounded-lg"
          name="category"
          value={expense.category}
        >
          <option value="">-- Seleccione --</option>
          {categories.map(category => (
            <option
              key={category.id}
              value={category.id}
            >
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="amount"
          className="text-xl"
        >
          Fecha Gasto:
        </label>
        <DatePicker
          className="bg-slate-100 p-2 border-0"
          value={expense.date}
        />
      </div>

      <input
        type="submit"
        className="bg-blue-600 cursor-pointer w-full p-2 text-white uppercase font-bold rounded-lg"
        value={'Registrar Gatos'}
      />

    </form>
  )
}
