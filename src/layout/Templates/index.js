import React from "react";
import './style.scss';
import plus from '../../assets/img/Group 5423.svg';
import defaultTemp from '../../assets/img/Group 5456.svg';

const Templates = () => {
	const map = [{}, {}, {}, {}, {}];
	return (
		<div className='wrapper-templates'>
			<h1>Шаблоны</h1>
			<div className='all-temp'>
				<div className='add-temp'>
					<p>Создать шаблон</p>
					<img src={plus} alt="plus"/>
				</div>

				{map.map(el => (
					<div className='user-temp'>
						<p>Пример оформления</p>
						<img src={defaultTemp} alt="temp"/>
						<button>Выбрать шаблон</button>
					</div>
				))}
			</div>
		</div>
	)
}

export default Templates;