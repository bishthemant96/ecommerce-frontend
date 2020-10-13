import React, {Component} from 'react';

import AddIcon from '@material-ui/icons/Add';

import './product.css';


class Product extends Component {
    constructor(){
        super();

        this.state = {};
    }

    render(){
        return (
            <div className="product">
                <img className="product-image" src={ this.props.data.image_url==""? require("../media/default.png") : this.props.data.image_url } />
                <div className="product-price"> &#8377; {this.props.data.price_stock[0]?.mrp} </div>
                <div className="product-title"> {this.props.data.product_name} </div>
                <button className="product-button"> <span className="product-button-text"> Add </span> <AddIcon className="product-button-icon"/> </button>
            </div>
        )
    }
}

export default Product;