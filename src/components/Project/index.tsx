import React, { FC } from 'react';

import { ITimelineItem } from 'src/models/timeline';

import Heading from '../Heading';
import Timeline from '../Timeline';

import './index.scss';

interface IProps {}

const Projects: FC<IProps> = () => {
	const projects: ITimelineItem[] = [
		{
			date: '2021',
			title: 'Workstreams.ai Web App',
			subtitle: 'https://app.workstreams.ai/',
			content:
				'Results-driven task management for Slack, Microsoft Teams, and Google. \n\n Technologies: React, Redux, Redux-Saga, NodeJS, DynamoDB, AWS, Mocha & Chai (Unit tests), Selenium (E2E Tests)',
		},
		{
			date: '2021',
			title: 'BirBank V2',
			subtitle: 'https://www.birbank.az/',
			content:
				'Internet Banking Platform for Kapital Bank Customers. \n\n Technologies: React, NodeJS, ExpressJS, TypeScript',
		},
		{
			date: '2020',
			title: 'Birkart V2',
			subtitle: 'https://www.birkart.az/',
			content:
				'Personal Cabinet and Informative website for Birkart users (Credit/Installment card of Kapital Bank). \n\n Technologies: React, NodeJS, ExpressJS, TypeScript, VueJS (Control Panel), PostgreSQL',
		},
		{
			date: '2020',
			title: 'DVS',
			subtitle: 'https://digital.kapitalbank.az/',
			content:
				'Digital Verification system allows Bank Customers to open accounts, order products via Video Call without visiting the branch. \n\n Technologies: React, NodeJS, ExpressJS, TypeScript, PostgreSQL, WebRTC, SipJS, FreeSwitch, SMS Service',
		},
		{
			date: '2019',
			title: 'TaxRefund',
			subtitle: 'https://edvgerial.az/',
			content:
				'TaxRefund Portal where customers can refund their VAT via providing bill ID or scan QR code. \n\n Technologies: NodeJS, ExpressJS, EJS, Vanilla Javascript',
		},
		{
			date: '2019',
			title: 'BPM',
			subtitle: 'Internal Platform',
			content:
				'Business Process Management where specialists manage all customer journeys (customer information, create or approve orders, opening accounts, deposits, credit score, etc.).  \n\n Platform Developed in cooperation with IBMx \n\n Technologies: React, Redux, Redux-Saga, Jest & Enzyme (Unit Testing), Cypress (E2E Tests)',
		},
	];
	return (
		<div className="projects">
			<Heading title="Projects" />
			<Timeline items={projects} />
		</div>
	);
};
export default Projects;
