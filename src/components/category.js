import React, {Component} from 'react';

import './category.css';

class Category extends Component {

    constructor(){
        super();
        this.state = {};
    }

    render(){
        return(
            <div className="category" onClick={()=> (this.props.clicked(this.props.data.id))}>
                <img className="category-image" variant="top" src={this.props.data.image} alt-text={this.props.data.name}/>
                <div className="title"> {this.props.data.name.trim()} </div>
            </div>
        )
    }

}

export default Category;