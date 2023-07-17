import './App.css';
import List from './components/List/List';
import NewList from './components/NewList/NewList';



function App() {
  const listItems = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      quantity : 5
    },
    { id: 'e2', 
    title: 'New TV', 
    amount: 799.49, 
    quantity : 10 
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      quantity : 20
    },
    {
      id: 'e4',
      title: 'Rent a House',
      amount: 450000,
      quantity : 50
    },
  ];

  return (
    <div className="App">
      <NewList/>
      <List item={listItems}/>
    </div>
  );
}

export default App;
