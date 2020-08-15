import React, { FunctionComponent } from 'react'
import './post-card.css'
import { Post } from '../../redux/types'
import { Link } from 'react-router-dom'

interface IPostCardProps {
    post: Post ,
    color: string
}

const PostCard: FunctionComponent<IPostCardProps> = ({post, color}) => {
    return (
        <Link className="posts-container__card" to={`/post/${post.slug}`}>
            <div key={post.guid.rendered} className={`post-card`}>
                <header className="post-card__header"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}>
                </header>
                <time className="post-card__subheader"
                    dangerouslySetInnerHTML={{ __html: new Date(post.date).toLocaleDateString() }}>
                </time>
                <p className="post-card__body"
                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}>
                </p>
            </div>
        </Link>
        
    )
}

PostCard.defaultProps = {

}

export default PostCard