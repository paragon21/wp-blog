import React, {Component} from 'react'
import './error-handler.css'

interface IErrorHandlerProps {
    children?: JSX.Element
}

interface IErrorHandlerState {
    error: boolean
}

class ErrorHandler extends Component<IErrorHandlerProps, IErrorHandlerState> {
    readonly state: IErrorHandlerState = {
        error: false
    }
   

    componentDidCatch(err: Error) {
        this.setState(prev => ({...this.state, error: !prev.error}))
        console.error(err)
    }

    render() {
        const err = this.state.error

        if (err) {
            return <div>Error!</div>
        } else {
            return (
                this.props.children
            )
        }
    }
    
}

export default ErrorHandler;