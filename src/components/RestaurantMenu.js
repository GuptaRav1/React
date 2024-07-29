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
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(', ') + ' - ' + costForTwoMessage}</p>
            <h2>Menu Items</h2>
            <ul>
                {
                    menuItemCards.map((item) => <li key={item.card.info.id}><span>{item.card.info.name}</span> <span className="price">Rs. {item.card.info.price / 100 || item.card.info.defaultPrice / 100}</span></li>)
                }
            </ul>
        </div>
    )
}

export default RestaurantMenu