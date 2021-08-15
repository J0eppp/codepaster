import { Component } from 'react'

import Editor from "../Editor";

import styled from "styled-components";

export default class Home extends Component {
	render() {
		return (
			<HomeWrapper>
				<Editor />
			</HomeWrapper>
		)
	}
}

const HomeWrapper = styled.div`
	// background: #2d2d2d;
	// margin: 0;
	// padding: 0;
`;