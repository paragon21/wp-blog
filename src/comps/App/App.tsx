import React, {
  FunctionComponent,
  useEffect,
  Dispatch
} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import { connect } from 'react-redux'
import Container from '../container'
import Header from '../header'
import RecentlyPosts from '../recently-posts'
import ErrorHandler from '../error-handler'
import { PostsActionTypes, PostsState } from '../../redux/types'
import { getPosts } from '../../redux/actions'

interface IAppProps {
  getPostData: () => void
}

const App: FunctionComponent<IAppProps> = (props: IAppProps) => {

  useEffect(() => {
    props.getPostData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Router>
      <Route exact path='/'>
        <div className='app'>
          <ErrorHandler>
            <Container>
              <Header />
              <h1> Блог по IT, <br /> инструкции, мануалы, <br /> оптимизации </h1>
              <h2> + много чего еще</h2>
              <RecentlyPosts />
            </Container>
          </ErrorHandler>
      </div>
      </Route>
    </Router>
  );
}






const mapStateToProps = (state: PostsState) => ({ ...state })

const mapDispatchtoProps = (dispatch: Dispatch<PostsActionTypes>) => ({
  getPostData: () => dispatch(getPosts())
})

export default connect(mapStateToProps, mapDispatchtoProps)(App);
