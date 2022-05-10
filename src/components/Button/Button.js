import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import Styles from './Button.module.scss'

const cx = classNames.bind(Styles)

const Button = ({
	to,
	href,
	className = false,
	primary = false,
	outline = false,
	small = false,
	large = false,
	text = false,
	disabled = false,
	rounded = false,
	children,
	onClick,
	...passProps
}) => {
	let Components = 'button'
	const props = {
		onClick,
		...passProps,
	}
	if (to) {
		props.to = to
		Components = Link
	} else if (href) {
		props.href = href
		Components = 'a'
	}
	// remove event listeners from components
	if (disabled) {
		Object.keys(props).forEach((key) => {
			if (key.startsWith('on') && props[key] === 'function') {
				delete props[key]
			}
		})
	}
	const classes = cx('wrapper', {
		[className]: className,
		primary,
		outline,
		text,
		rounded,
		small,
		large,
		disabled,
	})
	return (
		<Components className={classes} {...props}>
			<span>{children}</span>
		</Components>
	)
}

export default Button
