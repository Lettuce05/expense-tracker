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
      <div className='categoryContainer'>
        <span className='categoryName'>{category.name}</span>
      </div>
      <div className='infoContainer'>
        <p className='amount'>{formatAmount(category.amount)}</p>
      </div>
    </div>
  )
}