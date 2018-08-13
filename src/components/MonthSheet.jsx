/*
*
* MonthSheet
*
*/
import React, {Component, Fragment} from "react";
import PropTypes from "prop-types";


export class MonthSheet extends Component {
	mon_type = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dev"];

	constructor(props) {
		super(props);

		// this.state = {};
	}

	componentDidMount() {
		const frames = window.document.getElementsByClassName("frame");
		const el = frames[this.props.idx];
		el.style.position = "absolute";
		el.style.width = "900px";
		el.style.height = "740px";
		el.style.top = "1cm";
		el.style.left = "1cm";
		// el.style.border = "1px solid black";
		// window.print();
	}

	render() {
		return (
			<div className="page">
				<span className="month_str">{this.mon_type[this.props.idx]} 2018</span>
				<div className="month">{`${this.props.idx + 1}`}</div>
				<div  dangerouslySetInnerHTML={{__html: this.props.htmlData}} />
			</div>
		);
	}
}

MonthSheet.defaultProps = {};

MonthSheet.propTypes = {};

export default MonthSheet;
