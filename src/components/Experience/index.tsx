import React, { FC } from 'react';

import { ITimelineItem } from 'src/models/timeline';

import Heading from '../Heading';
import Timeline from '../Timeline';

import './index.scss';

interface IProps {}

const Experience: FC<IProps> = () => {
	const experiences: ITimelineItem[] = [
		{
			date: 'Mar 2021 - Present',
			title: 'Full Stack Developer',
			subtitle: 'Workstreams.ai GmbH',
			content:
				'Being a part of an international (from Germany, the USA, Czechia, North Macedonia, India, Azerbaijan, Egypt, Brazilia, Turkey, Vietnam, Australia) startup team in the global market taught me to be agile, innovative and the importance of MVP and MVF (Minimum Viable Feature). I get to experience a different culture from around the world.',
		},
		{
			date: 'Nov 2018 - Mar 2021',
			title: 'Frontend Developer',
			subtitle: 'Kapital Bank OJSC',
			content: 'As a part of the oldest and biggest Bank of Azerbaijan taught me to be a team player of not only big corporate but also small squads. I got to experience a corporate culture.',
		},
		{
			date: 'Dec 2017 - Nov 2018',
			title: 'Full Stack Developer',
			subtitle: 'Freelance',
			content: 'as A Freelancer I built multiple projects from scratch and learned new technologies. I got to experience the product development cycle in all aspects of the project from planning, design, development, testing, deployment, and maintenance.',
		},
		{
			date: 'Jan 2017 - Dec 2017',
			title: 'Frontend Developer',
			subtitle: 'VOIDA International LLC',
			content: 'Starting as a Frontend Developer in the international company I was a member of the passionate team and learned to be a team player.',
		},
	];

	return (
		<div className="experience">
			<Heading title="Experience" />
			<Timeline items={experiences} />
		</div>
	);
};
export default Experience;
