import {Link, useParams} from 'react-router-dom'
import products from '../products.json'
import '../functions';

import {useDispatch} from 'react-redux'
import {addItem} from '../redux/slices/cartslice'
import CartCounter from './cartCounter';


const SingleProduct = () => {
    const {id} = useParams();
    const product = products.find((product) => product.id == id);
    const {name, imgUrl, price, desc} = product;
    const dispatch = useDispatch();
    return(
        <>
        <CartCounter></CartCounter>
<div className="container mt-5 mb-5">
  <div className="row d-flex justify-content-center">
    <div className="col-md-10">
      <div className="card">
        <div className="row">
          <div className="col-md-6">
            <div className="images p-3">
              <div className="text-center p-4"> <img id="main-image" src={imgUrl} width={250} /> </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="product p-4">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center"> <i className="fa fa-long-arrow-left" /> <span className="ml-1"><Link to="/">Back</Link></span> </div> <i className="fa fa-shopping-cart text-muted" />
              </div>
              <div className="mt-4 mb-3"> 
                <h5 className="text-uppercase">{name}</h5>
                <div className="price d-flex flex-row align-items-center"> <span className="act-price">${price}</span>
                </div>
              </div>
              <p className="about">{desc}</p>
            

              <div className="cart mt-4 align-items-center"> <button className="btn btn-danger text-uppercase mr-2 px-4" onClick={e => dispatch(addItem({name: name, price: price, quantity: 1, desc: desc, image: imgUrl}))}>Add to cart</button> <i className="fa fa-heart text-muted" /> <i className="fa fa-share-alt text-muted" /> </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </>

    )
}

export default SingleProduct;