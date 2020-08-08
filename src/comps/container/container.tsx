import React, {FunctionComponent} from 'react'
import './container.css'

interface IContainerProps {
    children: JSX.Element[] | JSX.Element,
    fluid?: boolean
}

const Container: FunctionComponent<IContainerProps> = ({children, fluid}) => {
    return (
        <div className={ !fluid ? 'container': 'container-fluid' }>
            {children}
        </div>
    )
}

export default Container