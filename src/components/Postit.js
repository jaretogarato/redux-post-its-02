import React from 'react';
import { connect } from 'react-redux';
import { togglePostit } from '../actions/postits';

const styles = {
  normal_priority: {
    color: 'black'
  },
  high_priority: {
    color: 'red'
  },
  postit: {
    cursor: 'pointer',
  }
}

const Postit = ({ id, name, normal_priority, dispatch }) => (
  <li
    // onClick={ () => dispatch({ type: 'TOGGLE_POSTIT', id }) }
    onClick={ () => dispatch(togglePostit(id)) }
    style={ normal_priority ? {...styles.normal_priority, ...styles.postit} : {...styles.high_priority, ...styles.postit} }

  >
    { name }
  </li>

)

export default connect()(Postit); // have to have dispatch in here if using connect
