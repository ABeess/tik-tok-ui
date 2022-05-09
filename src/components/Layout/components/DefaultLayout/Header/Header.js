import React from 'react'
import classNames from 'classnames/bind'
import Styles from './Header.module.scss'
const cx = classNames.bind(Styles)

const Header = () => {
	return (
		<header className={cx('wrapper')}>
			<div className={cx('content')}></div>
		</header>
	)
}

export default Header
