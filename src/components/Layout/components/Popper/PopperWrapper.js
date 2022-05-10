import React from 'react'
import className from 'classnames/bind'
import Styles from './Popper.module.scss'
const cx = className.bind(Styles)

const PopperWrapper = ({ children }) => {
	return <div className={cx('wrapper')}>{children}</div>
}

export default PopperWrapper
