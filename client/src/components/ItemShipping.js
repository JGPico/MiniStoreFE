import React from 'react';
import { connect } from 'react-redux';

function ItemShipping(props) {

    const item = props.shopItems.find(
        thing => `${thing.id}` === props.match.params.id
    );

    return (
        <div>
            <p className='textBox'>{item.shipping}</p>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        shopItems: state.shopItems
    };
};

export default connect(mapStateToProps, {})(ItemShipping);
