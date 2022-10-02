import { useSelector } from 'react-redux';
import CategoryContainer from '../CategoryContainer/CategoryContainer';
import Navbar from '../Navbar/Navbar';
import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
import randomColor from 'randomcolor';

//import './CategoriesScreen.css'

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
    let amount = arr.reduce((prev, curr) => {
      if (curr.category == categories[i]) {
        return prev + curr.amount;
      }
      return prev;
    }, 0);
    categoryTotals.push({ name: categories[i], amount });
  }
  return categoryTotals;
}

export default function CategoriesScreen() {
  const { view, transactions } = useSelector((state) => state.transactions);

  let categories = getCategories(findUniqueCategories(transactions), transactions);
  const data = {};
  if (view == "overview") {
    let income = transactions.filter(transaction => transaction.amount >= 0);
    let expenses = transactions.filter(transaction => transaction.amount < 0);

    income = income.reduce((prev, curr) => prev + curr.amount, 0);
    expenses = expenses.reduce((prev, curr) => prev + curr.amount, 0);

    data.labels = ['Income', 'Expenses'];
    data.datasets = [{
      label: 'Overview',
      data: [income, expenses],
      backgroundColor: [
        'rgb(154, 252, 136)',
        'rgb(255, 99, 132)'
      ]
    }]
  } else if (view == 'income') {
    categories = categories.filter(category => category.amount >= 0);

    data.labels = categories.map(category => category.name);
    data.datasets = [{
      label: 'Income',
      data: categories.map(category => category.amount),
      backgroundColor: randomColor({
        count: categories.length,
        format: 'rgb'
      })
    }];
  } else if (view == 'expenses') {
    categories = categories.filter(category => category.amount < 0);

    data.labels = categories.map(category => category.name);
    data.datasets = [{
      label: 'Expenses',
      data: categories.map(category => category.amount),
      backgroundColor: randomColor({
        count: categories.length,
        format: 'rgb'
      })
    }];
  }
  return (
    <div className="CategoriesScreen">
      <h1>{view}</h1>
      <Navbar />
      <Doughnut data={data} />
      <CategoryContainer categories={categories} />
    </div>
  )
}


