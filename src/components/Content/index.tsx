import React, { FC } from 'react';

import Education from '../Education';
import Experience from '../Experience';
import Projects from '../Project';
import Volunteer from '../Volunteer';

import './index.scss';

interface IProps {}

const Content: FC<IProps> = () => {
	return (
		<div className="content">
			<Experience />
			<Projects />
			<Education />
			<Volunteer />
		</div>
	);
};
export default Content;
