import './CategoryContainer.css';
import { useSelector, useDispatch } from "react-redux";
import Category from '../Category/Category';
// import { setView } from '../../features/transactions/transactionsSlice';

function findUniqueCategories(arr) {
  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i].category)) {
      unique.push(arr[i].category);
    }
  }
  return unique;
}

function getCategories(categories, arr) {
  const categoryTotals = [];
  for (let i = 0; i < categories.length; i++) {
    let amount = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j].category == categories[i]) {
        amount += arr[j].amount;
      }
    }
    categoryTotals.push({ name: categories[i], amount });
  }
  return categoryTotals;
}

export default function CategoryContainer() {
  const { transactions } = useSelector((state) => state.transactions);

  const categories = getCategories(findUniqueCategories(transactions), transactions);



  return (
    <section className='categoryContainer'>
      {categories.map((category) => <Category key={category.name} category={category} />)}
    </section>
  )
}