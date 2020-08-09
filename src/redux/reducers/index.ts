import {
    PostsState,
    PostsActionTypes,
    SET_POST,
    SET_POSTS
} from '../types'

const initialState: PostsState = {
    posts: [],
    post: {}
}

export const postReducer = (state = initialState, action: PostsActionTypes):PostsState => {
    switch (action.type) {
        case SET_POSTS:
            return ({
                ...state,
                posts: action.payload
            })
        case SET_POST:
            return ({
                ...state,
                post: action.payload
            })
        default:
            return state
    }
}

