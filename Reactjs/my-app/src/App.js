import React , {useState}from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from "./components/Expenses/Expenses";
const DUMMY_EXPENSES =[

  {
    id: 'e1',
    title: "Car Insurance",
    amount: 87,
    date: new Date(2022, 3, 23),
  },
  {
    id: 'e2',
    title: "Toilet Paper",
    amount: 99.23,
    date: new Date(2020, 6, 29),
  },
  {
    id: 'e3',
    title: "Pencil",
    amount: 67.98,
    date: new Date(2021, 8, 9),
  },
  {
    id: 'e4',
    title: "Bike",
    amount: 600.98,
    date: new Date(2021, 7, 4),
  },
  {
    id: 'e5',
    title: "Bag",
    amount: 98.2,
    date: new Date(2022, 5, 15),
  },
  {
    id: 'e6',
    title: "Mobile",
    amount: 400,
    date: new Date(2022, 1, 22),
  },
];


const App = () =>{
  const [expenses,setExpenses] = useState(DUMMY_EXPENSES) ;
  const addExpenseHandler =(expense) =>{
    setExpenses((prevExpenses) =>{
      return [expense,...prevExpenses];
    });
    
  };
  
  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
       <Expenses items={expenses}/>
    </div>
  );
}

export default App;

