import {all, put, takeEvery} from 'redux-saga/effects'
import {GET_POST, GET_POSTS, PostsActionTypes} from '../types'

export async function* getPosts() {
    console.log(1)
    try {
        const answer = await fetch('http://wp.vdovin28.beget.tech/wp-json/wp/v2/posts')
        if (answer.ok) {
            const posts = await answer.json()
            yield put({
                type: GET_POSTS,
                payload: posts
            })
        } else {
            console.error('Some error happened')
            throw new Error('Some error happened')
        }
    } catch (e) {
        console.error(e)
    }
}

export async function* getPost(action: PostsActionTypes) {
    try {
        const answer = await fetch(`http://wp.vdovin28.beget.tech/wp-json/wp/v2/posts/${action.payload}`)
        if (answer.ok) {
            const post = await answer.json()
            yield put({
                type: GET_POSTS,
                payload: post
            })
        } else {
            console.error('Some error happened')
            throw new Error('Some error happened')
        }
    } catch (e) {
        console.error(e)
    }
}

export function* watchPostsSaga() {
    yield takeEvery(GET_POSTS, getPosts);
    yield takeEvery(GET_POST, getPost);
}

export default function* rootSaga() {
    yield all([
        getPosts,
        getPost,
        watchPostsSaga()
    ])
}