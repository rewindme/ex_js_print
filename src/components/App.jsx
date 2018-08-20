/*
*
* App
*
*/
import React, {Component, Fragment} from "react";
// import PropTypes from "prop-types";
import SampleHTML from "../data/SampleHTML";
import MonthSheet from "./MonthSheet";
// import OpitonContainer from "./OpitonContainer";
import TestPanel from "./TestPanel";
import PrintGuide from "./PrintGuide";


export class App extends Component {
	constructor(props) {
		super(props);

		const htmlData = SampleHTML.data;
		const option_ui = SampleHTML.option_ui;
		const arr = [];

		for (let i = 0; i < 12; i++) {
			arr[i] = i + 1;
		}
		this.state = {
			htmlData,
			option_ui,
			arr,
			count: 2,
		};
		// window.print();
	}

	onClickPrint = () => {
		window.print();
	};

	onCountSelect = e => {
		console.log(e.target.value);
		this.setState({
			...this.state,
			count: e.target.value,
		});
	};

	render() {
		return (
			<Fragment>
				<TestPanel/>
				<PrintGuide/>
				<div id="btn_area" className="out_of_print">
					{/*<OpitonContainer option_ui={this.state.option_ui}/>*/}
					{/*<div id="layout_option" className="out_of_print">*/}
						{/*<input type="radio" id="rdo2_0" name="rdo0" className="radio01_landscape" checked={true}/>*/}
						{/*<label htmlFor="rdo2_0"> 가로</label>*/}
						{/*<input type="radio" id="rdo2_1" name="rdo0" className="radio01_portrait"/>*/}
						{/*<label htmlFor="rdo2_1"> 세로</label>*/}
					{/*</div>*/}
					<div className="term">
						다중 인쇄:
						<select defaultValue={this.state.count} onChange={this.onCountSelect}>
							{this.state.arr.map((count, i) => (
								<option value={i + 1} key={i}>{count}</option>
							))}
						</select>
						장
					</div>
					<input type="button" value="인쇄" className="print_btn" onClick={this.onClickPrint}/>
				</div>
				<div id="print_preview">
					<div className="preview_top_margin out_of_print"/>
					{this.state.arr.map((el, i) => {
						return (i < this.state.count) ? (<MonthSheet htmlData={this.state.htmlData} idx={i} key={"month" + i}/>) : null;
					})}
				</div>
			</Fragment>
		);
	}
}

App.defaultProps = {};

App.propTypes = {};

export default App;
