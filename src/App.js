import Navbar from './components/navbar/navbar.component';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './styles.scss';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/chin-up' element={<Home />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
