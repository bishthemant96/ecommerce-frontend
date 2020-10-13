import React, {Component} from 'react';
import axios from 'axios';

import './Home.css';

import Category from '../components/category';
import Products from '../components/Products';

class Home extends Component{

    constructor(){
        super();

        this.state = {
            categories: []
        };

        this.getProducts = this.getProducts.bind(this);
    }

    componentDidMount(){

        var self = this;
        axios({
            method: 'GET',
            url: 'https://testing.pogo91.com/api/online-store/category/?store_prefix=cake-shop'
        }).then(function(response){
            self.setState({
                categories: response.data.category,
            });
        })
    }

    getProducts(id){
        let page = 1;
        console.log("Get Products:" + id);
        
        var self = this;
        axios({
            method: 'GET',
            url: 'https://testing.pogo91.com/api/online-store/category/product/?store_prefix=cake-shop&page=' + page + '&category_id=' + id,
        }).then(function(response){
            self.setState({
                products: response.data.products,
            });
        })
    }

    render(){
        return (
            <div className="container">
                {
                    this.state.categories.map((item, index)=>{
                        if(index>=0 && index<=4)
                            return <Category clicked={this.getProducts} data={item} />;
                    })
                }

                { this.state.products && <Products data={this.state.products} /> }
            </div>
        )
    }

}

export default Home;