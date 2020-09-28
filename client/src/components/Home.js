import React from 'react';
import './Home.css';
import bazaar from '../assets/Fancy.jpg';

function Home(props) {

    const routeToShop = e => {
        e.preventDefault();
        props.history.push('/item-list');
    };

    return (
        <div className='homeWrapper'>
            <img className='homeSplash' src={bazaar} alt='Splashscreen'>
            </img>
            <button onClick={routeToShop} className='standardButton shopButton'>
                Shop Now!
            </button>
        </div>
    )

}


export default Home;