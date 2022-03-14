import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { cartContext } from '../../Context/CartProvider'

const ProductItem = ({product, category}) => {
    const [cart, setCart] = useContext(cartContext)
    const AddToCart =(product)=>{
        const{id} = product
        const exist = cart.findIndex(x=> x.id === id);
        console.log(exist)
        if(exist!==-1){
            cart[exist].qty++
            console.log(cart)
        }
        else{
            setCart([...cart,{...product, qty:1}])
        }
        
    }
  return (
    <div class="col-sm-12 col-md-4 col-lg-3 mb-4 mb-lg-0">
            
    <div class="card">
        <div class="d-flex justify-content-between p-3">
        </div>
        <img
            src={product.imageUrl}
            class="card-img-top"
            alt="Laptop"
        />
        <div class="card-body">
            <div class="d-flex justify-content-between">
            <p class="small"><a href="#!" class="text-muted">{category}</a></p>
            </div>

            <div class="d-flex justify-content-between mb-3">
            <Link to={`products/${category}/${product.id}`} style={{textDecoration:"none", color:"black"}} >
                <h5 class="mb-0">{product.name}</h5>
            </Link>
            <h5 class="text-dark mb-0">£{product.price}</h5>
            </div>
            <div className="text-center">
            <button onClick={()=>AddToCart(product)} type="button" class="btn btn-secondary btn-block">Add to cart</button>
            </div>
            
        </div>
    </div>
</div> 
  )
}

export default ProductItem