import React from 'react';
import { connect } from 'react-redux';

function ItemDescription(props) {

    const item = props.shopItems.find(
        thing => `${thing.id}` === props.match.params.id
    );

    return (
        <div>
            <p className='textBox'>{item.description}</p>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        shopItems: state.shopItems
    };
};

export default connect(mapStateToProps, {})(ItemDescription);