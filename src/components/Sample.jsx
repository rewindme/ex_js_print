/*
*
* Sample
*
*/
import React from 'react'
import PropTypes from 'prop-types'


const Sample = ({ htmlData="" }) => {
	const st = {
		display: "absolute",
		width: 1000,
		height: 400,
		border: "3px solid #000"
	};
	return (
		<div dangerouslySetInnerHTML={{__html: htmlData}} style={st}>
		</div>
	);
}


Sample.propTypes = {
	htmlData: PropTypes.string.isRequired,
}

export default Sample

