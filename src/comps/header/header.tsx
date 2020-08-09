import React, {FunctionComponent} from 'react'
import {Link} from 'react-router-dom'
import './header.css'
import SocialBar from '../social-bar'

const Header: FunctionComponent = () => {
    return (
        <header className="header">
            <Link to="/"><span className="header__logo">Blog</span></Link>
            <SocialBar />
        </header>
    )
}

export default Header