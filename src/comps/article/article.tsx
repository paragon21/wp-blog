import React, {
    FunctionComponent,
    useState,
    useEffect
} from 'react'
import { useStore } from 'react-redux'
import { useParams, Redirect } from 'react-router-dom'
import { Post } from '../../redux/types'
import Loader from '../loader'

const Article: FunctionComponent = () => {
    const { postID: url } = useParams()
    const { posts }: { posts: Post[] } = useStore().getState()

    const article = posts.filter(i => decodeURI(i.slug) === url)[0]
    
    return (posts.length == 0)
        ? <Loader />
        : !article 
        ? <Redirect to="/404" />
        : (
            <div className="article">
                    <header className="article__header"></header>
                    <div className="artile__body">
                        <div className="article__title">{article.title.rendered}</div>
                        <div className="article__content" dangerouslySetInnerHTML={{__html: article.content.rendered }}></div>
                    </div>
            </div>
        )
}

export default Article