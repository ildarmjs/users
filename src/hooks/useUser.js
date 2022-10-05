import React, { useEffect, useState } from 'react'

export const useUsers = () => {
	const [invites, setInvites] = useState([])
	const [success, setSuccess] = useState(false)
	const [searchValue, setSearchValue] = useState('')
	const [users, setUsers] = useState([])
	const [isLoading, setLoading] = useState(true)

	useEffect(() => {
		fetch('https://reqres.in/api/users')
			.then(res => res.json())
			.then(json => setUsers(json.data))
			.catch(err => {
				console.log('Ошибка при получении пользователей', err)
			})
			.finally(() => setLoading(false))
	})

	const onClickInvite = id => {
		if (invites.includes(id)) {
			setInvites(prev => prev.filter(_id => _id !== id))
		} else {
			setInvites(prev => [...prev, id])
		}
	}

	const onClickSendInvites = () => {
		setSuccess(true)
	}

	const onChangeSeacrhValue = event => {
		setSearchValue(event.target.value)
	}

	return {
		onClickInvite,
		invites,
		setInvites,
		onClickSendInvites,
		setSuccess,
		success,
		onChangeSeacrhValue,
		searchValue,
		setSearchValue,
		users,
		setUsers,
		isLoading,
		setLoading,
	}
}
