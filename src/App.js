import { useState } from 'react';

import Axios from 'axios';
import './styles.css';



function App() {
  const [excuse, setExcuse] = useState('');
  const [category, setCategory] = useState('');

  // Fetches data from api sets it in state
  const handleClick = () => {
    Axios.get('https://excuser.herokuapp.com/v1/excuse')
      .then((res) => {
        setExcuse(res.data[0].excuse);
        setCategory(res.data[0].category);
      });
  };

  return (
    <div className="container">
      <h1>CHIN UP</h1>
      <p>The Mental Health App</p>
      {/* Clicking the generate button will display the Excuse and Category */}
      <button onClick={handleClick}>Generate</button>
      <p>Excuse: {excuse}</p>
      <p>Category: {category}</p>
    </div>
  );
}

export default App;
