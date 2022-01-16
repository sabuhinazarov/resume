import React, { FC } from 'react';

import './index.scss'

interface IProps {}

const Profile: FC<IProps> = () => (
	<div className="profile">
		<div className="profile__photo">
			<img src="/images/sabuhinazarov.jpg" alt="Sabuhi Nazarov" />
		</div>
		<div className="profile__name">Sabuhi Nazarov</div>
		<div className="profile__position">Front-End Developer</div>
	</div>
);

export default Profile;
