/*
*
* MonthSheet
*
*/
import React, {Component} from "react";
// import PropTypes from "prop-types";
import Memo from "./Memo";


export class MonthSheet extends Component {
	mon_type = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dev"];

	// constructor(props) {
	// 	super(props);
	// 	// this.state = {};
	// }

	componentDidMount() {
		const frames = window.document.getElementsByClassName("frame");
		const el = frames[this.props.idx];
		el.style.position = "relative";
		el.style.width = `${24}cm`;
		el.style.height = `${18}cm`;
		// el.style.top = "1cm";
		// el.style.left = "1cm";
		el.style.top = "0";
		el.style.left = "0";
		// el.style.border = "1px solid black";
		// window.print();
	}

	render() {
		return (
			<div className="page">
				<div className="page_bg">
				<span className="module_layout"><span className="month_str">{this.mon_type[this.props.idx]}. <span style={{fontWeight: "normal"}}>2018</span></span></span>
				<span className="module_layout"><div className="month">{`${this.props.idx + 1}`}</div></span>
				<div className="end"  dangerouslySetInnerHTML={{__html: this.props.htmlData}} />
				<Memo/>
				</div>
			</div>
		);
	}
}

MonthSheet.defaultProps = {};

MonthSheet.propTypes = {};

export default MonthSheet;
