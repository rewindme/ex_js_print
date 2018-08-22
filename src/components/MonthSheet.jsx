/*
*
* MonthSheet
*
*/
import React, {Component, Fragment} from "react";
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
		// el.style.backgroundColor = "#eee";//test code
		// el.style.border = "1px solid black";
		// window.print();
	}

	render() {
		return (
			<Fragment>
				<div className="spacing out_of_print"></div>
				<div className="paper_guide">
					<div className="page">
						<div className="page_bg">
							<div className="side_layout">
								<span className="month_str"><span className="out_of_portrait">{this.mon_type[this.props.idx]}.</span> <span style={{fontWeight: "normal"}}>2018</span></span>
								<div className="month">{`${this.props.idx + 1}`}</div>
								<Memo/>
							</div>
							<div className="end"  dangerouslySetInnerHTML={{__html: this.props.htmlData}} />
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

MonthSheet.defaultProps = {};

MonthSheet.propTypes = {};

export default MonthSheet;
