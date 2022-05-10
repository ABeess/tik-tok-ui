import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import Styles from './Header.module.scss'
import images from '@/assets/images'
// React Icon
import { FiSearch } from 'react-icons/fi'
import { AiFillCloseCircle, AiOutlineLoading3Quarters } from 'react-icons/ai'
// Tippy
import Tippy from '@tippyjs/react/headless' // different import path!
import 'tippy.js/dist/tippy.css' // optional
// Components
import { PopperWrapper } from '@/components/Layout/components/Popper'
import AccoutsItem from '@/components/AccoutsItem/AccoutsItem'

const cx = classNames.bind(Styles)

const Header = () => {
	const [searchResults, setSearchResults] = useState([])
	useEffect(() => {
		setTimeout(() => {
			setSearchResults([])
		}, 0)
	})
	return (
		<header className={cx('wrapper')}>
			<div className={cx('content')}>
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
				<div className={cx('actions')}></div>
			</div>
		</header>
	)
}

export default Header
