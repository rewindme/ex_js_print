/*
*
* MonthSheet
*
*/
import React, {Component, Fragment} from "react";
import PropTypes from "prop-types";
import Memo from "./Memo";


export class MonthSheet extends Component {
	mon_type = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dev"];

	constructor(props) {
		super(props);

		// this.state = {};
	}

	componentDidMount() {
		const frames = window.document.getElementsByClassName("frame");
		const el = frames[this.props.idx];
		el.style.position = "relative";
		el.style.width = "900px";
		el.style.height = `${700}px`;
		el.style.top = "1cm";
		// el.style.top = "-110px";
		el.style.left = "1cm";
		// el.style.border = "1px solid black";
		// window.print();
	}

	render() {
		return (
			<div className="page">
				<span className="test"><span className="month_str">{this.mon_type[this.props.idx]}. <span style={{fontWeight: "normal"}}>2018</span></span></span>
				<span className="test"><div className="month">{`${this.props.idx + 1}`}</div></span>
				<div className="end"  dangerouslySetInnerHTML={{__html: this.props.htmlData}} />
				<Memo/>
			</div>
		);
	}
}

MonthSheet.defaultProps = {};

MonthSheet.propTypes = {};

export default MonthSheet;
