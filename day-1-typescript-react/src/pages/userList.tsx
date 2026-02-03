import { useEffect, useState } from 'react'
import type { User } from '../types/user'
import UserCard from '../components/card'

const UserList = () => {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://dummyjson.com/users')

        if (!response.ok) {
          throw new Error('Failed to fetch users')
        }

        const data = await response.json()

        setUsers(data.users)
      } catch (err) {
        setError('Something went wrong while fetching users')
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  if (loading) {
    return (
      <div className="d-flex justify-content-center my-5">
        <div className="spinner-border text-primary" role="status" aria-hidden="true"></div>
        <span className="visually-hidden">Loading users...</span>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mt-4">
        <div className="alert alert-danger text-center">{error}</div>
      </div>
    )
  }

  return (
    <div className="container mt-4 px-2 px-sm-3">
      <h2 className="mb-4 text-center">Users List</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  )
}

export default UserList
