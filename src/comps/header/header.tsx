import React, {FunctionComponent} from 'react'
import { Link } from 'react-router-dom'
import SocialBar from '../social-bar'
import './header.css'


const Header: FunctionComponent = () => {
    return (
        <header className="header">
            <Link to="/"><span className="header__logo">Blog</span></Link>
            <SocialBar />
        </header>
    )
}

export default Header