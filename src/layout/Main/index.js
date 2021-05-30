import React from "react";
import './style.scss';
import {useHistory} from "react-router-dom";

const Main = () => {
	const history = useHistory();

	return (
		<div className='main-wrapper'>
			<h1>Главное меню</h1>
			<div className='main-wrapper-content'>
				<p onClick={() => {history.push('/templates/')}}>Посмотреть имеющиеся шаблоны</p>
				<p onClick={() => {history.push('/create/')}}>Создать новый</p>
			</div>
			<p className='main-info'>Инфо</p>
		</div>
	)
}

export default Main;