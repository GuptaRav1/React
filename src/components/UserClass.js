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
        // console.log('did update')
    }

    componentWillUnmount() {
        // console.log('will unmount')

    }

    render() {
        const { name, picture, location, email } = this.state.user

        return (
            <div className="w-64 border-2 border-gray-300 bg-amber-400 rounded-lg shadow-lg p-4">
                <img src={picture.large} alt="User" className="w-4/5 h-auto rounded-full mb-4 mx-auto" />
                <h2 className="text-xl font-bold text-black mb-2">{name.first + ' ' + name.last}</h2>
                <p className="text-sm text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel nunc nec nunc.</p>
                <div className="bg-amber-600 p-2 rounded-lg">
                    <p className="text-sm text-gray-200 mb-1">{location.city + ', ' + location.country}</p>
                    <p className="text-sm text-gray-200">{email}</p>
                </div>
            </div>
        )
    }
}

export default UserClass;