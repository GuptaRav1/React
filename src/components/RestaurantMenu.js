import { useEffect, useState } from "react"
import { MENU_URL } from "../utils/constants"
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"

const RestaurantMenu = () => {

    const [menuInfo, setMenuInfo] = useState(null)

    const { resId } = useParams()

    useEffect(() => {
        fetchMenu()
    }, [])

    const fetchMenu = async () => {
        const data = await fetch(MENU_URL + resId)
        const json = await data.json()
        setMenuInfo(json.data)
    }

    if (menuInfo === null) return <Shimmer />

    const { name, cuisines, costForTwoMessage } = menuInfo?.cards[2]?.card?.card?.info

    const menuItemCards = menuInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards

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