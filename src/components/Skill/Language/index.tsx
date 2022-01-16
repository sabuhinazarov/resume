import React, { FC } from 'react';

import Heading from 'src/components/Heading';
import { ILanguage } from 'src/models/language';

import './index.scss';

interface IProps {}

const LanguageSkills: FC<IProps> = () => {
	const languages: ILanguage[] = [
		{ title: 'English', level: 'Fluent' },
		{ title: 'Polish', level: 'Intermediate' },
		{ title: 'Russian', level: 'Beginner' },
		{ title: 'Turkish', level: 'Almost Native' },
		{ title: 'Azerbaijani', level: 'Native' },
	];
	return (
		<div className="skill-block">
			<Heading title="Language Skills" />
			<ul className="lang-skills">
				{languages.map(({ title, level }, index) => (
					<li key={index}>
						<span className="lang-title">{title}</span>
						<span className="lang-level">{level}</span>
					</li>
				))}
			</ul>
		</div>
	);
};
export default LanguageSkills;
