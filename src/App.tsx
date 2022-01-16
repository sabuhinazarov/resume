import React, { FC } from 'react';

import Content from './components/Content';
import Sidebar from './components/Sidebar';

import './App.scss';

interface IProps {}

const App: FC<IProps> = () => {
	return (
		<div className="resume">
			<Sidebar />
			<Content />
		</div>
	);
};
export default App;
