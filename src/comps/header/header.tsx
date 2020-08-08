import React, {FunctionComponent} from 'react'
import './header.css'
import SocialBar from '../social-bar'

const Header: FunctionComponent = () => {
    return (
        <header className="header">
            <a href="/#" className="header__logo">Blog</a>
            <SocialBar />
        </header>
    )
}

export default Header