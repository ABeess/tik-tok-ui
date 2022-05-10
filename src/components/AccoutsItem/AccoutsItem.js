import React from 'react'
import className from 'classnames/bind'
import Styles from './AccoutsItem.module.scss'

//  react icons
import { BsFillCheckCircleFill } from 'react-icons/bs'

const cx = className.bind(Styles)

const AccoutsItem = () => {
	return (
		<div className={cx('wrapper')}>
			<img
				className={cx('avatar')}
				src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/ea0854578085ab26effc2c7b8cefa270~c5_100x100.jpeg?x-expires=1652328000&x-signature=esze0aPqtdfDwA0Tr%2Fb%2B45%2BqxBE%3D"
				alt="hoaa"
			/>
			<div className={cx('info')}>
				<p className={cx('name')}>
					<span>A Bees</span>
					<BsFillCheckCircleFill className={cx('check')} />
				</p>
				<span className={cx('username')}>Đào Lê Phương Hoa</span>
			</div>
		</div>
	)
}

export default AccoutsItem
