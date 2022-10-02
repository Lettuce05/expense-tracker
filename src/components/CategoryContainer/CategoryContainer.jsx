import './CategoryContainer.css';
import { useSelector, useDispatch } from "react-redux";
import Category from '../Category/Category';
// import { setView } from '../../features/transactions/transactionsSlice';

export default function CategoryContainer({ categories }) {
  return (
    <section className='categoryContainer'>
      {categories.map((category) => <Category key={category.name} category={category} />)}
    </section>
  )
}