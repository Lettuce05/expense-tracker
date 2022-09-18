import { useSelector } from 'react-redux';
import Navbar from './components/Navbar/Navbar';
import './App.css'

function App() {
  const { view } = useSelector((state) => state.transactions);

  return (
    <div className="App">
      <h1>Transactions</h1>
      <Navbar />
    </div>
  )
}

export default App
