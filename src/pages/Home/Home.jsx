import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";
import './home.styles.scss';
import ExcusesContainer from "../../components/excuses-container/excuses-container.component";

const Home = () => {
    return (
        <div className="app-container">
            <Header />
            <ExcusesContainer />
            <Footer />
        </div>
    );
};

export default Home;