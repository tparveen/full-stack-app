import React from 'react';
import {connect} from 'react-redux';
import * as actions from './actions';

export default class NewPaula extends React.Component {
	update(e) {
		e.preventDefault();
		this.props.dispatch(actions.replace_paula(this.refs.paula.value));
	}

	render() {
		return <form onSubmit={this.update}>
			<input ref="paula" />
			<input type="submit" value="Replace Paula" />
		</form>;
	}
}
