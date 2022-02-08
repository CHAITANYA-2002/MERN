import { useState } from 'react';

import { ArrowDropDown, Notifications, Search } from '@material-ui/icons';
import './navbar.scss';

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	window.onscroll = () => {
		setIsScrolled(window.scrollY === 0 ? false : true);
		return () => (window.onscroll = null); // clean up function to prevent infinite loop
	};

	// console.log(isScrolled);

	return (
		<div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
			<div className='container'>
				<div className='left'>
					<img
						src='https://www.freepnglogos.com/uploads/netflix-logo-circle-png-5.png'
						alt='netflix logo'
					/>
					<span>Homepage</span>
					<span>Series</span>
					<span>Movies</span>
					<span>New and Popular</span>
					<span>My List</span>
				</div>
				<div className='right'>
					<Search className='icon' />
					<span>KID</span>
					<Notifications className='icon' />
					<img
						src='https://media-exp1.licdn.com/dms/image/C4E03AQEzZduBDZBINw/profile-displayphoto-shrink_200_200/0/1624456993903?e=1629936000&v=beta&t=D-aEZKUTcJB-v1uRkSB1Ai5OXvsLKIOQ8Ntw3ojJQYM'
						alt='profile'
					/>
					<div className='profile'>
						<ArrowDropDown className='icon' />
						<div className='options'>
							<span>Settings</span>
							<span>Logout</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
