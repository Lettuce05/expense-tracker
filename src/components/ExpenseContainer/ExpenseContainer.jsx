import { useSelector, useDispatch } from "react-redux";
import Expense from '../Expense/Expense';
// import { setView } from '../../features/transactions/transactionsSlice';

export default function ExpenseContainer() {
  const { transactions } = useSelector((state) => state.transactions)
  return (
    <section>
      {transactions.map((transaction) => <Expense key={transaction.id} transaction={transaction} />)}
    </section>
  )
}