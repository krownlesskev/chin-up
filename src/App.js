import { useState } from 'react';

import Axios from 'axios';
import './styles.css';



function App() {
  const [excuse, setExcuse] = useState();
  
  // Fetches data from api and displays in the console
const handleClick = () => {
  Axios.get('https://excuser.herokuapp.com/v1/excuse')
    .then((res) => {
      console.log(res.data[0].excuse);
    });
};

  return (
    <div className="container">
      <h1>CHIN UP</h1>
      <p>The Mental Health App</p>
      <button onClick={handleClick}>Generate</button>
    </div>
  );
}

export default App;
