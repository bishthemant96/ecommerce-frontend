import React, {Component} from 'react';
import axios from 'axios';
import Pagination from "react-js-pagination";

import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Category from '../components/category';
import Product from '../components/product';

class Home extends Component{

    constructor(){
        super();

        this.state = {
            categories: [],
            products: [],
            activePage: 1,
            activeId: 0,
            num_pages: 0,
        };

        this.getProducts = this.getProducts.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
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

    getProducts(id, page=1){
        var self = this;
        axios({
            method: 'GET',
            url: 'https://testing.pogo91.com/api/online-store/category/product/?store_prefix=cake-shop&page=' + page + '&category_id=' + id,
        }).then(function(response){
            self.setState({
                activeId: id,
                products: response.data.products,
                num_pages: response.data.num_pages,
                activePage: page,
            });
        })
    }

    handlePageChange(page){
        this.getProducts(this.state.activeId, page);
    }

    render(){
        return (
            <div className="shop-container">
                <div className="header">
                    <div className="header-categories"> CATEGORIES </div>
                    <div className="header-products"> PRODUCTS </div>
                </div>

                <div className="categories">
                    { this.state.categories.map((item, index) => {return <Category key={item.id} clicked={() => (this.getProducts(item.id))} data={item} />})}
                </div>

                <div className="products">
                    { this.state.products.length!==0 ? (this.state.products.map((item, index) => (<Product key={item.product_id} data={item} />))) : <div className="default-message"> "No products are available for this category." </div> }

                    { this.state.products.length!==0 && <Pagination
                        innerClass="pagination-wrapper"
                        activePage={this.state.activePage}
                        itemsCountPerPage={20}
                        totalItemsCount={ this.state.num_pages * 20 }
                        pageRangeDisplayed={5}
                        onChange={this.handlePageChange} 
                    /> }
                </div>
            </div>
        )
    }

}

export default Home;