import { BrowserRouter, Routes, Route} from 'react-router-dom'
import {TodoList} from './components/TodoList'
import { HomePage } from './pages/HomePage';

function App() {

  return (
    <>
      <BrowserRouter basename="/todolist-react">
      <Routes>
        <Route path="/todolist-react/" element={<HomePage />} />
        <Route path="/todolist-react/todo/:id" element={<TodoList />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
