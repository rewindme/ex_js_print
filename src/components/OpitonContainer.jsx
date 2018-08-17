/*
*
* OpitonContainer
*
*/
import React, {Component, Fragment} from "react";
import PropTypes from "prop-types";


export class OpitonContainer extends Component {
	constructor(props) {
		super(props);

		console.log(props.option_ui);
		// this.state = {};

	}

	render() {
		return (
			<div>
				<div style={{width: "12cm", margin: "auto"}} dangerouslySetInnerHTML={{__html: this.props.option_ui}}>
				</div>
			</div>
		);
	}
}

OpitonContainer.defaultProps = {};

OpitonContainer.propTypes = {};

export default OpitonContainer;
