import {combineReducers} from 'redux'
import {
    PostsState,
    PostsActionTypes,
    GET_POST,
    GET_POSTS,
    Post
} from '../types'

const initialState: PostsState = {
    posts: [],
    post: {}
}

export const postReducer = (state = initialState, action: PostsActionTypes):PostsState => {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload
            }
        case GET_POST:
            return {
                ...state,
                post: action.payload
            }
        default:
            return state
    }
}

export const RootReducer = combineReducers({
    post: postReducer,
    posts: postReducer
})
