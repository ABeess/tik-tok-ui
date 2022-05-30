import React from 'react';
import className from 'classnames/bind';
import Styles from './AccoutsItem.module.scss';

//  react icons
import { BsFillCheckCircleFill } from 'react-icons/bs';

const cx = className.bind(Styles);

const AccoutsItem = () => {
	return (
		<div className={cx('wrapper')}>
			<img
				className={cx('avatar')}
				src="https://i.pinimg.com/originals/16/a0/b0/16a0b0e950d5b484e6b6303122f1823f.jpg"
				alt="hoaa"
			/>
			<div className={cx('info')}>
				<p className={cx('name')}>
					<span>Dao le phuong hoa</span>
					<BsFillCheckCircleFill className={cx('check')} />
				</p>
				<span className={cx('username')}>Đào Lê Phương Hoa</span>
			</div>
		</div>
	);
};

export default AccoutsItem;
