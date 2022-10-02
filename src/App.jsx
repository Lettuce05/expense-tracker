import { useSelector } from 'react-redux';
import CategoriesScreen from './components/CategoriesScreen/CategoriesScreen';

import './App.css'

function getScreen(screen) {
  if (screen === 'categoryScreen') {

  } else {
    return <CategoriesScreen />
  }
}

function App() {
  const { screen } = useSelector((state) => state.screenManager);

  return (
    <div className="App">
      {getScreen(screen)}
    </div>
  )
}

export default App
