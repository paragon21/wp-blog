export interface Post {
    id: number,
    date: string,
    guid: { rendered: string },
    slug: string,
    type: string,
    link: string,
    title: { rendered: string },
    content: { rendered: string },
    excerpt: { rendered: string }
}

export interface PostsState {
    posts: Post[],
    post: Post | {}
}

export const GET_POSTS = 'GET_POSTS'
export const GET_POST = 'GET_POST'

export const SET_POSTS = 'SET_POSTS'
export const SET_POST = 'SET_POST'

export interface GetPostsAction {
    type: typeof GET_POSTS,
}

export interface GetPostAction {
    type: typeof GET_POST,
    payload: number
}

export interface SetPostsAction {
    type: typeof SET_POSTS,
    payload: Post[]
}

export interface SetPostAction {
    type: typeof SET_POST,
    payload: Post
}

export type StoreType = PostsState

export type PostsActionTypes = GetPostAction | GetPostsAction | SetPostsAction | SetPostAction