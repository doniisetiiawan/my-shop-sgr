import React from 'react';
import './Catalog.css';
import ProductList from './ProductList';
import products from './products';

class Catalog extends React.Component {
  constructor() {
    super();
    this.state = { products };
  }

  select = (productCode) => {
    const productList = this.state.products.map((p) => {
      if (p.code === productCode) {
        p.selected = !p.selected;
      }
      return p;
    });
    this.setState({ products: productList });
  };

  render() {
    return (
      <div>
        <h2>Wine Catalog</h2>
        <ProductList
          items={this.state.products}
          selectHandler={this.select}
        />
      </div>
    );
  }
}

export default Catalog;
