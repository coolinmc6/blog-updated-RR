import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
	componentDidMount() {
		this.props.fetchPosts();
	}
	
	render() {
		return(
			<div>
				PostsIndex
			</div>
		)
	}
}


// ({ fetchProps}) = exactly like mapping mapDispatchToProps 
export default connect(null, { fetchPosts } )(PostsIndex);