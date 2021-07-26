

const GET_DATA = 'GET_DATA'
const DELETE_POST = "DELETE_POST"


const initialState = {
  posts: [],
  otherList: []
}


export function ReducerPosts(state = initialState, action) {

  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        posts: action.payload
      }
    case DELETE_POST:
      console.log(action.payload)
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload)
      }
      
    default:
      return state;
  }
}