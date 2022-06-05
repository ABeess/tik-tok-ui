import React from 'react';
// Material UI
import { Box, IconButton, Typography } from '@mui/material';
import { styled } from '@mui/system';
// Material icon
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

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
						fontSize: 18,
						textTransform: 'capitalize',
					}}
				>
					{title}
				</Typography>
			</HeaderStyled>
		</>
	);
};
const HeaderStyled = styled(Box)(({ theme }) => ({
	display: 'flex',
	position: 'relative',
	marginTop: '-8px',
	flexShrink: 0,
}));
export default Header;
