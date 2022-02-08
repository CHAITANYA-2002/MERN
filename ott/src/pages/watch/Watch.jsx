import { ArrowBackOutlined } from '@material-ui/icons';
import React from 'react';

import './watch.scss';

const Watch = () => {
	return (
		<div className='watch'>
			<div className='back'>
				<ArrowBackOutlined />
				Home
			</div>

			<video
				className='video'
				autoPlay
				progress
				controls
				src='https://static.videezy.com/system/resources/previews/000/041/670/original/sunset_water.mp4'
			/>
		</div>
	);
};

export default Watch;
