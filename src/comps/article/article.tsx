import React, {
    FunctionComponent,
    useState,
    useEffect
} from 'react'
import './article.css'
import { useStore } from 'react-redux'
import { useParams, Redirect, useHistory } from 'react-router-dom'
import { Post } from '../../redux/types'
import Loader from '../loader'

const Article: FunctionComponent = () => {
    const history = useHistory()
    const { postID : url } = useParams()
    const { posts }: { posts: Post[] } = useStore().getState()

    useEffect(() => console.log(history), [])

    const goBackHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        history.push('/')
    }

    const article = posts.filter(i => decodeURI(i.slug) === url)[0]
    
    return (posts.length == 0)
        ? <Loader />
        : !article 
        ? <Redirect to="/404" />
        : (
            <div className="article">
                    <header className="article__header">
                        <a onClick={goBackHandler} className="article_goback" href='#/'>Go Back</a>
                    </header>
                    <div className="article__body">
                        <h1 className="article__title">{article.title.rendered}</h1>
                        <div className="article__content" dangerouslySetInnerHTML={{__html: article.content.rendered }}></div>
                    </div>
            </div>
        )
}

export default Article