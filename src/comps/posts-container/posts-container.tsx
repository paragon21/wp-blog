import React, {
    FunctionComponent
} from 'react'
import './posts-container.css'
import Loader from '../loader'
import PostCard from '../post-card'
import { connect, useStore } from 'react-redux'
import { Post } from '../../redux/types'

const randomColor = (): string => {
    let colors: string[] = ['yellow', 'pink', 'lightviolet', 'sky', 'blue', 'coral'];
    return colors[Math.floor(Math.random() * colors.length)]
}

const RecentlyPosts: FunctionComponent = () => {
    
    const {posts}: {posts: Post[]} = useStore().getState()

    return (posts.length == 0) 
        ? <Loader /> 
        : ( 
            <div className="posts-container">
                {
                    posts.map( post => <PostCard key={post.id} color={randomColor()} post={post} /> )
                }
            </div>
        )
}

export default RecentlyPosts