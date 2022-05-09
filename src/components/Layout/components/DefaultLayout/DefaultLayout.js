import React from 'react'
import Header from './Header/Header'
import SideBar from './SideBar/SideBar'
import Styles from './DefaultLayout.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(Styles)

export const DefaultLayout = ({ children }) => {
	return (
		<div className={cx('warpper')}>
			<Header />
			<div className={cx('container')}>
				<SideBar />
				<div className={cx('content')}>{children}</div>
			</div>
		</div>
	)
}
