import { useSelector } from 'react-redux';
import Navbar from './components/Navbar/Navbar';
import Income from './components/Income/Income';
import Overview from './components/Overview/Overview';
import Expenses from './components/Expenses/Expenses';
import './App.css'

function getScreen(view) {
  if (view === 'expenses') {
    return <Expenses />
  } else if (view === 'income') {
    return <Income />
  } else {
    return <Overview />
  }
}

function App() {
  const { view } = useSelector((state) => state.transactions);

  return (
    <div className="App">
      <h1>Transactions</h1>
      <Navbar />
      {getScreen(view)}
    </div>
  )
}

export default App
