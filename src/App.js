import ExcusesContainer from './components/excuses-container/excuses-container.component';

import Footer from './components/footer/footer.component';

import './styles.scss';


function App() {
  return (
    <div className="container">
      <h1>CHIN UP</h1>
      <h2>The Mental Health App</h2>
      <ExcusesContainer />
      <Footer />
    </div>
  );
}

export default App;
