import React, { FC } from 'react';

import './index.scss';

interface IProps {
	title: string;
}

const Heading: FC<IProps> = ({ title }) => (
	<div className="heading">{title}</div>
);

export default Heading;
