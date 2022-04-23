import { useState } from 'react';

import Axios from 'axios';
import './styles.scss';


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
      <h2>The Mental Health App</h2>
      {/* Clicking the generate button will display the Excuse and Category */}
      <div className='excuse-generator'>
        <button onClick={handleClick}>Generate</button>
        <p>Excuse: {excuse}</p>
        <p>Category: {category}</p>
      </div>
      <footer>
        <p className='footer-main-text'>I dedicate this application to my love, <span>Michelle</span>.</p>
        <p className='footer-sub-text'>Who fights every single day to be the strongest woman she already is.</p>
      </footer>
    </div>
  );
}

export default App;
