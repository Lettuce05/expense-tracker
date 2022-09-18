import './Expense.css';

export default function Expense({ transaction }) {

  return (
    <div className='expense'>
      <div className='categoryContainer'>
        <span>{transaction.category}</span>
      </div>
      <div className='infoContainer'>
        <p>{transaction.amount}</p>
      </div>
    </div>
  )
}