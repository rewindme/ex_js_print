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

		for (let i = 0; i < 3; i++) {
			arr[i] = i;
		}
		this.state = {htmlData, arr};
		// console.log(htmlData);
		window.print();
	}

	componentDidMount() {
		var beforePrint = () => {
			// alert('Before');
			this.hideBtn();
		};

		var afterPrint = () => {
			// alert('After');
			this.showBtn();
		};

		// 코드 참고한 곳 https://stackoverflow.com/questions/29912933/determine-if-print-cancel-button-in-google-chromes-print-preview-is-clicked
		if (window.matchMedia) {// 사파리에서 동작하기 위한 조건문(ie 에서도 되는지 확인)
			var mediaQueryList = window.matchMedia('print');

			mediaQueryList.addListener(function (mql) {
				//alert($(mediaQueryList).html());
				if (mql.matches) {
					beforePrint();
				} else {
					afterPrint();
				}
			});
		}

		window.onbeforeprint = beforePrint;
		window.onafterprint = afterPrint;

		console.log("componentDidMount");
	}

	onClickPrint = () => {
		this.hideBtn();
		window.print();
	};

	hideBtn = () => {
		const btn_area = window.document.getElementById("btn_area");
		btn_area.style.display = "none";
	};

	showBtn = () => {
		const btn_area = window.document.getElementById("btn_area");
		btn_area.style.display = "block";
	};

	render() {
		return (
			<div>
				<div id="btn_area">
					<input type="button" value="인쇄" className="print_btn" onClick={this.onClickPrint}/>
				</div>
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
