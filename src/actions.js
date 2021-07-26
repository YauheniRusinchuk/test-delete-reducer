import axios from 'axios'


export function fetchRequest() {
  return (dispatch) => {
    axios.get('https://jsonplaceholder.typicode.com/posts?')
      .then(res => {
        console.log("RESPONSE : ", res)
        dispatch({
          type: "GET_DATA",
          payload: res.data
        })
      }).catch((err) => { })
  }
}


export function deletePost(id) {
  console.log("delete post : ", id)
  return (dispatch) => {
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => {
        console.log("RESPONSE DELETE")
        dispatch({
          type: "DELETE_POST",
          payload: id
        })
      }).catch((err) => {

      })
  }
}