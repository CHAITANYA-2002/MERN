import { useState } from 'react';

import {
	Add,
	PlayArrow,
	ThumbDownOutlined,
	ThumbUpAltOutlined,
} from '@material-ui/icons';
import './listItem.scss';

const ListItem = ({ index }) => {
	const [isHovered, setIsHovered] = useState(false);
	const trailer =
		'https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761';
	return (
		<div
			className='listItem'
			style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<img
				src='https://lumiere-a.akamaihd.net/v1/images/solo-a-star-wars-story-theatrical-poster-2_f4af9297.jpeg?region=0%2C397%2C1298%2C646&width=960'
				alt=''
			/>

			{isHovered && (
				<>
					<video src={trailer} autoPlay={true} loop />
					<div className='itemInfo'>
						<div className='icons'>
							<PlayArrow className='icon' />
							<Add className='icon' />
							<ThumbUpAltOutlined className='icon' />
							<ThumbDownOutlined className='icon' />
						</div>
						<div className='itemInfoTop'>
							<span>1 hour 14 mins</span>
							<span className='limit'>+16</span>
							<span>1999</span>
						</div>

						<div className='desc'>
							Board the Millennium Falcon and journey to a galaxy far, far away
							in Solo: A Star Wars Story, an all-new adventure with the most
							beloved scoundrel in the galaxy. Through a series of daring
							escapades deep within a dark and dangerous criminal underworld,
							Han Solo meets his mighty future copilot Chewbacca and encounters
							the notorious gambler Lando Calrissian, in a journey that will set
							the course of one of the Star Wars saga’s most unlikely heroes.
						</div>
						<div className='genre'>Si-fi</div>
					</div>
				</>
			)}
		</div>
	);
};

export default ListItem;
