
import './App.scss'
import { Success } from './components/Success'
import { Users } from './components/Users'
import { useUsers } from './hooks/useUser'

// Тут список пользователей: https://reqres.in/api/users



function App() {

	const {
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
	} = useUsers()

	return (
		<div className='App'>
			{success ? (
				<Success count={invites.length} />
			) : (
				<Users
					invites={invites}
					onClickInvite={onClickInvite}
					searchValue={searchValue}
					onChangeSeacrhValue={onChangeSeacrhValue}
					items={users}
					isLoading={isLoading}
					onClickSendInvites={onClickSendInvites}
				/>
			)}
		</div>
	)
}

export default App
