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
            <div data-testid='foodItems' className="flex justify-between p-4 text-left text-black bg-green-200 border border-green-700 border-solid" key={item.card.info.id}>
              <div className="w-9/12">
                <span className="font-bold">{item.card.info.name}</span>
                <span className="font-bold text-amber-800"> | ₹{item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</span>
                <p>{item.card.info.description}</p>
              </div>
              <div className="relative w-3/12">
                <img className="object-cover w-full h-full" src={CDN_URL + item.card.info.imageId}></img>
                <button className="absolute px-6 py-2 text-sm font-bold text-white -translate-x-1/2 -translate-y-1/2 bg-green-700 rounded-lg top-1/2 left-1/2" onClick={() => handleAddItem(item)}>ADD +</button>
              </div>
            </div>
        )
      }
    </div>
  )
}

export default ItemList