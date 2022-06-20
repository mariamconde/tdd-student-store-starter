import React from 'react'
import { Link } from 'react-router-dom'
import "./ProductCard.css"

function ProductCard(props) {
  let ourDescription = (props.showDescription == true) ? props.product.description : ''
  
  
  
  
  return (
    <div className="product-card">
      <div className='product-name'>{props.product.name}</div>
      <div className='product-price'>{`$${props.product.price}`}</div>
      <div className='product-description'>{ourDescription}</div>
      
      <Link className='media' to={`/products/${props.product.id}`}> 
        <img className='image' src={props.product.image}></img>
      </Link>
      <button className='add' onClick={() => props.handleAddItemToCart(props.product.id)}>+</button>
      <button className='remove' onClick={() => props.handleRemoveItemToCart(props.product.id)}>-</button>

    </div>
  )
}

export default ProductCard