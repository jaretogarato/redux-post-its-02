import React from 'react'
import { connect } from 'react-redux'
import Postit from './Postit';
import { Card, Icon, Image } from 'semantic-ui-react';

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



const PostitList = ({ postits, filter }) => (
  // <div>Postit List</div>
    <div>
      { viewable(postits, filter).map( t => <Postit key={t.id} {...t} /> ) }
    </div>
)

const mapStateToProps = (state) => {
  return { postits: state.postits, filter: state.filter }
}

export default connect(mapStateToProps)(PostitList);
