import { useDispatch } from "react-redux"
import { CDN_URL } from "../utils/constants"
import { addItem } from "../utils/cartSlice"

const ItemList = ({ items }) => {
  const dispatch = useDispatch()

  const handleAddItem = (item) => {
    dispatch(addItem(item))
  }

  return (
    <div className="mt-4">
      {
        items.map(
          item =>
            <div className="text-black text-left border border-solid border-green-700 bg-green-200 p-4 flex justify-between" key={item.card.info.id}>
              <div className="w-9/12">
                <span className="font-bold">{item.card.info.name}</span>
                <span className="text-amber-800 font-bold"> | ₹{item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</span>
                <p>{item.card.info.description}</p>
              </div>
              <div className="relative w-3/12">
                <img className="w-full h-full object-cover" src={CDN_URL + item.card.info.imageId}></img>
                <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-700 py-2 px-6 rounded-lg text-white text-sm font-bold" onClick={() => handleAddItem(item)}>ADD +</button>
              </div>
            </div>
        )
      }
    </div>
  )
}

export default ItemList