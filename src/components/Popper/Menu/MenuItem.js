import React from 'react';
// Material UI
import { Button, Divider } from '@mui/material';
import { styled } from '@mui/system';

const MenuItem = ({ data, onClick }) => {
	return (
		<>
			{data.saparate ? (
				<Divider orientation="horizontal" variant="fixed"></Divider>
			) : (
				<></>
			)}
			<ItemStyled
				fullWidth
				href={data.to ? data.to : null}
				startIcon={data.icons}
				onClick={onClick}
			>
				{data.title}
			</ItemStyled>
		</>
	);
};
const ItemStyled = styled(Button)(({ theme }) => ({
	padding: theme.spacing(1.3, 3),
	justifyContent: 'flex-start',
	color: '#000',
	fontWeight: 600,
	fontSize: 12,
	textTransform: 'capitalize',
}));

export default MenuItem;
