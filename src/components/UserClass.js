import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: this.props.user
        }
    }

    async componentDidMount() {
        const data = await fetch('https://randomuser.me/api/')
        const json = await data.json()
        this.setState({
            user: json.results[0]
        })
    }

    componentDidUpdate() {
        console.log('did update')
    }

    componentWillUnmount() {
        console.log('will unmount')

    }

    render() {
        const { name, picture, location, email } = this.state.user
        return (
            <div className="user-info-card">
                <img src={picture.large}></img>
                <h2 className="user-name">{name.first + ' ' + name.last}</h2>
                <p className="user-bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel nunc nec nunc.</p>
                <div className="user-info">
                    <p className="user-location">{location.city + ', ' + location.country}</p>
                    <p></p>
                    <p className="user-email">{email}</p>
                </div>
            </div>
        )
    }
}

export default UserClass;