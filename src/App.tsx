import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import type { Todo } from './types'
import { useEffect, useState } from 'react'

function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = (text: string) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false
    }
    setTodos([...todos, newTodo])
  }

  const toggleComplete = (id: number) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const editTodo = (id: number, newText: string) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo)))
  }

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos')
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <div className='px-20 min-h-screen bg-gradient-to-tr from-blue-100 via-pink-100 to-violet-200'>
      <title>vite + react + typescript</title>
      <meta
        name='description'
        content='Tạo, quản lý, và hoàn thành các công việc hàng ngày với Todo App đơn giản và hiệu quả. Lập kế hoạch ngay hôm nay!'
      />

      <header>
        <h1 className='text-red-400 font-bold text-6xl bg-blue-50 shadow-lg'>Todo App</h1>
        <p className='text-2xl text-center text-pink-300 p-10'>
          Vì ai em vội quên ăn sáng <br />
          Vì em anh vội lập kế hoạch hôm nay <br />
          Lên kế hoạch của bạn <b className='text-red-600'> tại đâyyy</b> <br />
          👇
        </p>
      </header>

      <TodoForm onAdd={addTodo} />
      <TodoList todos={todos} onToggleComplete={toggleComplete} onDelete={deleteTodo} onEdit={editTodo} />
    </div>
  )
}

export default App
