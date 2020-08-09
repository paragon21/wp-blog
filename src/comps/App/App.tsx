import React, {
  FunctionComponent,
  useEffect,
  Dispatch
} from 'react';
import {connect} from 'react-redux'
import './App.css';
import Container from '../container'
import Header from '../header'
import {PostsActionTypes, PostsState} from '../../redux/types'
import {getPosts} from '../../redux/actions'

interface IAppProps {
  getPostData: () => void
}

function App<FunctionComponent>(props: IAppProps) {

  useEffect( () => {
    props.getPostData()
  }, [])


  return (
    <div className="App">
      <Container>
        <Header />
        <h1> Блог по IT, <br /> инструкции, мануалы, <br /> оптимизации </h1>
        <h2> + много чего еще</h2>
      </Container>     
    </div>
  );
}

const mapStateToProps = (state: PostsState) => ({...state})

const mapDispatchtoProps = (dispatch: Dispatch<PostsActionTypes>) => ({
  getPostData: () => dispatch(getPosts())
})

export default connect(mapStateToProps, mapDispatchtoProps)(App);
