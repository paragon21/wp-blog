import React, {
    FunctionComponent
} from 'react'
import './recently-posts.css'
import Loader from '../loader'
import { connect } from 'react-redux'
import { StoreType, Post } from '../../redux/types'


interface IRecentlyPostsProps {
    posts?: Post[]
}

const RecentlyPosts: FunctionComponent<IRecentlyPostsProps> = (props) => {

    const randomColor = (): string => {
        let colors: string[] = ['yellow', 'pink', 'lightviolet', 'sky', 'blue', 'coral'];
        return colors[Math.floor(Math.random() * colors.length)]
    }

    const clickHandler = (e: React.MouseEvent): void => {
        const elem = e.target as Element
        // if (elem.className.match(/recently\-posts\_\_card/gi)) {
        //     console.log(elem)
        // }
        console.log(elem.parentNode)

    }

    if (!props.posts) {
        return <Loader />
    } else {
        return (
            <div className="recently-posts">
                {
                    props.posts.map(post => {
                        return (
                            <div data-link={post.slug} onClick={clickHandler} key={post.guid.rendered} className={`recently-posts__card recently-posts__card_${randomColor()}`}>
                                <header className="recently-posts__header"
                                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}>
                                </header>
                                <time className="recently-posts__subheader"
                                    dangerouslySetInnerHTML={{ __html: new Date(post.date).toLocaleDateString() }}>
                                </time>
                                <div className="recently-posts__body"
                                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

RecentlyPosts.defaultProps = {
    posts: []
}

const mapStateToProps = (state: StoreType) => ({ posts: state.posts })

export default connect(mapStateToProps, null)(RecentlyPosts)