import React from 'react';

//  react icons
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import { Link } from 'react-router-dom';
import { Avatar, Box, Stack, Typography } from '@mui/material';
import { styled } from '@mui/system';

const AccoutsItem = ({ data }) => {
	return (
		<LinkStyled to={`@${data.nickname}`}>
			<Avatar src={data.avatar} alt={data.nickname} />
			<Stack
				sx={{
					paddingLeft: 2,
				}}
			>
				<Box sx={{ display: 'flex', alignItems: 'center', fontSize: 16 }}>
					<Typography
						variant="h4"
						fontSize="inherit"
						sx={{ color: '#212121', marginRight: 0.5 }}
					>
						{data.nickname}
					</Typography>
					{data.tick && (
						<CheckCircleIcon fontSize="inherit" color="info" />
					)}
				</Box>
				<Typography variant="body1" sx={{ fontSize: 12, color: '#9e9e9e' }}>
					{data.full_name}
				</Typography>
			</Stack>
		</LinkStyled>
	);
};
const LinkStyled = styled(Link)(({ theme }) => ({
	display: 'inline-flex',
	width: '100%',
	alignItems: 'center',
	padding: theme.spacing(1, 2),
	'&:hover': {
		backgroundColor: '#fafafa',
	},
}));

export default AccoutsItem;
