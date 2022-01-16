import React, { FC } from 'react';

import { IContact } from 'src/models/contact';

import Heading from '../Heading';

import './index.scss'

interface IProps {}

const Contact: FC<IProps> = () => {
	const contacts: IContact[] = [
		{
			icon: 'lab la-github',
			title: 'Github',
			value: '@sabuhinazarov',
			link: 'https://github.com/sabuhinazarov',
		},
		{
			icon: 'lab la-linkedin-in',
			title: 'LinkedIn',
			value: '@sabuhinazarov',
			link: 'https://www.linkedin.com/in/sabuhinazarov/',
		},
		{
			icon: 'lar la-envelope',
			title: 'Email',
			value: 'nazarov@sabuhi.com',
			link: 'mailto:nazarov@sabuhi.com',
		},
		{
			icon: 'las la-phone',
			title: 'Mobile',
			value: '+994 51 527 74 27',
			link: 'tel:+994515277427',
		},
	];
  
	return (
		<div className="skill-block contact">
			<Heading title="Contact Details" />
			<ul className="contacts">
				{contacts.map(({ link, icon, value, title }, index) => (
					<li key={index}>
						<a href={link} target="_blank" rel="noopener noreferrer">
							<i className={icon}></i>
							<div className="details">
								<div className="value">{value}</div>
								<div className="title">{title}</div>
							</div>
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};
export default Contact;
