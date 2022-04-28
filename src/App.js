import Navbar from './components/navbar/navbar.component';
import Header from './components/header/header.component';
// import ExcusesContainer from './components/excuses-container/excuses-container.component';
import Footer from './components/footer/footer.component';

import './styles.scss';


function App() {
  return (
    <>
      <Navbar />
      <div className='app-container'>
        <Header />
        {/* API for excuser seems to be down as of 04/28/2022, will leave it out for now */}
        {/* <ExcusesContainer /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
