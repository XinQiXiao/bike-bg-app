/**
 * create at 09/19/18
 */
import React, { Component } from 'react'
import { Card, Button, Modal } from 'antd'
import { Editor } from 'react-draft-wysiwyg'
import draftjs from 'draftjs-to-html'

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

class RichPage extends Component{
	state = {
		showRichText: false,
		editorState: '',
		contentState: {},
	}

	_onEditorStateChange = (editorState)=>{
		this.setState({
			editorState
		})
	}
	_onContentStateChange = (contentState)=>{
		this.setState({
			contentState
		})
	}

	_clearContent = ()=>{
		this.setState({
			editorState: ''
		})
	}
	_getHTMLContent = ()=>{
		this.setState({
			showRichText: true
		})
	}

	render(){
		const {editorState, showRichText, contentState} = this.state
		return (
			<div>
				<Card>
					<Button type="primary" onClick={this._clearContent}>清空内容</Button>
					<Button type="primary" 
						style={{marginLeft: 10}} onClick={this._getHTMLContent}
					>获取HTML文本</Button>
				</Card>
				<Card title="富文本" style={{marginTop: 5}}>
					<Editor
						editorState={editorState}
						onContentStateChange={this._onContentStateChange}
						onEditorStateChange={this._onEditorStateChange}
					/>
				</Card>
				<Modal
					title="富文本内容"
					visible={showRichText}
					footer={null}
					onCancel={()=> this.setState({showRichText: false})}
				>
					{draftjs(contentState)}
				</Modal>
			</div>
		)
	}
}

export default RichPage