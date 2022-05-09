import React from 'react'
import classNames from 'classnames/bind'
import Styles from './Header.module.scss'
import images from '@/assets/images'
// React Icon
import { FiSearch } from 'react-icons/fi'
import { AiFillCloseCircle, AiOutlineLoading3Quarters } from 'react-icons/ai'
const cx = classNames.bind(Styles)
const Header = () => {
	return (
		<header className={cx('wrapper')}>
			<div className={cx('content')}>
				<div className={cx('logo')}>
					<img src={images.logo} alt="TikTok" />
				</div>
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
				<div className={cx('actions')}></div>
			</div>
		</header>
	)
}

export default Header
