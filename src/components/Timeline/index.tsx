import React, { FC } from 'react';

import { ITimelineItem } from 'src/models/timeline';

import TimelineItem from './Item';

import './index.scss';

interface IProps {
	items: ITimelineItem[];
}

const Timeline: FC<IProps> = ({ items }) => (
	<ul className="timeline">
		{items.map((item, index) => (
			<TimelineItem item={item} key={index} />
		))}
	</ul>
);
export default Timeline;
