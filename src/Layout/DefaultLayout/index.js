import React from 'react';
import Header from './Header';
import SideBar from './SideBar';
import { Container, Grid } from '@mui/material';

export const DefaultLayout = ({ children }) => {
	return (
		<>
			<Header />
			<Container maxWidth="lg">
				<Grid container spacing={2}>
					<Grid item xs={3}>
						<SideBar />
					</Grid>
					<Grid item xs={9}>
						<div>{children}</div>
					</Grid>
				</Grid>
			</Container>
		</>
	);
};
