import React, {
    FunctionComponent
} from 'react'
import './posts-container.css'
import Loader from '../loader'
import PostCard from '../post-card'
import { connect } from 'react-redux'
import { StoreType, Post } from '../../redux/types'


interface IRecentlyPostsProps {
    posts?: Post[]
}

const randomColor = (): string => {
    let colors: string[] = ['yellow', 'pink', 'lightviolet', 'sky', 'blue', 'coral'];
    return colors[Math.floor(Math.random() * colors.length)]
}

const RecentlyPosts: FunctionComponent<IRecentlyPostsProps> = (props) => {
    
    const { posts } = props
    return (!posts) ? <Loader /> : 
        <div className="posts-container">
            {
                posts.map( post => <PostCard key={post.id} color={randomColor()} post={post} /> )
            }
        </div>
}

RecentlyPosts.defaultProps = {
    posts: []
}

const mapStateToProps = (state: StoreType) => ({ posts: state.posts })

export default connect(mapStateToProps, null)(RecentlyPosts)