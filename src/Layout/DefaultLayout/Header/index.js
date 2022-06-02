import React from 'react';
// React Icon

import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '../../../components/Popper/Menu';
import PublicIcon from '@mui/icons-material/Public';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import {
	Container,
	Button,
	Avatar,
	Tooltip,
	Typography,
	Badge,
} from '@mui/material';
import Zoom from '@mui/material/Zoom';
import { Box, styled } from '@mui/system';
import MessageIcon from '@mui/icons-material/Message';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { LogoIcon } from '@/components/icons';
import SearchHeader from '@/Layout/DefaultLayout/SearchHeader';
import { Link } from 'react-router-dom';
import path from '@/config/path';

const MENU_ITEM = [
	{
		title: 'English',
		icons: <PublicIcon />,
		submenu: {
			title: 'Language',
			data: [
				{
					code: 'en',
					title: 'English',
				},
				{
					code: 'vi',
					title: 'vietnamese',
				},
			],
		},
	},
	{
		title: 'Feedback and help',
		icons: <QuestionMarkIcon />,
		to: '/feedback',
	},
	{
		title: 'Keyboard shortcuts',
		icons: <KeyboardIcon />,
	},
];
const ActionsStyled = styled(Box)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-around',
	fontSize: 18,
}));
const HeaderWrapper = styled('div')(({ theme }) => ({
	height: 60,
	width: '100%',
	boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.12)',
	display: 'flex',
	alignItems: 'center',
}));
const TitleTooltipStyled = styled(Typography)(({ theme }) => ({
	fontSize: 14,
	fontWeight: 'bold',
}));
const LogoLinkStyled = styled(Link)(({ theme }) => ({
	display: 'flex',
}));
const Header = () => {
	const currentUser = true;

	const userMenu = [
		{
			title: 'View profile',
			icons: <PermIdentityIcon />,
		},
		{
			title: 'Get coins',
			icons: <MonetizationOnOutlinedIcon />,
		},
		{
			title: 'Setting',
			icons: <SettingsOutlinedIcon />,
		},
		...MENU_ITEM,
		{
			title: 'Log Out',
			icons: <LogoutIcon />,
			saparate: true,
		},
	];

	return (
		<HeaderWrapper>
			<Container
				maxWidth="lg"
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					height: '100%',
					alignItems: 'center',
				}}
			>
				<LogoLinkStyled to={path.root}>
					<LogoIcon></LogoIcon>
				</LogoLinkStyled>

				<SearchHeader></SearchHeader>
				{/* action */}
				<ActionsStyled>
					{currentUser ? (
						<>
							<Tooltip
								TransitionComponent={Zoom}
								title={
									<TitleTooltipStyled variant="h5">
										Upload video
									</TitleTooltipStyled>
								}
								arrow
							>
								<IconButton
									aria-label="messages"
									sx={{ marginLeft: 2 }}
								>
									<CloudUploadIcon sx={{ fontSize: 22 }} />
								</IconButton>
							</Tooltip>
							<Tooltip
								title={
									<TitleTooltipStyled variant="h5">
										Inbox
									</TitleTooltipStyled>
								}
								arrow
								TransitionComponent={Zoom}
							>
								<IconButton
									aria-label="messages"
									sx={{ marginLeft: 2 }}
								>
									<Badge badgeContent={8} color="primary">
										<MessageIcon sx={{ fontSize: 22 }} />
									</Badge>
								</IconButton>
							</Tooltip>
						</>
					) : (
						<>
							<Button
								text
								size="large"
								sx={{
									fontSize: 14,
									color: '#000',
									textDecoration: 'underline',
								}}
							>
								Upload
							</Button>
							<Button
								variant="contained"
								size="large"
								sx={{ fontSize: 14, marginLeft: 2 }}
							>
								Log in
							</Button>
						</>
					)}
					<Menu width={224} items={currentUser ? userMenu : MENU_ITEM}>
						{currentUser ? (
							<Avatar
								alt="Remy Sharp"
								src="https://i.pinimg.com/originals/16/a0/b0/16a0b0e950d5b484e6b6303122f1823f.jpg"
								sx={{
									width: 32,
									height: 32,
									marginLeft: 2,
									cursor: 'pointer',
								}}
							/>
						) : (
							<IconButton aria-label="delete" size="medium">
								<MoreVertIcon
									sx={{ fontSize: '24px', marginLeft: 2 }}
								/>
							</IconButton>
						)}
					</Menu>
				</ActionsStyled>
			</Container>
		</HeaderWrapper>
	);
};

export default Header;
