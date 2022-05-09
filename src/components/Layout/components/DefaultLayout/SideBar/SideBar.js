import React from 'react'
import Styles from './SideBar.module.scss'
import className from 'classnames/bind'

const cx = className.bind(Styles)

const SideBar = () => {
	return <div className={cx('wrapper')}>SideBar</div>
}

export default SideBar
