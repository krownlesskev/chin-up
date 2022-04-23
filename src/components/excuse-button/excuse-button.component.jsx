import Axios from "axios";
import { useState } from 'react';

import './excuse-button.styles.scss';

const ExcuseButton = ({ category }) => {
    const [excuse, setExcuse] = useState('');
    const newCategory = category.toLowerCase();

    const handleClick = () => {
        Axios.get(`https://excuser.herokuapp.com/v1/excuse/${newCategory}`)
            .then((res) => {
                console.log(res);
                setExcuse(res.data[0].excuse);
                console.log(excuse);
            });
    };

    return (
        <div className="excuse-button-container">
            <button onClick={handleClick}>{category}</button>
            <p>Excuse:  {excuse}</p>
        </div>
    );
};

export default ExcuseButton;