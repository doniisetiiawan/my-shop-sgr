import React from 'react';
import './ProductList.css';

function ProductList(props) {
  return (
    <ul>
      {props.items.map((item) => (
        <li
          key={item.code}
          onClick={() => props.selectHandler(item.code)}
          className={`${item.selected ? 'selected' : ''}`}
        >
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
