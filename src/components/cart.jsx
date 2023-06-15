import {useSelector} from 'react-redux'
import {getItemSelector, deleteItem} from '../redux/slices/cartslice'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'

const Cart = () => {
    const items = useSelector(getItemSelector)
    const total = items.reduce((a,b) => a+b.price, 0);
    const dispatch = useDispatch();
    
  return (
    <>
    <div className="container mt-8 mb-8">
  <div className="row d-flex justify-content-center">
            <div class="list-group">
            {items.map((item) => (
                <div className='list-group-item'>
                <div className='custom-inline'>
                <div className='col-md-2 d-flex justify-content-center'>
                <img src={item.image} alt={item.namee} width="60"/>
                </div>
                <div className='col-md-8'>
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">{item.name}</h5>
    </div>
    <p class="mb-1">{item.desc}</p>
    <small class="text-muted bold">${item.price}</small>
    </div>
    <div className='col-md-2 d-flex justify-content-center'><small>{item.quantity}</small>
    <Link >
    <button onClick={e => dispatch(deleteItem(item.id))} className="btn btn-danger text-uppercase mr-2 px-4" >Delete</button>
    </Link>
    </div>
    </div>
  </div>
  ))}
</div>
</div>
</div>
      
    </>
   
            
  )
}

export default Cart;
