import React, {
    FunctionComponent,
    useState,
    useEffect
} from 'react'
import {useParams} from 'react-router-dom'
import {Post} from '../../redux/types'
import Loader from '../loader'

const Atricle: FunctionComponent = () => {
    const [article, setArticle] = useState<Post>()
    const {postID: url} = useParams()

    useEffect(() => {
        (async function() {
            const answer = await fetch(`http://wp.vdovin28.beget.tech/wp-json/wp/v2/posts?slug="${url}"`)
            const result = await answer.json()
            setArticle(prev => ({...result[0]}) )
        }())
    }, [])

    useEffect(() => console.log(article), [article])

    return !article
        ? <Loader />
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

export default Atricle