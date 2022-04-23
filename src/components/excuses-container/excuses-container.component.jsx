import ExcuseButton from '../excuse-button/excuse-button.component';
import './excuses-container.styles.scss';


const ExcusesContainer = () => {
    return (
        <div className='excuses-container-container'>
            <ExcuseButton category='Family' />
            <ExcuseButton category='Office' />
            <ExcuseButton category='Children' />
            <ExcuseButton category='Party' />
        </div>
    );
};

export default ExcusesContainer;