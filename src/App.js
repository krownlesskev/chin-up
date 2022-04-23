import Header from './components/header/header.component';
import ExcusesContainer from './components/excuses-container/excuses-container.component';
import Footer from './components/footer/footer.component';

import './styles.scss';


function App() {
  return (
    <div className='app-container'>
      <Header />
      <ExcusesContainer />
      <Footer />
    </div>
  );
}

export default App;
