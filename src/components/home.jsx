import ProductList from './product-list';
import ProductCard from './product-card';
import products from '../products.json'
import '../App.css';
import CartCounter from "./cartCounter";

const Home = () => {
    return(
    <>
    <CartCounter></CartCounter>
        <ProductList>
        {products.map((product) => (
      <ProductCard 
      image={product.imgUrl}
      title={product.name}
      price={product.price}
      id = {product.id}
      desc={product.desc}
      ></ProductCard>
    ))}
      
    </ProductList>
    </>
    )
}

export default Home;