import { Component } from 'react'
import MonacoEditor from '@uiw/react-monacoeditor';

import styled from "styled-components";

export default class Editor extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			code: props.code ? props.code : "",
			filename: props.filename ? props.filename : "file",
			language: props.language ? props.language : "JavaScript",
		}
	}

	onChange = value => {
		this.setState({ ...this.state, code: value });
	}

	THEME = "tomorrow";
	SHOW_LINE_NUMBERS = true;
	SHOW_COPY_BUTTON = false;
	SHOW_LANGUAGE = false;


	render() {
		return (
			<EditorWrapper>
				<MonacoEditor language={this.state.language} value={this.state.code} options={{ theme: "vs-dark" }} height="100vh" />
			</EditorWrapper>
		)
	}
}

const EditorWrapper =  styled.div`
	overflow: hidden;
`;