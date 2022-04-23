import ExcuseButton from './components/excuses/excuse-button.component';

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
      <footer>
        <p className='footer-main-text'>I dedicate this application to my love, <span>Michelle</span>.</p>
        <p className='footer-sub-text'>Who fights every single day to be the strongest woman she already is.</p>
      </footer>
    </div>
  );
}

export default App;
