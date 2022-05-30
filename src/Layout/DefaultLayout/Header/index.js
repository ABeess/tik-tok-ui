import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import Styles from './Header.module.scss';
import images from '@/assets/images';
// React Icon
import { FiSearch } from 'react-icons/fi';
import { AiFillCloseCircle, AiOutlineLoading3Quarters } from 'react-icons/ai';
// Tippy
import Tippy from '@tippyjs/react/headless'; // different import path!
import 'tippy.js/dist/tippy.css'; // optional
// Components
import { PopperWrapper } from '@/components/Popper';
import AccoutsItem from '@/components/AccoutsItem/AccoutsItem';

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
import { Container, Button, Avatar, Tooltip, Typography } from '@mui/material';
import Zoom from '@mui/material/Zoom';
import { Box, styled } from '@mui/system';
import MessageIcon from '@mui/icons-material/Message';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const cx = classNames.bind(Styles);

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
const Header = () => {
	const [searchResults, setSearchResults] = useState([
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
	]);
	const currentUser = true;

	useEffect(() => {
		setTimeout(() => {
			setSearchResults([]);
		}, 0);
	}, []);

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
				sx={{ display: 'flex', justifyContent: 'space-between' }}
			>
				<div className={cx('logo')}>
					<img src={images.logo} alt="TikTok" />
				</div>
				<Tippy
					interactive={true}
					visible={searchResults.length > 0}
					render={(attrs) => (
						<div className={cx('search-result')} tabIndex="-1">
							<PopperWrapper>
								<h4 className={cx('search-title')}>Account</h4>
								<AccoutsItem />
								<AccoutsItem />
								<AccoutsItem />
								<AccoutsItem />
								<AccoutsItem />
							</PopperWrapper>
						</div>
					)}
				>
					<div className={cx('search')}>
						<input
							className={cx('search-input')}
							placeholder="Tìm kiếm tài khoản và video"
							spellcheck={false}
						/>
						<button className={cx('clear-btn')}>
							<AiFillCloseCircle />
						</button>
						<AiOutlineLoading3Quarters className={cx('spinner')} />
						<button className={cx('search-btn')}>
							<FiSearch />
						</button>
					</div>
				</Tippy>
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
									<MessageIcon sx={{ fontSize: 22 }} />
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
								src="/static/images/avatar/1.jpg"
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
