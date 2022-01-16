import React, { FC } from 'react';

import { ITimelineItem } from 'src/models/timeline';

import Heading from '../Heading';
import Timeline from '../Timeline';

import './index.scss';

interface IProps {}

const Education: FC<IProps> = () => {
	const educations: ITimelineItem[] = [
		{
			date: '2009 - 2014',
			title: 'Accounting and Audit',
			subtitle: 'Azerbaijan State University of Economics',
			content: "Bachelor's degree",
		},
	];
  
	return (
		<div className="education">
			<Heading title="Education" />
			<Timeline items={educations} />
		</div>
	);
};
export default Education;
