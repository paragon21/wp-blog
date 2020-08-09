import React, { FunctionComponent } from 'react'
import './social-bar.css'

const SocialBar: FunctionComponent = () => {
    return (
        <div className="social-bar">
            <a className="social-bar__item" href="/#" ><img src="/img/social/insta2.png" alt="instagram icon" /></a>
            <a className="social-bar__item" href="/#" ><img src="/img/social/github2.png" alt="github icon" /></a>
            <a className="social-bar__item" href="/#" ><img src="/img/social/vk2.png" alt="vkontakte icon" /></a>
        </div>
    )
}

export default SocialBar