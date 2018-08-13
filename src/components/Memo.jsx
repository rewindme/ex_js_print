/*
*
* Memo
*
*/
import React, {Component} from "react";
// import PropTypes from "prop-types";


export class Memo extends Component {
	constructor(props) {
		super(props);

		const arr = [];
		for (let i = 0; i < 16; i++) {
			arr[i] = i;
		}
		this.state = {arr};
	}

	render() {
		return (
			<div className="memo">
				<div style={{borderBottom: "1px solid #000", height: "20px"}}>Memo</div>
				<ul>
					{this.state.arr.map((a, i) => (
						<li className="memo_li" key={i}>
							<input type="checkbox"/>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

Memo.defaultProps = {};

Memo.propTypes = {};

export default Memo;
