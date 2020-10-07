import React from 'react';
import { connect } from 'react-redux';
import './ItemList.css';

function ItemList(props) {

    return (
        <div >
            {props.shopItems.map(item => (
                <div key={item.id}>
                    <img className='itemImage' src={item.imageUrl} alt={item.name}></img>
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                </div>
            ))}
        </div>
    )

}

const mapStateToProps = state => {
    return {
        shopItems: state.shopItems
    };
};

export default connect(mapStateToProps, {})(ItemList);