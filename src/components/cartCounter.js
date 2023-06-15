import {useSelector} from 'react-redux'
import {getItemSelector} from '../redux/slices/cartslice'
import {Link} from 'react-router-dom'

const CartCounter = () => {
    const items = useSelector(getItemSelector)
    const total = items.reduce((a,b) => a+b.price, 0);
  return (
    <>
    <div className="alert alert-success">
      <h3 className="text-center">
        Total Items: {items.length} (Rs. {total})/-
      </h3>
      <Link to="/cart">Cart</Link>
    </div>
    </>
  );
}

export default CartCounter;