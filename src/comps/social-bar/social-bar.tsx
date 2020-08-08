import React, { FunctionComponent } from 'react'
import './social-bar.css'

const SocialBar: FunctionComponent = () => {
    return (
        <div className="social-bar">
            <a className="social-bar__item" href="/#" ><img src="/img/social/insta2.png"/></a>
            <a className="social-bar__item" href="/#" ><img src="/img/social/github2.png"/></a>
            <a className="social-bar__item" href="/#" ><img src="/img/social/vk2.png"/></a>
        </div>
    )
}

export default SocialBar