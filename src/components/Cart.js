import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList"
import { clearCart } from "../utils/cartSlice"

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items)
  const dispatch = useDispatch()
  const handelClearCart = () => {
    dispatch(clearCart())
  }
  return (
    <div className="text-center w-6/12 m-auto">
      <h1 className="font-bold bg-green-700 text-center text-3xl text-white p-6 my-4">Cart Items</h1>
      <button className='px-4 py-2 cursor-pointer mr-2 bg-green-700 text-white rounded-lg' onClick={handelClearCart}>Clear Cart</button>
      {cartItems.length === 0 && <h1>Your Cart is Empty. Add Items to the Cart</h1>}
      <ItemList items={cartItems} />
    </div>
  )
}

export default Cart