import './Category.css';

function formatAmount(amount) {
  let formatted = Array.from(String(amount));
  if (formatted[0] === '-') {
    formatted.splice(1, 0, '$');
  } else {
    formatted.splice(0, 0, '$')
  }
  return formatted.join('');
}

export default function Category({ category }) {

  return (
    <div className='category'>
        <div className='categoryName'>{category.name}</div>
        <div className='amount'>{formatAmount(category.amount)}</div>
    </div>
  )
}