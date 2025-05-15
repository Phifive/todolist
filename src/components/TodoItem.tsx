import { useState } from 'react'
import type { TodoItemProps } from '../types'

export default function TodoItem({ todo, onToggleComplete, onDelete, onEdit }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(todo.text)

  const handleSave = () => {
    if (editText.trim()) {
      onEdit(todo.id, editText)
      setIsEditing(false)
    }
  }

  return (
    <li className='flex items-center justify-between border-b px-4 py-2 hover:bg-gray-50'>
      <div className='flex items-center gap-2'>
        <input
          type='checkbox'
          checked={todo.completed}
          onChange={() => onToggleComplete(todo.id)}
          className='h-5 w-5 text-blue-500'
        />
        {isEditing ? (
          <input
            type='text'
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className='border border-gray-300 rounded px-2 py-1 w-60'
          />
        ) : (
          <span className={`text-lg ${todo.completed ? 'line-through text-gray-400' : ''}`}>{todo.text}</span>
        )}
      </div>

      <div className='flex items-center gap-2'>
        {isEditing ? (
          <button onClick={handleSave} className='text-sm px-3 py-1 rounded bg-green-500 text-white hover:bg-green-600'>
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className='text-sm px-3 py-1 rounded bg-yellow-400 text-white hover:bg-yellow-500'
          >
            Edit
          </button>
        )}

        <button
          onClick={() => onDelete(todo.id)}
          className='text-sm px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600'
        >
          Delete
        </button>
      </div>
    </li>
  )
}
