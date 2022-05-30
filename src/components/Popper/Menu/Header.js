import React from 'react';
import { styled } from '@mui/system';
import { Box, IconButton, Typography } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
const HeaderStyled = styled(Box)(({ theme }) => ({
	display: 'flex',
	position: 'relative',
	marginTop: '-8px',
}));
const Header = ({ children, width, title, onBack }) => {
	return (
		<>
			<HeaderStyled>
				<IconButton aria-label="OnBack" onClick={onBack}>
					<ChevronLeftIcon sx={{ fontSize: '20px' }} />
				</IconButton>
				<Typography
					variant="h4"
					color="initial"
					sx={{
						textAlign: 'center',
						position: 'absolute',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%,-50%)',
					}}
				>
					{title}
				</Typography>
			</HeaderStyled>
		</>
	);
};

export default Header;
