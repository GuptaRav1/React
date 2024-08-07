import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu"
import RestMenuCategory from "./RestMenuCategory"
import { useState } from "react"

const RestaurantMenu = () => {

    const { resId } = useParams()
    const menuInfo = useRestaurantMenu(resId)
    const [showIndex, setShowIndex] = useState(0)

    if (menuInfo === null) return <Shimmer />

    const { name, cuisines, costForTwoMessage } = menuInfo?.cards[2]?.card?.card?.info
    const itemCategories = menuInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
        .filter(
            card => card?.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        )

    return (
        <div className="">
            <h1 class="bg-green-700 text-center pt-28 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">{name}</h1>
            <p class=" bg-green-700 pt-3 pb-28 text-center text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48 dark:text-gray-200">{cuisines.join(', ') + ' - ' + costForTwoMessage}</p>
            <h2 className="text-center text-2xl font-bold py-6">Menu Items</h2>
            {
                itemCategories
                    .map(
                        (itemCategory, index) =>
                            <RestMenuCategory data={itemCategory?.card?.card} showItemList={index === showIndex ? true : false} setShowIndex={() => setShowIndex(index)} />
                    )
            }
        </div>
    )
}

export default RestaurantMenu