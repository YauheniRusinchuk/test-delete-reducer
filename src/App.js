import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { fetchRequest, deletePost } from './actions';
import { useDispatch, useSelector } from 'react-redux'
import { getByTitle } from '@testing-library/react';

function App() {

  const dispatch = useDispatch();
  const posts = useSelector(state => state.ReducerPosts.posts)


  useEffect(() => {
    dispatch(fetchRequest());
  }, [])

  const handleClickDelete = (id) => {
    dispatch(deletePost(id))
  }


  return (
    <div className="App">
      <h1>HELLO REACT AND REDUX</h1>
      {posts && posts.map((item) => {
        return <div key={item.id}>{item.id} - {item.title} <button onClick={() => handleClickDelete(item.id)}>УДАЛИТЬ</button></div>
      })}
    </div>
  );
}

export default App;
