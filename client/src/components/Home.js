import React from 'react';
import bazaar from '../assets/Fancy.jpg';

function Home(props) {

    return (
        <div className='homeWrapper'>
            <img className='homeSplash' src={bazaar} alt='Splashscreen'>
            </img>
            <button className='standardButton shopButton'>
                Shop Now!
            </button>
        </div>
    )

}


export default Home;