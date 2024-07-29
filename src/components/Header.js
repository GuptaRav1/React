import { useState } from 'react'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus'

const Header = () => {
    const [loginBtn, setLoginBtn] = useState('Login')
    const online = useOnlineStatus()
    return (
        <div className='header'>
            <div className='logo-container'>
                <img alt='logo' src={require('../assets/logo.png')} />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Online: {online ? '🟢' : '🔴'}</li>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/grocery'}>Grocery</Link></li>
                    <li><Link to={'/about'}>About</Link></li>
                    <li><Link to={'/contact'}>Contact</Link></li>
                    <li>Cart</li>
                    <li className='login' onClick={() => { setLoginBtn('Logout') }}>{loginBtn}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header