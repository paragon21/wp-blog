import React, {
    FunctionComponent,
    useState,
    useEffect
} from 'react'

interface IBlogPost {
    id: number,
    title: {rendered: string},
    content: {rendered: string},
}

const BlogPost: FunctionComponent = () => {

    const [post, setPost] = useState<IBlogPost | undefined>()

    useEffect( () => {
        (async () => {
            const answer = await fetch('http://wp.vdovin28.beget.tech/wp-json/wp/v2/posts/1')
            if (answer.ok) {
                const post = await answer.json()
                setPost(post)
            }
        })();
    }, [])


    if (!post) {

        return null

    } else {

        return (
            <div className="blog-post">
                <div className="blog-post__inner">
                    <h3 className="blog-post__header">{post.title.rendered}</h3>
                    <div className="blog-post__body" dangerouslySetInnerHTML={{__html: post.content.rendered}}></div>
                </div>
            </div>
        )
    }
}

export default BlogPost