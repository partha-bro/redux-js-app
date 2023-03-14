import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/features/cartSlice';
import { fetchProducts, STATUS } from '../store/features/productSlice'

const Products = () => {
    const { data, status } = useSelector(state=>state.product)
    const dispatch = useDispatch()

    useEffect(
        ()=>{
            // thunk call for our API fetch data
            dispatch(fetchProducts())
        },[]
    )

    const addHandler = (item) => {
        dispatch(add(item))
    }

    if(status === STATUS.LOADING) return <h1 style={{color:'green'}}>Loading...</h1>
    if(status === STATUS.ERROR) return <h1 style={{color:'red'}}>Something Went Wrong!</h1>

  return (
    <div className='productsWrapper'>
      { data.map(item=>{
            return <div className='card' key={item.id}>
                <img src={item.image} alt={item.title} />
                <h4>{item.title}</h4>
                <h5>{item.price}</h5>
                <button onClick={()=>addHandler(item)} className='btn'>Add to cart</button>
            </div>
        })
      }
    </div>
  );
}

export default Products;
