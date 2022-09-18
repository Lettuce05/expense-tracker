import { useSelector } from 'react-redux';
import ExpenseContainer from './components/ExpenseContainer/ExpenseContainer';
import Navbar from './components/Navbar/Navbar';

import './App.css'


function App() {
  const { view } = useSelector((state) => state.transactions);

  return (
    <div className="App">
      <h1>Transactions</h1>
      <Navbar />
      <ExpenseContainer />
    </div>
  )
}

export default App
