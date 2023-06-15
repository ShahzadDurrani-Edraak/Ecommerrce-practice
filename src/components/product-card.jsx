import { Outlet, Link } from "react-router-dom";

import {useDispatch} from 'react-redux'
import {addItem} from '../redux/slices/cartslice'

const ProductCard = ({image, title, price, id, desc}) =>{
  const dispatch = useDispatch();
    return(
        <>
        <Link to={`/product/${id}`} className="productLink">
            <div className="card" style={{width: '18rem'}}>
  <img className="card-img-top" src={image} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">Rs. {price}</p>
    <Link >
    <button className="btn btn-danger text-uppercase mr-2 px-4" onClick={e => dispatch(addItem({name: title, price: price, quantity: 1 , desc: desc, image:image}))}>Add to cart</button>
    </Link>
  </div>
</div>
</Link>
        </>
    )
}

export default ProductCard;