import { useEffect, useState } from "react"
import { MENU_URL } from "../utils/constants"

const useRestaurantMenu = (resId) => {
    const fetchMenu = async () => {
        const data = await fetch(MENU_URL + resId)
        const json = await data.json()
        setMenuInfo(json.data)
    }

    const [menuInfo, setMenuInfo] = useState(null)
    useEffect(() => {
        fetchMenu()
    }, [])

    return menuInfo
}

export default useRestaurantMenu;