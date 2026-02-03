import './App.css'
import UserList from './pages/userList'

function App() {
  return (
    <div className="container py-4 px-2 px-md-4">
      <header className="mb-4">
        <h1 className="h4 text-center">Welcome to Kanban Project — Day 1</h1>
      </header>
      <main>
        <UserList />
      </main>
    </div>
  )
}

export default App
