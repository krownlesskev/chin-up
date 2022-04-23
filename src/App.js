import './styles.css';
import Axios from 'axios';

// Fetches data from api and displays in the console
const handleClick = () => {
  Axios.get('https://excuser.herokuapp.com/v1/excuse')
  .then((res) => {
    console.log(res.data[0].excuse);
  });
};

function App() {
  return (
    <div className="container">
      <h1>CHIN UP</h1>
      <button onClick={handleClick}>Generate</button>
    </div>
  );
}

export default App;
