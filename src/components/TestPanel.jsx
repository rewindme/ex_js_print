/*
*
* TestPanel
*
*/
import React, {Component, Fragment} from "react";
import PropTypes from "prop-types";


export class TestPanel extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	onPreviewShowCheck = e => {
		const el = window.document.getElementById("print_preview");
		// console.log(e.target.checked);
		if (e.target.checked) {
			el.classList.remove("print_hide");
		} else {
			el.classList.add("print_hide");
		}
	};

	onGuideShowCheck = e => {
		const pages = window.document.getElementsByClassName("page");
		const els = [];//ie에서 [...pages]로 사용하면 오류 발생
		// console.log(pages);
		for (let i = 0; i < pages.length; i++) {
			els.push(pages[i])
		}
		els.map(el => {
			if (e.target.checked) {
				el.classList.add("layout_guide");
			} else {
				el.classList.remove("layout_guide");
			}
		});
	};

	onShowPrintGuide = e => {
		const el = window.document.getElementById("print_guide_tooltip");
		console.log(el.style.display);
		if (el.style.display !== "block") {
			el.style.display = "block";
		} else {
			el.style.display = "none";
		}
	};

	render() {
		return (
			<div className="test_option_panel out_of_print">
				<input type="checkbox" id="preview_show_checkbox" onChange={this.onPreviewShowCheck} defaultChecked={true}/>
				<label htmlFor="preview_show_checkbox"> 미리보기 표시</label>
				<br/>
				<input type="checkbox" id="guide_show_checkbox" onChange={this.onGuideShowCheck} defaultChecked={false}/>
				<label htmlFor="guide_show_checkbox"> 인쇄 가이드라인 표시</label>
				{/*<br/>*/}
				{/*<br/>*/}
				{/** 헤더/푸터는 사용자가 직접 인쇄 옵션에서 제거해주어야 함 <input type="button" value="가이드 보기" onClick={this.onShowPrintGuide}/>*/}

			</div>
		);
	}
}

TestPanel.defaultProps = {};

TestPanel.propTypes = {};

export default TestPanel;
