export const addPostit = (postit) => {
  return { type: 'ADD_POSTIT', postit }
}

export const togglePostit = (id) => {
  return { type: 'TOGGLE_POSTIT', id }
}
