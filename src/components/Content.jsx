import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './Content.css'
import Nav from './content/nav/Nav'
import Profile from './content/profile/Profile'
import Dialogs from './content/dialogs/Dialogs'
import Music from './content/Music/Music'
import Settings from './content/Settings/Settings'
import News from './content/News/News'

const Content = () => {
	return (
		<BrowserRouter>
			<div className='Content'>
				<Nav />
				<Routes>
					<Route path='/profile' element={<Profile />} />
					<Route path='/dialogs*' element={<Dialogs />} />
					<Route path='/news' element={<News />} />
					<Route path='/music' element={<Music />} />
					<Route path='/settings' element={<Settings />} />
				</Routes>
			</div>
		</BrowserRouter>
	)
}

export default Content
