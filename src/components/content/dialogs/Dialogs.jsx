import React from 'react'
import './Dialogs.css'
import { NavLink } from 'react-router-dom'

const DialogItem = props => {
	let path = '/dialogs/' + props.id

	return (
		<div className='dialogs'>
			<NavLink
				to={path}
				className={({ isActive }) => (isActive ? 'd-active' : 'd-no')}
			>
				{props.name}
			</NavLink>
		</div>
	)
}

const Message = props => {
	return <div className='mesagge'>{props.message}</div>
}

const Dialogs = props => {
	let dialogsData = [
		{ id: 1, name: 'Dimaa' },
		{ id: 2, name: 'Andrey' },
		{ id: 3, name: 'Sveta' },
		{ id: 4, name: 'Sasha' },
		{ id: 5, name: 'Viktor' },
		{ id: 6, name: 'Valera' },
	]

	let dialogsElements = dialogsData.map(dialog => (
		<DialogItem name={dialog.name} id={dialog.id} />
	))

	let messagesData = [
		{ id: 1, message: 'hi' },
		{ id: 2, message: 'Hello' },
		{ id: 3, message: 'how are you?' },
		{ id: 4, message: 'Nice' },
	]

	let messagesElemnts = messagesData.map(message => (
		<Message message={message.message} />
	))

	return (
		<div className='Dialogs'>
			<div className='dialogs-items'>{dialogsElements}</div>
			<div className='messages-items'>{messagesElemnts}</div>
		</div>
	)
}

export default Dialogs
