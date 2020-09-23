import React, {
    FunctionComponent,
    useState,
    useEffect
} from 'react'
import {
    useRouteMatch,
    useParams,
    RouteComponentProps
} from 'react-router-dom'
import Loader from '../loader'
import {connect} from 'react-redux'
import {StoreType, Post} from '../../redux/types'

interface iBlogPostsProps {
    posts?: Post[] 
} 

const BlogPost: FunctionComponent<iBlogPostsProps> = ({posts}: iBlogPostsProps) => {

    const {postID} = useParams()

    if (posts) {
        console.log(posts.filter(i => decodeURI(i.slug) === postID)[0])
    }

    if (!posts) {
        return <Loader />
    } else {
        return <div></div>
    }

}


const mapStateToProps = (state: StoreType) => ({...state})

export default connect(mapStateToProps, null)(BlogPost)