import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
	return (
		<div className='Nav'>
			<div>
				<div className='item'>
					<NavLink
						to='/profile'
						className={({ isActive }) => (isActive ? 'red' : 'blue')}
					>
						Profile
					</NavLink>
				</div>
				<div className='item'>
					<NavLink
						to='/dialogs'
						className={({ isActive }) => (isActive ? 'red' : 'blue')}
					>
						Messages
					</NavLink>
				</div>
				<div className='item'>
					<NavLink
						to='/news'
						className={({ isActive }) => (isActive ? 'red' : 'blue')}
					>
						News
					</NavLink>
				</div>
				<div className='item'>
					<NavLink
						to='/music'
						className={({ isActive }) => (isActive ? 'red' : 'blue')}
					>
						Music
					</NavLink>
				</div>
				<div className='item'>
					<NavLink
						to='/settings'
						className={({ isActive }) => (isActive ? 'red' : 'blue')}
					>
						Settings
					</NavLink>
				</div>
			</div>
		</div>
	)
}

export default Nav
