/*
*
* PrintGuide
*
*/
import React, {Component, Fragment} from "react";
import PropTypes from "prop-types";


export class PrintGuide extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div id="print_guide_tooltip" className="print_hide">
				<img src="../images/firefox_print.jpg"/>
				<img src="../images/safari.jpg"/>
			</div>
		);
	}
}

PrintGuide.defaultProps = {};

PrintGuide.propTypes = {};

export default PrintGuide;
