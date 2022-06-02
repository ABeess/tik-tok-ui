import React, { useEffect, useRef, useState } from 'react';
import { PopperWrapper } from '../../../components/Popper';
import { FiSearch } from 'react-icons/fi';
import { AiFillCloseCircle } from 'react-icons/ai';
// Tippy
import Tippy from '@tippyjs/react/headless'; // different import path!
import classNames from 'classnames/bind';
import Styles from './Search.module.scss'; // Components
import AccoutsItem from '@/components/AccoutsItem/AccoutsItem';
import { Box, CircularProgress, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useDebounce } from '@/hooks';
import { search } from '@/service/search';
const cx = classNames.bind(Styles);

const SearchHeader = () => {
	const [searchResults, setSearchResults] = useState([]);
	const [searchValue, setSearchValue] = useState('');
	const [showResults, setShowResults] = useState(true);
	const [loading, setLoading] = useState(false);
	const debounce = useDebounce(searchValue, 500);

	const inputRef = useRef();

	useEffect(() => {
		if (!debounce.trim()) {
			setSearchResults([]);
			return;
		}
		setLoading(true);
		const fetchData = async () => {
			try {
				const res = await search(debounce);
				setSearchResults(res.data);
				setLoading(false);
			} catch (err) {
				return err.response;
			}
		};
		fetchData();
	}, [debounce]);

	const handleOnChange = (e) => {
		const searchValue = e.target.value;
		if (!searchValue.startsWith(' ')) {
			setSearchValue(searchValue);
		}
	};
	const handleClear = () => {
		setSearchValue('');
		setSearchResults([]);
		inputRef.current.focus();
	};
	const handleHideResults = () => {
		setShowResults(false);
	};
	const handleShowResults = () => {
		setShowResults(true);
	};
	return (
		<Tippy
			interactive={true}
			visible={showResults && searchResults.length > 0}
			render={(attrs) => (
				<Box sx={{ width: 362 }}>
					<PopperWrapper>
						<SearchTitleStyle variant="h6">Account</SearchTitleStyle>
						{searchResults.map((item) => (
							<AccoutsItem key={item.id} data={item} />
						))}
					</PopperWrapper>
				</Box>
			)}
			onClickOutside={handleHideResults}
		>
			<div className={cx('search')}>
				<input
					value={searchValue}
					ref={inputRef}
					className={cx('search-input')}
					placeholder="Tìm kiếm tài khoản và video"
					onChange={handleOnChange}
					onFocus={handleShowResults}
				/>
				{!loading && !!searchValue && (
					<ClearIconStyle onClick={handleClear} />
				)}

				{loading && <LoadingIconStyle size={24} />}
				<button
					className={cx('search-btn')}
					onMouseDown={(e) => e.preventDefault()}
				>
					<FiSearch />
				</button>
			</div>
		</Tippy>
	);
};

const SearchTitleStyle = styled(Typography)(({ theme }) => ({
	padding: theme.spacing(0.5, 1.5),
	color: '#6c757d',
	fontSize: 16,
	fontWeight: 500,
}));
const ClearIconStyle = styled(AiFillCloseCircle)(({ theme }) => ({
	position: 'absolute',
	right: 68,
	color: '#bababd',
	padding: theme.spacing(0.7),
	cursor: 'pointer',
}));
const LoadingIconStyle = styled(CircularProgress)(({ theme }) => ({
	position: 'absolute',
	right: 68,
	color: '#bababd',
	padding: theme.spacing(0.7),
}));

export default SearchHeader;
