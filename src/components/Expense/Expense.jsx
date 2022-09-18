import './Expense.css';

function formatAmount(amount) {
  let formatted = Array.from(String(amount));
  if (formatted[0] === '-') {
    formatted.splice(1, 0, '$');
  } else {
    formatted.splice(0, 0, '$')
  }
  return formatted.join('');
}

function formatDate(date) {
  return new Date(date).toLocaleDateString('en-us', { month: 'short', day: 'numeric' })
}

export default function Expense({ transaction }) {

  return (
    <div className='expense'>
      <div className='categoryContainer'>
        <span className='category'>{transaction.category}</span>
      </div>
      <div className='infoContainer'>
        <p className='amount'>{formatAmount(transaction.amount)}</p>
        <p className='date'>{formatDate(transaction.date)}</p>
      </div>
    </div>
  )
}