import React from 'react';
import Products from './components/Products';
import NewProduct from './components/NewProduct';

const App = () => {
  const products = [
    {
      id: 'p1',
      title: 'Bourbon',
      amount: 100,
      date: new Date(2021, 8, 10),
    },
    {
      id: 'p2',
      title: 'Lays Chips',
      amount: 200,
      date: new Date(2021, 2, 2)
    },
    {
      id: 'p3',
      title: 'Smoodh',
      amount: 130,
      date: new Date(2021, 12, 28),
    },
    {
      id: 'p4',
      title: 'Maggi',
      amount: 450,
      date: new Date(2021, 5, 5),
    },
  ];

  function printProductData(data){
    console.log("Inside in the App.js");
    console.log(data);
    
  }

  return (
    <div>
      <NewProduct  ashwin = {printProductData}/>
      <Products items={products} />
    </div>
  );
}

export default App;