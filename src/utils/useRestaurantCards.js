import { useState, useEffect } from 'react'
import { API_URL } from './constants'


const useRestaurantCards = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([])
    const [filterredListOfRestaurants, setFilterredListOfRestaurants] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        let tempListOfRestaurants
        const data = await fetch(API_URL)
        const json = await data.json()
        tempListOfRestaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        setListOfRestaurants(tempListOfRestaurants)
        setFilterredListOfRestaurants(tempListOfRestaurants)
    }

    return { listOfRestaurants, filterredListOfRestaurants, setFilterredListOfRestaurants }

}

export default useRestaurantCards