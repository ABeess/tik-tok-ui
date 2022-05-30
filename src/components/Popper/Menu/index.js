import React from 'react';
import PopperWrapper from '../PopperWrapper';
import { Box } from '@mui/material';
import Tippy from '@tippyjs/react/headless'; // different import path!
import MenuItem from './MenuItem';
import Header from './Header';

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
			placement="bottom-end"
			render={(attrs) => (
				<Box sx={{ width: width }}>
					<PopperWrapper>
						{history.length > 1 && (
							<Header title="language" onBack={handleOnBack}></Header>
						)}

						{renderItem()}
					</PopperWrapper>
				</Box>
			)}
			onHide={() => setHistory((prev) => prev.slice(0, 1))}
		>
			{children}
		</Tippy>
	);
};

export default Menu;
