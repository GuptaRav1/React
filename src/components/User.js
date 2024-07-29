import useUserData from "../utils/useUserData";

const User = () => {

    const user = useUserData()

    if (user === null) {
        return <h1>Loading...</h1>
    }

    return (
        <div className="w-64 border-2 border-gray-300 bg-amber-400 rounded-lg shadow-lg p-4">
            <img src={user.picture.large} alt="User" className="w-4/5 h-auto rounded-full mb-4 mx-auto" />
            <h2 className="text-xl font-bold text-black mb-2">{user.name.first + ' ' + user.name.last}</h2>
            <p className="text-sm text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel nunc nec nunc.</p>
            <div className="bg-amber-600 p-2 rounded-lg">
                <p className="text-sm text-gray-200 mb-1">{user.location.city + ', ' + user.location.country}</p>
                <p className="text-sm text-gray-200">{user.email}</p>
            </div>
        </div>
    )
}

export default User;