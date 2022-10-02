import { useSelector } from 'react-redux';
import CategoryContainer from '../CategoryContainer/CategoryContainer';
import Navbar from '../Navbar/Navbar';

//import './CategoriesScreen.css'


export default function CategoriesScreen() {
  const { view } = useSelector((state) => state.transactions);

  return (
    <div className="CategoriesScreen">
      <h1>{view}</h1>
      <Navbar />
      <CategoryContainer />
    </div>
  )
}


