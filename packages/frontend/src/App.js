import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import TaskPage from './pages/TaskPage/TaskPage'
import HomePage from './pages/HomePage/HomePage'
import CreatePage from './pages/CreatePage/'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/task' element={<TaskPage />} />
          <Route path='/create' element={<CreatePage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
