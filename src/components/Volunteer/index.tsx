import React, { FC } from 'react';

import { ITimelineItem } from 'src/models/timeline';

import Heading from '../Heading';
import Timeline from '../Timeline';

import './index.scss';

interface IProps {}

const Volunteer: FC<IProps> = () => {
	const volunteerings: ITimelineItem[] = [
		{
			date: 'May 2019 - Dec 2019',
			title: 'Organizer & Speaker',
			subtitle: 'Google Developers Group Baku',
			content:
				'DevFest Baku 2019 - Presenter, JavaScript and JS Frameworks - Speaker, React Native vs Flutter - Speaker',
		},
		{
			date: '2015',
			title: 'Secretary of Information and Technology',
			subtitle: '"IRELI" Public Union',
		},
		{
			date: '2014',
			title: 'Web Developer',
			subtitle: '"No Hate Speech Movement" Azerbaijan',
		},
		{
			date: '2013-2014',
			title: 'Chief of Center, Coach & Trainer',
			subtitle: 'Baku Debate Center',
		},
		{
			date: '2012',
			title: 'Web Developer',
			subtitle: '"STEP IN" Eurovision 2012 Support Group',
		},
	];

	return (
		<div className="volunteer">
			<Heading title="Volunteer Experience" />
			<Timeline items={volunteerings} />
		</div>
	);
};
export default Volunteer;
