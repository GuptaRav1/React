import useUserData from "../utils/useUserData";

const User = () => {

    const user = useUserData()

    if (user === null) {
        return <h1>Loading...</h1>
    }

    return (
        <div className="user-info-card">
            <img src={user.picture.large}></img>
            <h2 className="user-name">{user.name.first + ' ' + user.name.last}</h2>
            <p className="user-bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel nunc nec nunc.</p>
            <div className="user-info">
                <p className="user-location">{user.location.city + ', ' + user.location.country}</p>
                <p></p>
                <p className="user-email">{user.email}</p>
            </div>
        </div>
    );
}

export default User;