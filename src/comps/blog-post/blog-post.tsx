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
import './blog-post.css'

interface iBlogPostsProps {
    posts?: Post[] 
} 

const BlogPost: FunctionComponent<iBlogPostsProps> = ({posts}: iBlogPostsProps) => {

    const {postID} = useParams()
  
    if (posts!.length > 0) {
        return (
            <div className="plog-post">
                {/* <header className="blog-post__header"></header>
                <h3>{posts.title.rendered}</h3> */}
                {console.log(posts?.filter(i => decodeURI(i.slug) == postID))}
            </div>
        )
    } else {
        return <Loader /> 
    }

}


const mapStateToProps = (state: StoreType) => ({...state})

export default connect(mapStateToProps, null)(BlogPost)