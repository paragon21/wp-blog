import {Post, GET_POST, GET_POSTS, PostsActionTypes} from '../types'


export const getPost = (post: Post): PostsActionTypes => {
    return ({
        type: GET_POST,
        payload: post
    })
}

export const getPosts = (): PostsActionTypes => {
    return ({
        type: GET_POSTS,
    })
}