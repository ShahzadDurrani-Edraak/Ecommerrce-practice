import {useSelector} from 'react-redux'
import {useEffect} from 'react'
import {getItemSelector, deleteItem} from '../redux/slices/cartslice'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'

const Cart = () => {
    const items = useSelector(getItemSelector)
    const total = items.reduce((a,b) => a+b.price, 0);
    const dispatch = useDispatch();
    
    useEffect(() => {
        //console.log(items);
      },[items])
     function handleDelete (data){
        dispatch(deleteItem(data.id))
        console.log(items);
     } 

  return (
    <>
    <div className="container mt-8 mb-8">
  <div className="row d-flex justify-content-center">
            <div className="list-group">
            {items.map((item) => (
                <div className='list-group-item'>
                <div className='custom-inline'>
                <div className='col-md-2 d-flex justify-content-center'>
                <img src={item.image} alt={item.namee} width="60"/>
                </div>
                <div className='col-md-8'>
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">{item.name}</h5>
    </div>
    <p classNam="mb-1">{item.desc}</p>
    <small className="text-muted bold">${item.price}</small>
    </div>
    <div className='col-md-2 d-flex justify-content-center'><small className=' item-quantity'>{item.quantity}</small>
    <Link>
    <button onClick={e => handleDelete(item)} className="btn btn-danger text-uppercase mr-2 px-4" >Delete</button>
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
