import { useSelector, useDispatch } from "react-redux";
import { setView } from '../../features/transactions/transactionsSlice';
import './Navbar.css';

function isActive(tab, view) {
  let active = '';
  if (tab === view) {
    active = ' btn-active';
  }
  return active;
}

function Navbar() {
  const { view } = useSelector((state) => state.transactions);
  const dispatch = useDispatch();

  return (
    <nav className='mainNav'>
      <button
        className={'btn' + isActive('overview', view)}
        onClick={() => dispatch(setView('overview'))}
      >Overview</button>
      <button
        className={'btn' + isActive('income', view)}
        onClick={() => dispatch(setView('income'))}
      >Income</button>
      <button
        className={'btn' + isActive('expenses', view)}
        onClick={() => dispatch(setView('expenses'))}
      >Expenses</button>
    </nav>
  );
}

export default Navbar;