export interface Post {
    id: number,
    date: string,
    grid: {rendered: string},
    type: string,
    link: string,
    title: {rendered: string},
    content: {rendered: string},
    excerpt: {rendered: string}
}

export interface PostsState {
    posts: Post[] ,
    post: Post | {}
}

export const GET_POSTS = 'GET_POSTS'
export const GET_POST = 'GET_POST'

interface GetPostsAction {
    type: typeof GET_POSTS,
    payload: Post[]
}

interface GetPostAction {
    type: typeof GET_POST,
    payload: Post
}

export type PostsActionTypes = GetPostAction | GetPostsAction