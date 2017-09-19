// never change the data type of state

const postits = (state = [], action) => {
  switch( action.type ) {
    case 'ADD_POSTIT':
      return [action.postit, ...state]
    case 'TOGGLE_POSTIT':
      return state.map( postit => {
        if (postit.id === action.id)
          return { ...postit, normal_priority: !postit.normal_priority }
        return postit;
      })
    default:
      return state;
  }
}

export default postits;
