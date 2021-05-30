import React from "react";
import './style.scss';
import {useHistory} from 'react-router-dom';

const Sidebar = () => {
	const history = useHistory();

	return (
		<div className='wrapper-sidebar'>
			<p onClick={() => {history.push('/main/')}}>Главное</p>
			<p onClick={() => {history.push('/templates/')}}>Шаблоны</p>
			<p onClick={() => {history.push('/doc1/')}}>Док</p>
		</div>
	)
}

export default Sidebar;