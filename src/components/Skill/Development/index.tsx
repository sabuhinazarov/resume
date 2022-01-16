import React, { FC } from 'react';

import Heading from 'src/components/Heading';

import './index.scss';

interface IProps {}

const DevelopmentSkills: FC<IProps> = () => {
	const skills: string[] = [
		'JavaScript',
		'React',
		'NodeJS',
		'AngularJS',
		'Angular 2+',
		'VueJS',
		'TypeScript',
		'Redux',
		'Redux-Saga, Redux-toolkit, React Context API, Hooks',
		'GraphQL',
		'Flutter',
		'SASS/SCSS',
		'HTML5',
		'CSS3',
		'ExpressJS',
		'MongoDB',
		'PostgreSQL',
		'MySQL',
		'GIT',
		'Webpack/Gulp',
		'Swift',
		'Dart',
		'Kotlin',
		'Python',
		'Linux Server/Desktop',
		'Docker, K8s, CD/CI (beginner)',
	];
	return (
		<div className="skill-block">
			<Heading title="Development Skills" />
			<ul className="dev-skills">
				{skills.map((skill) => (
					<li key={skill}>{skill}</li>
				))}
			</ul>
		</div>
	);
};
export default DevelopmentSkills;
