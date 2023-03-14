import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/features/cartSlice';

const Cart = () => {
    const products = useSelector(state=>state.cart)
    const dispatch = useDispatch()

    const removeHandler = (id) => {
        dispatch(remove(id))
    }
  return (
    <div>
      <h3>Cart</h3>
      <div className='cartWrapper'>
        {
            products.map(product=>{
                return <div className='cartCard' key={product.id}>
                <img src={product.image} alt={product.title} />
                <h4>{product.title}</h4>
                <h5>{product.price}</h5>
                <button onClick={()=>removeHandler(product.id)} className='btn'>Remove</button>
            </div>
            })
        }
      </div>
    </div>
  );
}

export default Cart;
