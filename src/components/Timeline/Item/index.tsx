import React, { FC } from 'react';

import { ITimelineItem } from 'src/models/timeline';

import './index.scss';

interface IProps {
  item: ITimelineItem
}

const TimelineItem: FC<IProps> = ({ item }) => {
	const { date, title, subtitle, content } = item;
	return (
		<li className="timeline-item">
			<div className="timeline-item__date">{date}</div>
			<div className="timeline-item__title">{title}</div>
			{subtitle && <div className="timeline-item__subtitle">{subtitle}</div>}
			<pre className="timeline-item__content">{content}</pre>
		</li>
	);
};
export default TimelineItem;
