import React, {Component} from 'react';

import './category.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Category extends Component {

    constructor(){
        super();
        this.state = {};
    }

    render(){
        return(
            <div className="category" onClick={()=> (this.props.clicked(this.props.data.id))}>
                <img className="category-image"  src={this.props.data.image==""? require("../media/default.png") : this.props.data.image} />
                <div className="category-title"> {this.props.data.name.trim()} </div>
            </div>
        )
    }

}

export default Category;