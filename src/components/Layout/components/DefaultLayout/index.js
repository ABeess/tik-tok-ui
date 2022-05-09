import React from 'react'
import Header from './Header/Header'
import SideBar from './SideBar/SideBar'

export const DefaultLayout = ({ children }) => {
	return (
		<div>
			<Header />
			<div className="container">
				<SideBar />
				<div className="content">{children}</div>
			</div>
		</div>
	)
}
