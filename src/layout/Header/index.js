import React from "react";
import './style.scss';
import iconHeader from '../../assets/img/Group 5440.svg';
import {useHistory} from 'react-router-dom';

const Header = () => {
	const history = useHistory();

	return (
		<div style={{width: '100%', background: '#fff'}}>
			<div className='wrapper-header'>
				<img onClick={() => history.push('/main/')} src={iconHeader} alt="icon"/>
				<input placeholder='Поиск...' type="text"/>
			</div>
		</div>
	)
}

export default Header;