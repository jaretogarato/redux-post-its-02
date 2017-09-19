import React from 'react'
import { connect } from 'react-redux'
import Postit from './Postit';

const viewable = (postits, currentFilter) => {
  switch(currentFilter) {
    case 'All':
      return postits;
    case 'Top Priority':
      return postits.filter( t => !t.normal_priority )
    case 'Normal Priority':
      return postits.filter( t => t.normal_priority )
  }
}

const styles = {
  list_item: { list-style-type:none }
}

const PostitList = ({ postits, filter }) => (
  // <div>Postit List</div>
  <ul style={list_item}>
    { viewable(postits, filter).map( t => <Postit key={t.id} {...t} /> ) }
  </ul>
)

const mapStateToProps = (state) => {
  return { postits: state.postits, filter: state.filter }
}

export default connect(mapStateToProps)(PostitList);
