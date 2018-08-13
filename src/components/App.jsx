/*
*
* App
*
*/
import React, {Component} from "react";
// import PropTypes from "prop-types";
import SampleHTML from "../data/SampleHTML";
import MonthSheet from "./MonthSheet";


export class App extends Component {
	constructor(props) {
		super(props);

		const htmlData = SampleHTML.data;
		const arr = [];

		for (let i = 0; i < 10; i++) {
			arr[i] = i;
		}
		this.state = {htmlData, arr};
		// console.log(htmlData);
	}

	render() {
		return (
			<div>
				{this.state.arr.map((el, i) => (
					<MonthSheet htmlData={this.state.htmlData} idx={i} key={"month" + i}/>
				))}
			</div>
		);
	}
}

App.defaultProps = {};

App.propTypes = {};

export default App;
