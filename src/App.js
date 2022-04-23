import ExcuseButton from './components/excuse-button/excuse-button.component';
import Footer from './components/footer/footer.component';

import './styles.scss';



function App() {
  return (
    <div className="container">
      <h1>CHIN UP</h1>
      <h2>The Mental Health App</h2>
      <div className='excuse-generator'>
        <ExcuseButton category='Family' />
        <ExcuseButton category='Office' />
        <ExcuseButton category='Children' />
        <ExcuseButton category='Party' />
      </div>
      <Footer />
    </div>
  );
}

export default App;
