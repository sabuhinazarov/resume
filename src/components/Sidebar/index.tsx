import React, { FC } from 'react';

import Profile from '../Profile';
import Contact from '../Contact';
import LanguageSkills from '../Skill/Language';
import DevelopmentSkills from '../Skill/Development';
import Hobbies from '../Hobby';

import './index.scss';

interface IProps {}

const Sidebar: FC<IProps> = () => {
	return (
		<aside className="sidebar">
			<div className="sidebar__frames">
				<div className="frame"></div>
				<div className="frame"></div>
				<div className="frame"></div>
				<div className="frame"></div>
			</div>
			<div className="sidebar__content">
				<Profile />
				<Contact />
				<LanguageSkills />
				<DevelopmentSkills />
				<Hobbies />
			</div>
		</aside>
	);
};
export default Sidebar;
