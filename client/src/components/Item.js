import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import ItemDescription from './ItemDetails';
import ItemShipping from './ItemShipping';

import './ItemList.css';

function Item(props) {

    const item = props.shopItems.find(
        thing => `${thing.id}` === props.match.params.id
    );

    if (!props.shopItems.length || !item) {
        return <h2>Loading item data. . .</h2>;
    }

    return (
        <div >
            <div className='itemHeader'>
                <div className='imageWrapper'>
                    <img src={item.imageUrl} alt={item.name}></img>
                </div>
                <div className='itemTitleWrapper'>
                    <h2>{item.name}</h2>
                    <h2>${item.price}</h2>
                </div>
            </div>

            <nav className='itemSubNav'>
                <NavLink className='itemSubNavDet' exact to={`/item-list/${item.id}`}>
                    Details
                </NavLink>
                <NavLink className='itemSubNavDet' to={`/item-list/${item.id}/shipping`}>
                    Shipping
                </NavLink>
            </nav>

            <Route
                exact
                path="/item-list/:id"
                render={props => <ItemDescription {...props} item={item} />} />

            <Route
                path="/item-list/:id/shipping"
                render={props => <ItemShipping {...props} item={item} />} />
        </div>
    )

}


const mapStateToProps = state => {
    return {
        shopItems: state.shopItems
    };
};

export default connect(mapStateToProps, {})(Item);