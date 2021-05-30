import React from "react";
import './style.scss';
import arrow from '../../assets/img/Vector.svg';
import FileEditor from "../FileEditor";
import {useHistory} from "react-router-dom";
import {saveAs} from "file-saver";
import { Document, Packer, Paragraph } from "docx";

const SpecificTemp = () => {
	const history = useHistory();

	const generate = () => {
		const doc = new Document({
			sections: [
				{
					children: [
						new Paragraph("Hello World"),
					]
				}
			]
		});

		Packer.toBlob(doc).then(blob => {
			saveAs(blob, "doc.docx");
		});
	}

	return (
		<div className='wrapper-spec-temp'>
			<div className='spec-temp-panel'>
				<p onClick={() => {
					history.push('/templates/')
				}}><img src={arrow} alt="arrow"/>Назад к шаблонам</p>
				<div className='spec-temp-buttons'>
					<button className='button1'>Сохранить</button>
					<button onClick={generate} className='button2'>Скачать шаблон</button>
				</div>
			</div>
			<div className='main-doc'>
				<FileEditor/>
			</div>
		</div>
	)
}

export default SpecificTemp;