import React, {Component} from 'react';


class Products extends Component {
    constructor(){
        super();

        this.state = {};
    }

    render(){
        return (
            <div>
                {   this.props.data.map((item, index)=>(
                        <li>  {item.product_name}  </li>
                    ))
                }
            </div>
        )
    }
}

export default Products;