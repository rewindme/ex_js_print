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
		console.log(e.target.checked);
		if (e.target.checked) {
			el.classList.remove("print_preview_hide");
		} else {
			el.classList.add("print_preview_hide");
		}
	};

	onGuideShowCheck = e => {
		const pages = window.document.getElementsByClassName("page");
		const els = [...pages];
		console.log(pages);
		els.map(el => {
			if (e.target.checked) {
				el.classList.add("layout_guide");
			} else {
				el.classList.remove("layout_guide");
			}
		});
	};

	render() {
		return (
			<div className="test_option_panel">
				<input type="checkbox" id="preview_show_checkbox" onChange={this.onPreviewShowCheck} defaultChecked={true}/>
				<label htmlFor="preview_show_checkbox"> 미리보기 표시</label>
				<br/>
				<input type="checkbox" id="guide_show_checkbox" onChange={this.onGuideShowCheck} defaultChecked={false}/>
				<label htmlFor="guide_show_checkbox"> 인쇄 가이드라인 표시</label>
			</div>
		);
	}
}

TestPanel.defaultProps = {};

TestPanel.propTypes = {};

export default TestPanel;
