import React from 'react';
import { connect } from 'react-redux';
import { incId } from '../actions/nextId';
import { addPostit } from '../actions/postits';

class PostitForm extends React.Component {
  state = { name: '' }

  onChange = (e) => {
    this.setState({ name: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // get name from input
    let name = this.state.name;

    let { dispatch, id } = this.props;
    let postit = { name, id, normal_priority: true }

    // update Redux store
    // dispatch({ type: 'ADD_POSTIT', postit });
    dispatch(addPostit(postit));
    // dispatch({ type: 'INC_ID' });
    dispatch(incId());

    // clear inputs
    this.setState({ name: '' });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <span><strong>Make a new Post-It: </strong></span>
          <input value={this.state.name} onChange={this.onChange} />
        </form>
        <div>&nbsp;</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { id: state.nextId }
}

// const PostitForm = () => <div>Postit form </div>

export default connect(mapStateToProps)(PostitForm);
