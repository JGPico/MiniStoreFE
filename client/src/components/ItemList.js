import React from 'react';
import './ItemList.css';

function ItemList(props) {

    return (
        <div >
            {props.items.map(item => (
                <div key={item.id}>
                    <img className='itemImage' src={item.imageUrl} alt={item.name}></img>
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                </div>
            ))}
        </div>
    )

}


export default ItemList;