import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu"

const RestaurantMenu = () => {

    const { resId } = useParams()
    const menuInfo = useRestaurantMenu(resId)

    if (menuInfo === null) return <Shimmer />

    const { name, cuisines, costForTwoMessage } = menuInfo?.cards[2]?.card?.card?.info
    const menuItemCards = menuInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards

    return (
        <div className="">
            <h1 class="bg-green-700 text-center pt-28 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                {name}
            </h1>
            <p class=" bg-green-700 pt-3 pb-28 text-center text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48 dark:text-gray-200">
                {cuisines.join(', ') + ' - ' + costForTwoMessage}
            </p>
            <h2 className="text-center text-2xl font-bold py-10">Menu Items</h2>
            <ul className="bg-amber-400 py-12 px-32">
                {
                    menuItemCards.map((item) => <li className="bg-green-700 text-center mb-4 p-4 w-auto text-white text-lg flex justify-between items-center" key={item.card.info.id}><span>{item.card.info.name}</span> <span className="price">Rs. {item.card.info.price / 100 || item.card.info.defaultPrice / 100}</span></li>)
                }
            </ul>
        </div>
    )
}

export default RestaurantMenu