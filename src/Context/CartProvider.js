import {createContext, useState} from 'react'

export const cartContext = createContext()

const CartProvider =(props) =>{
    const [cart, setCart] = useState([])
    const [products, setProducts]= useState([])

    const removeItem = key => {
        setCart([...cart].filter(item => item.id !== key));
      };
    return(
        <cartContext.Provider value={[cart,setCart,products,setProducts]}>
            {props.children}
        </cartContext.Provider>
    )
}

export default CartProvider;