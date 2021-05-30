import {useState} from "react";
import {Editor} from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {EditorState, convertToRaw} from "draft-js";
import draftToHtml from 'draftjs-to-html';

const FileEditor = () => {
	const [editorState, setEditorState] = useState(() => {
		return EditorState.createEmpty()
	})

	let changeEditorState = (editorState) => {
		setEditorState(editorState);
	}

	const showData = async () => {
		const dataText = draftToHtml(convertToRaw(editorState.getCurrentContent()));
		console.log('dataText', dataText);
	}

	return (
		<div style={{padding: '20px'}}>
			<Editor
				editorState={editorState}
				toolbarClassName="toolbarClassName"
				wrapperClassName="wrapperClassName"
				editorClassName="editorClassName"
				onEditorStateChange={changeEditorState}
			/>
			<button className='button__addPost' onClick={showData}>Add</button>
		</div>
	);
}

export default FileEditor;
