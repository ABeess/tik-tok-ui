import React from 'react';
// Components
import Header from './Header';
import SideBar from './SideBar';
// Material UI
import { Container, Grid } from '@mui/material';

export const DefaultLayout = ({ children }) => {
	return (
		<>
			<Header />
			<Container
				maxWidth="lg"
				sx={{
					height: '100%',
					marginTop: 8,
				}}
			>
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
