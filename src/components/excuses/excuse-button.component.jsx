import Axios from "axios";
import { useState } from 'react';



const ExcuseButton = ({ category }) => {
    const [excuse, setExcuse] = useState('');
    const [buttonCategory, setButtonCategory] = useState('');
    const newCategory = category.toLowerCase();
    // Fetches data from api sets it in state


    const handleClick = () => {
        Axios.get(`https://excuser.herokuapp.com/v1/excuse/${newCategory}`)
            .then((res) => {
                console.log(res);
                setExcuse(res.data[0].excuse);
                setButtonCategory(res.data[0].category);
                console.log(excuse);
            });
    };

    return (
        <>
            <button onClick={handleClick}>{category}</button>
            <p>Excuse:  {excuse}</p>
            <p>Category:  {buttonCategory}</p>
        </>
    );
};

export default ExcuseButton;