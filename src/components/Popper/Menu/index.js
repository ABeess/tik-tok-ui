import React from 'react';
// Components
import PopperWrapper from '../PopperWrapper';
import MenuItem from './MenuItem';
import Header from './Header';
// Material UI
import { Box } from '@mui/material';
import { styled } from '@mui/system';
// Tippy
import Tippy from '@tippyjs/react/headless';

const Menu = ({ children, width, items }) => {
	const [history, setHistory] = React.useState([{ data: items }]);
	const currentMenu = history[history.length - 1];
	const handleClick = (submenu) => {
		const isParent = !!submenu;
		if (isParent) {
			setHistory((prev) => [...prev, submenu]);
		}
	};
	const handleOnBack = () => {
		setHistory((prev) => prev.splice(0, prev.length - 1));
	};
	const renderItem = () => {
		return currentMenu.data.map((item, index) => (
			<MenuItem
				data={item}
				key={index}
				onClick={() => handleClick(item.submenu)}
			/>
		));
	};
	return (
		<Tippy
			interactive={true}
			delay={[0, 800]}
			hideOnClick={false}
			placement="bottom-end"
			render={(attrs) => (
				<Box sx={{ width: width }}>
					<PopperWrapper>
						{history.length > 1 && (
							<Header title="language" onBack={handleOnBack}></Header>
						)}

						<ScrollableStyled>{renderItem()}</ScrollableStyled>
					</PopperWrapper>
				</Box>
			)}
			onHide={() => setHistory((prev) => prev.slice(0, 1))}
		>
			{children}
		</Tippy>
	);
};
const ScrollableStyled = styled(Box)(({ theme }) => ({
	overflowY: 'auto',
}));

export default Menu;
