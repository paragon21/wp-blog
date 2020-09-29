import { all, put, call, takeEvery } from 'redux-saga/effects'
import { GET_POST, GET_POSTS, SET_POST, SET_POSTS, GetPostAction } from '../types'

//http://wp.vdovin28.beget.tech/wp-json/wp/v2/posts

export function* getPosts() {
    const obj = yield call (() => {
        return fetch(`http://wp.vdovin28.beget.tech/wp-json/wp/v2/posts`)
                .then(answer => answer.json())
                .then(result => result)
                .catch(err => {
                    console.error(`Err, ${err}`)
                    throw new Error(`Err, ${err}`)
                })
    })
    yield put({type: SET_POSTS, payload: obj})
}


export function* getPost(action: GetPostAction) {
    const obj = yield call (() => {
        return fetch(`http://wp.vdovin28.beget.tech/wp-json/wp/v2/posts/${action.payload}`)
                .then(answer => answer.json())
                .then(result => result)
                .catch(err => {
                    console.error(`Err, ${err}`)
                    throw new Error(`Err, ${err}`)
                })
    })
    yield put({type: SET_POST, payload: obj})
}


export function* watchPostsSaga() {
    yield takeEvery(GET_POSTS, getPosts);
    yield takeEvery(GET_POST, getPost);
}

export default function* rootSaga() {
    yield all([
        watchPostsSaga()
    ])
}