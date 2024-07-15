import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, increaseQuantity, DecreaseQuantity } from './CreatSlice';
import { useNavigate } from 'react-router-dom';

import './CartItem.css';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Cart = useSelector((state) => state.cart.items);

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = 
    Cart.reduce((total, item) => total + item.cost * item.quantity, 0);
  





  const handleIncrease = (item) => {
    dispatch(increaseQuantity(item.name));
  };
  const handleDecrease = (item) => {
    dispatch(DecreaseQuantity(item.name));
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));

  };

  const calculateTotalCost = (item) => {
    return item.cost * item.quantity;
  };

  const handleCheckoutShopping = () => {
    alert('coming soon');
  }
  const ContinueShopping = () => {
    navigate('/shoppingreact');

  }
  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount}</h2>
      <div>
        {Cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">${item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrease(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrease(item)}>+</button>
              </div>
              <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      <div className="continue_shopping_btn">
        <button onClick={(e) => ContinueShopping(e)} className="get-started-button">Continue Shopping</button>
        <br />
        <button className="get-started-button1" onClick={(e) => handleCheckoutShopping(e)}>Checkout</button>
      </div>

    </div>
    
  );
};

export default Cart;

