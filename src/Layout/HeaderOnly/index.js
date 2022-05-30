import React from 'react';
import Header from '@/Layout/DefaultLayout/Header';

export const HeaderOnly = ({ children }) => {
	return (
		<div>
			<Header />
			<div className="container">
				<div className="content">{children}</div>
			</div>
		</div>
	);
};
